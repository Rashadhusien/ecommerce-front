import Hero from "./_components/Hero";
import ProductSection from "./courses/page";

function Home() {
  return (
    <div>
      <div className="w-full h-[0.5px] bg-gray-800 " />
      <Hero />
      <ProductSection />
    </div>
  );
}

export default Home;
