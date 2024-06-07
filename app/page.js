// import Hero from "./_components/Hero";
import Hero from "/app/_components/Hero.jsx";
// import ProductSection from "./courses/page";
import ProductSection from "/app/courses/page.jsx";

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
