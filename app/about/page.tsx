import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/components/ui/HeroParallax";

const page = () => {
  return (
    <main>
      <HeroParallax products={products} />
    </main>
  );
};

export default page;
