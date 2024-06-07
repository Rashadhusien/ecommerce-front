import React from "react";
function Hero() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Understand User Flow.
            <span className="sm:block"> Increase Conversion. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

{
  /* <section className="bg-gray-50 ">
<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
  <div className="mx-auto max-w-xl text-center">
    <h1 className="text-black mb-5 text-3xl font-extrabold sm:text-5xl capitalize">
      All Your Digital Products
      <strong className="font-extrabold mt-2 text-primary block capitalize">
        Is On click away.
      </strong>
    </h1>

    <p className=" text-black mt-4 sm:text-xl/relaxed capitalize">
      start exploring state of the art assets now!
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <a
        className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-600 focus:outline-none focus:ring active:bg-teal-600 sm:w-auto"
        href="#"
      >
        Get Started
      </a>

      <a
        className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-teal-600 focus:outline-none focus:ring active:text-teal-600 sm:w-auto"
        href="#"
      >
        Learn More
      </a>
    </div>
  </div>
</div>
</section> */
}
