"use client";
import React, { useContext } from "react";
// import { CartContext } from "../_context/CartContext";
import { CartContext } from "/app/_context/CartContext.js";
// import cartApi from "../_utils/cartApi";
import cartApi from "/app/_utils/cartApi.js";
// import AlertNote from "../_components/AlertNote";
import AlertNote from "/app/_components/AlertNote";
import { useRouter } from "next/navigation";

function Cart() {
  const router = useRouter();

  const { cart, setCart } = useContext(CartContext);

  const getTotalAmount = () => {
    let totalAmount = 0;

    cart.forEach((item) => {
      totalAmount += Number(item?.Product?.attributes?.price);
    });

    return totalAmount.toFixed(2);
  };

  function deleteCartItemFromList(id) {
    cartApi
      .deleteCartItem(id)
      .then((res) => {
        if (res) {
          setCart((oldCart) =>
            oldCart.filter((item) => item.id !== res.data.data.id)
          );
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent sm:text-5xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cart?.map((item) => {
                return (
                  <li className="flex items-center gap-4 ">
                    <img
                      src={
                        item?.Product?.attributes?.banner?.data?.attributes?.url
                      }
                      alt=""
                      className="size-16 rounded object-cover"
                    />

                    <div>
                      <h3 className="text-sm text-gray-100">
                        {item?.Product?.attributes?.title}
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-200">
                        <div>
                          <dt className="inline">category:</dt>
                          <dd className="inline">
                            {item?.Product?.attributes?.category}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      {item?.Product?.attributes?.price}$
                      <button
                        className="text-gray-200 transition hover:text-red-600"
                        onClick={() => deleteCartItemFromList(item?.id)}
                      >
                        <span className="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-200">
                  <div className="flex justify-between">
                    <div className="flex justify-between w-full items-center !text-base font-medium">
                      <dt>Total</dt>
                      <dd>${getTotalAmount()}</dd>
                    </div>
                  </div>
                </dl>
                <button
                  onClick={() =>
                    router.push(`/checkout?amount=${getTotalAmount()}`)
                  }
                  className="block text-center rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                >
                  Checkout
                </button>
              </div>
            </div>
            <AlertNote />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
