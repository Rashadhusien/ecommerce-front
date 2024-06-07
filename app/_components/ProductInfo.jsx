"use client";
import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import SkeletonProductInfo from "./skeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// import cartApi from "../_utils/cartApi";
import cartApi from "/app/_utils/cartApi.js";
import { useContext } from "react";
// import { CartContext } from "../_context/CartContext";
import { CartContext } from "/app/_context/CartContext.js";

function ProductInfo({ product }) {
  const { cart, setCart } = useContext(CartContext);

  const { user } = useUser();

  const router = useRouter();

  function handleAddToCart() {
    if (!user) {
      router.push("/sign-in");
    } else {
      // logic to add to cart

      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
        },
      };

      cartApi
        .addToCart(data)
        .then((res) => {
          console.log(res.data.data);
          setCart((oldCart) => [
            ...oldCart,
            {
              id: res?.data?.data?.id,
              product,
            },
          ]);
        })
        .catch((error) => console.log("error"));
    }
  }

  return (
    <>
      {product?.id ? (
        <div>
          <h2 className="text-[40px] ">{product?.attributes?.title}</h2>

          <p className="text-[20px] my-5 ">
            {product?.attributes?.description[0]?.children[0]?.text}
          </p>

          <h5 className="flex gap-2 my-3">
            Elgable For Instant Delivery:
            {product?.attributes?.instantDelivery ? (
              <BadgeCheck className="text-green-500" />
            ) : (
              <AlertOctagon className="text-red-500" />
            )}
          </h5>

          <div className="flex items-center justify-between">
            <h4 className="text-[20px] text-blue-500">
              Price: {product?.attributes?.price}$
            </h4>
            <h3 className="text-[13px] text-gray-400">
              category: {product?.attributes?.category}
            </h3>
          </div>

          <button
            onClick={() => handleAddToCart()}
            className="flex items-center justify-center p-2 rounded-lg mt-3 gap-1 w-full text-center bg-blue-700"
          >
            <ShoppingCart />
            Add To Cart
          </button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </>
  );
}

export default ProductInfo;
