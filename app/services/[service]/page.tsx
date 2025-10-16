"use client";

import React, { useState, ChangeEvent, MouseEvent } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";

// ---------- Types ----------

interface PaymentOptionProps {
  icon?: string;
  label: string;
  fee?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

interface PriceDisplayProps {
  total: string;
}

interface FlutterwaveConfig {
  public_key: string;
  tx_ref: string;
  amount: number;
  currency: string;
  payment_options: string;
  customer: {
    email: string;
    phone_number: string;
    name: string;
  };
  customizations: {
    title: string;
    description: string;
    logo: string;
  };
}

// ---------- Components ----------

// Payment Option
const PaymentOption: React.FC<PaymentOptionProps> = ({
  icon,
  label,
  fee,
  disabled = false,
  onClick,
}) => (
  <div
    onClick={!disabled ? onClick : undefined}
    className={`flex flex-col items-center justify-center border rounded-xl p-4 text-center cursor-pointer transition ${
      disabled
        ? "opacity-40 cursor-not-allowed bg-gray-100"
        : "bg-white hover:bg-gray-50"
    }`}
  >
    {icon && (
      <div className='w-24 h-24 relative mb-2'>
        <Image src={icon} alt={label} fill className='object-contain' />
      </div>
    )}
    <p className='text-sm font-medium text-gray-800'>{label}</p>
    {fee && <p className='text-xs text-gray-500 mt-1'>{fee}</p>}
  </div>
);

// Discount Input
const DiscountInput: React.FC = () => {
  const [active, setActive] = useState(false);
  const [code, setCode] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCode(e.target.value);

  if (!active) {
    return (
      <button
        onClick={() => setActive(true)}
        className='w-full border border-white/60 rounded-full py-2 text-sm font-medium bg-transparent text-white hover:bg-white/10'
      >
        Apply Code
      </button>
    );
  }

  return (
    <div className='flex items-center border border-white/60 rounded-full overflow-hidden'>
      <input
        type='text'
        value={code}
        onChange={handleChange}
        placeholder='Enter your code'
        className='px-4 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none absolute'
      />
      <button
        onClick={() => alert(`Applied: ${code}`)}
        className='px-4 py-2 bg-white/20 text-white font-medium rounded-full relative ml-auto hover:bg-white/30'
      >
        Apply
      </button>
      <button
        onClick={() => {
          setActive(false);
          setCode("");
        }}
        className='px-3 py-2 text-white text-lg'
      >
        ✕
      </button>
    </div>
  );
};

// Price Display
const PriceDisplay: React.FC<PriceDisplayProps> = ({ total }) => {
  const [whole, decimal = "00"] = total.split(".");
  return (
    <div className='flex items-start justify-center my-5'>
      <span className='text-2xl font-bold mr-1'>$</span>
      <span className='text-5xl font-extrabold leading-none'>{whole}</span>
      <span className='text-2xl font-bold align-top mt-1 opacity-80'>
        .{decimal}
      </span>
    </div>
  );
};

// ---------- Page ----------

export default function CheckoutPage(): React.ReactElement {
  const params = useSearchParams();
  const title = params.get("title") || "Service";
  const price = parseFloat(params.get("price") || "0");
  const discount = 0;
  const total = (price - discount).toFixed(2);

  // Flutterwave config
  const config: FlutterwaveConfig = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY || "",
    tx_ref: Date.now().toString(),
    amount: parseFloat(total),
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    customer: {
      email: "customer@email.com",
      phone_number: "08100000000",
      name: "John Doe",
    },
    customizations: {
      title,
      description: `Payment for ${title}`,
      logo: "/logo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <Head>
        <title>{title} | Checkout</title>
        <meta name='description' content={`Checkout for ${title}`} />
      </Head>

      <div className='min-h-screen bg-[#0b0b23] flex flex-col items-center px-4 pt-24 relative'>
        <div className='w-full max-w-6xl grid lg:grid-cols-7 gap-4 bg-gray-100 p-5 rounded-3xl'>
          {/* Left: Summary */}
          <div className='rounded-3xl p-6 bg-gradient-to-b from-[#a259ff] to-[#6b4eff] text-white flex flex-col justify-evenly lg:col-span-2 mb-6 lg:mb-0 h-fit pb-48'>
            <h2 className='text-base text-center mb-3'>
              Total Amount to be Paid
            </h2>
            <PriceDisplay total={total} />
            <DiscountInput />

            <div className='mt-12 space-y-4 text-sm'>
              <div className='flex justify-between'>
                <span>Service</span>
                <span>{title}</span>
              </div>
              <div className='flex justify-between'>
                <span>Price</span>
                <span>${price.toFixed(2)}</span>
              </div>
              <div className='flex justify-between'>
                <span>Discount</span>
                <span>- ${discount.toFixed(2)}</span>
              </div>
              <div className='flex justify-between font-bold border-t border-white/40 pt-2'>
                <span>Total Amount</span>
                <span>${total}</span>
              </div>
            </div>
          </div>

          {/* Right: Payment Options */}
          <div className='rounded-3xl p-6 w-full lg:col-span-5'>
            <h2 className='text-lg font-semibold mb-6 text-gray-800'>
              Select a payment method
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              <PaymentOption
                icon='/Local.jpg'
                label='Local Cards'
                fee='+3% Provider Fees'
                onClick={() =>
                  handleFlutterPayment({
                    callback: (response) => {
                      console.log("Payment response:", response);
                      if (response.status === "successful") {
                        alert("Payment successful 🎉");
                        // TODO: verify on backend
                      } else {
                        alert("Payment failed or cancelled ❌");
                      }
                      closePaymentModal();
                    },
                    onClose: () => {},
                  })
                }
              />
              <PaymentOption icon='/Apple.png' label='Apple Pay' disabled />
              <PaymentOption icon='/Cards.gif' label='International Cards' />
              <PaymentOption
                icon='/Paypal.png'
                label='PayPal'
                fee='+3% Provider Fees'
              />
              <PaymentOption
                icon='/Verve.png'
                label='Verve'
                fee='+3% Provider Fees'
              />
              <PaymentOption
                icon='/Crypto.png'
                label='Crypto'
                fee='+3% Provider Fees'
              />
              <PaymentOption
                icon='/Bank.jpeg'
                label='Bank Transfer'
                fee='+3% Provider Fees'
              />
              <PaymentOption icon='/Google.png' label='Google Pay' />
              <PaymentOption
                icon='/Skrill.png'
                label='Skrill'
                fee='+3% Provider Fees'
              />
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className='max-w-6xl mt-8 text-xs text-gray-400 space-y-2 text-center'>
          <p>
            This charge will appear as <b>Miles Creative Agency</b> on your
            statement.
          </p>
          <p>
            Since the service is provided for training and content purposes
            only, refund policies depend on terms agreed.
          </p>
        </div>
      </div>
    </>
  );
}
