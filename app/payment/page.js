// app/payment/page.js
import dynamic from "next/dynamic";
import { Suspense } from "react";

const PaymentForm = dynamic(() => import("./PaymentForm"), {
  suspense: true,
});

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center mt-20">Loading Payment Form...</div>
      }
    >
      <PaymentForm />
    </Suspense>
  );
}
