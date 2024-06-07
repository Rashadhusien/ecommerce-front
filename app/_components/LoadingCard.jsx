import React from "react";

function LoadingCard() {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
        return (
          <article
            key={item}
            className="cursor-pointer border-2 w-[300px] h-[400px] sm:w-[250px] md:w-[300px]  xl:w-[270px] border-gray-600 hover:border-gray-200  transition-all duration-300 overflow-hidden rounded-lg bg-gray-900 shadow-lg mx-auto sm:mx-0 p-3"
          >
            <div className="rounded-lg  h-full w-full bg-gray-500 object-cover animate-pulse" />
          </article>
        );
      })}
    </div>
  );
}

export default LoadingCard;
