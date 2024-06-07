import React from "react";
import Link from "next/link";

import { Check } from "lucide-react";
function PaymentConfirm() {
  return (
    <div className="flex flex-col items-center justify-center px-5 mt-4">
      <Check className="w-36 h-36" />

      <h2 className="text-[24px]">payment succeful !</h2>
      <h2>
        We sent an Email with your order confirmation along with digital content
      </h2>

      <Link href="/" className="p-2 my-6 text-white rounded-md bg-blue-900">
        Go to Home
      </Link>
    </div>
  );
}

export default PaymentConfirm;
