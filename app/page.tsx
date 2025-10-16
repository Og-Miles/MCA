import Facts from "@/components/Facts";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import { HeroScrollDemo } from "@/components/ui/HeroScrollDemo";

export default function Home() {
  return (
    <main className='items-center justify-center flex flex-col relative bg-black overflow-hidden '>
      <div className='w-full'>
        <Hero />
        <Facts />
        <HeroScrollDemo />
        <Services />
        <Process />
        <Plans />
        <Tools />
      </div>
    </main>
  );
}
