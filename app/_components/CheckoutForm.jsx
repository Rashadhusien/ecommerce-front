import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
// import { CartContext } from "../_context/CartContext";
import { CartContext } from "/app/_context/CartContext.js";
import { useUser } from "@clerk/nextjs";

// import OrderApi from "../_utils/OrderApis";

import OrderApis from "/app/_utils/OrderApis.js";

// import cartApi from "../_utils/cartApi";
import cartApi from "/app/_utils/cartApi.js";

const CheckoutForm = ({ amount }) => {
  const { cart, setCart } = useContext(CartContext);

  const { user } = useUser();

  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    createOrder();

    sendEmail();

    const handleError = () => {
      setLoading(false);
      setErrorMessage(error.message);
    };

    const res = await fetch("api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });

    const clientSecret = await res.json();

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-Confirm",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  const createOrder = () => {
    let productId = [];

    cart.forEach((el) => productId.push(el?.Product?.id));

    const data = {
      data: {
        email: user.primaryEmailAddress.emailAddress,
        username: user.fullName,
        amount,
        products: productId,
      },
    };

    OrderApis.createOrder(data).then((res) => {
      if (res) {
        cart.forEach((el) => {
          cartApi.deleteCartItem(el?.id).then((result) => {});
        });
      }
    });
  };

  const sendEmail = async () => {
    const res = await fetch("api/send-email", {
      method: "POST",
    });
  };

  return (
    <form
      className="max-w-[500px] mx-auto flex flex-col p-3"
      onSubmit={handleSubmit}
    >
      <PaymentElement className="  mt-10 text-xl" />
      <button className=" p-2 rounded-md my-5 bg-blue-500 hover:bg-blue-800 duration-300">
        Submit
      </button>
    </form>
  );
};

export default CheckoutForm;
