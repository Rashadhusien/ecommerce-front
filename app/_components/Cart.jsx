import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import Link from "next/link";

function Cart({ setOpenCart }) {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="h-[300px] w-[300px] bg-gray-800 z-10 rounded-md border border-gray-400 hover:border-gray-50 duration-300 shadow-sm absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 sm:-left-[20px] sm:top-[200px] p-5 overflow-auto ">
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart?.map((item) => {
            console.log(item);
            return (
              <li
                key={item.id}
                className="flex items-center gap-4 border p-1 rounded-md border-dotted"
              >
                <img
                  src={item?.Product?.attributes?.banner?.data?.attributes?.url}
                  alt="product-item"
                  className="size-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-gray-100 line-clamp-1">
                    {item?.Product?.attributes?.title}
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-200">
                    <div>
                      <dt className="inline">Category:</dt>
                      <dd className="inline">
                        {item?.Product?.attributes?.category}
                      </dd>
                    </div>

                    <div>
                      <dt className="inline pr-1">Price:</dt>
                      <dd className="inline">
                        {item?.Product?.attributes?.price}$
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="space-y-4 text-center">
          <Link
            href="/cart"
            className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-100 transition hover:ring-1 hover:ring-gray-400"
            onClick={() => setOpenCart(false)}
          >
            View my cart ({cart?.length})
          </Link>

          <a
            href="#"
            className="inline-block text-sm text-gray-400 underline underline-offset-4 transition hover:text-gray-100   "
            onClick={() => setOpenCart(false)}
          >
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
