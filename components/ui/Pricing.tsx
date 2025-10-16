"use client";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "../ui/Button";
import { Element } from "react-scroll";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const pricingData = [
  {
    title: "Brand Identity",
    description: "Establish a cohesive and memorable brand image.",
    price: "399.99",
    route: "/services/brand",
    features: [
      {
        title: "Well Curated Logo",
        description: "Scalable, suitable for all design needs.",
      },
      {
        title: "Comprehensive Brand Guide",
        description: "Consistent visuals & tone across platforms.",
      },
      {
        title: "Typography & Colors",
        description: "Professional selection for cohesive identity.",
      },
      {
        title: "Social Media Kit",
        description: "Ready-to-use branded assets.",
      },
    ],
  },
  {
    title: "Web / Mobile Development",
    description: "Build a stunning, user-friendly online presence.",
    price: "899.99",
    route: "/services/development",
    features: [
      {
        title: "Custom Responsive Design",
        description: "Optimized for all devices.",
      },
      {
        title: "Cross-Platform Compatibility",
        description: "Latest tools & technologies.",
      },
      { title: "Fast Loading Speeds", description: "Optimized performance." },
      {
        title: "24/7 Support",
        description: "Keep your site running smoothly.",
      },
    ],
  },
  {
    title: "Copywriting",
    description: "Captivating words to drive engagement and conversions.",
    price: "299.99",
    route: "/services/copywriting",
    features: [
      {
        title: "Social Media Captions",
        description: "Boost engagement with on-brand messaging.",
      },
      {
        title: "Product Descriptions",
        description: "Highlight benefits to convert sales.",
      },
      { title: "SEO Content", description: "Improve search rankings." },
    ],
  },
];

export function Pricing() {
  const router = useRouter();

  const navigateToRoute = (route: string, price: string, title: string) => {
    const url = `${route}?price=${encodeURIComponent(
      price
    )}&title=${encodeURIComponent(title)}`;
    router.push(url);
  };

  return (
    <section className='py-12 sm:py-16'>
      <Element name='pricing'>
        {/* Mobile: horizontal snap scroll / Desktop: grid */}
        <div
          className='flex lg:grid lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12 
                        overflow-x-auto lg:overflow-visible scroll-smooth snap-x snap-mandatory'
        >
          {pricingData.map((card, index) => (
            <Card
              key={index}
              className={cn(
                "flex-shrink-0 snap-center w-[85%] sm:w-[360px] lg:w-auto bg-gradient-to-r from-custom-start via-custom-middle to-custom-end border border-blue-500 rounded-3xl shadow-lg ring-2 ring-blue-800 transition-transform hover:scale-[1.02]",
                "flex flex-col justify-between"
              )}
            >
              <CardHeader>
                <CardTitle className='text-white text-xl sm:text-2xl lg:text-3xl'>
                  {card.title}
                </CardTitle>
                <CardDescription>
                  <p className='text-xs sm:text-sm mt-3 text-gray-300'>
                    {card.description}
                  </p>
                </CardDescription>
              </CardHeader>

              <CardContent className='flex-1 flex flex-col gap-4'>
                {/* Price */}
                <div className='flex items-center space-x-2 rounded-md p-2 sm:p-4'>
                  <div className='relative text-3xl sm:text-4xl lg:text-5xl font-bold leading-none text-blue-500'>
                    <span className='absolute -left-4 top-1 text-lg sm:text-xl'>
                      $
                    </span>
                    <span className='ml-2 sm:ml-4'>{card.price}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  text='Get Started'
                  className='text-white w-full'
                  onClick={() =>
                    navigateToRoute(card.route, card.price, card.title)
                  }
                />

                {/* Features */}
                <div className='space-y-4'>
                  {card.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className='grid grid-cols-[25px_1fr] gap-3 items-start border-b border-gray-700 pb-3'
                    >
                      <Check className='w-5 h-5 bg-blue-500 rounded-full text-white p-[2px]' />
                      <div>
                        <p className='text-sm font-medium text-white'>
                          {feature.title}
                        </p>
                        <p className='text-xs text-gray-400'>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter />
            </Card>
          ))}
        </div>
      </Element>
    </section>
  );
}
