import Image from "next/image";
import { List } from "lucide-react";
import Link from "next/link";

function ProductItem({ product }) {
  return (
    <Link href={`/product-details/${product?.id}`}>
      <article className="cursor-pointer border-2 border-gray-600 hover:border-gray-200  transition-all duration-300 overflow-hidden rounded-lg bg-gray-900 shadow-lg max-w-[300px] mx-auto sm:mx-0 p-3">
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt="banner-card"
          width={500}
          height={350}
          className="rounded-lg h-[150px] w-full object-cover"
        />

        <div className="py-3 px-2  sm:py-4">
          <div className="flex items-center justify-between">
            <a href="#">
              <h3 className="text-lg font-medium text-white line-clamp-1">
                {product?.attributes?.title}
              </h3>
            </a>

            <strong>{product?.attributes?.price}$</strong>
          </div>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-stone-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-blue-100 flex items-center space-x-2">
              <List className="text-sm w-5 h-5" />
              <span className="text-sm">{product?.attributes?.category}</span>
            </span>

            <a
              href="#"
              className=" transition-all inline-flex items-center gap-1 text-sm font-medium text-cyan-500 hover:text-cyan-400"
            >
              Find out more
              <span aria-hidden="true" className="block  rtl:rotate-180">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ProductItem;
