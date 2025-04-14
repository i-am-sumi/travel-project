// app/bookings/page.js
import dynamic from "next/dynamic";
import { Suspense } from "react";

const BookingDetailsPage = dynamic(() => import("./BookingsDetailsPage"), {
  suspense: true,
});

export default function Page() {
  return (
    <Suspense
      fallback={<p className="text-center mt-10">Loading bookings...</p>}
    >
      <BookingDetailsPage />
    </Suspense>
  );
}
