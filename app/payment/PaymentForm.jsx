"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function PaymentForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const price = searchParams.get("price") || 10;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      name,
      email,
      checkin,
      checkout,
      price,
    };

    const previousBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );

    const updatedBookings = [...previousBookings, newBooking];

    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    const bookingString = encodeURIComponent(JSON.stringify(updatedBookings));

    router.push(`/booking?bookings=${bookingString}`);
  };

  return (
    <div className="flex justify-center items-center h-screen my-12">
      <div className="bg-teal-300 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Payment</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-10 space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border"
          />
          <input
            type="date"
            value={checkin}
            required
            onChange={(e) => setCheckin(e.target.value)}
            className="w-full p-2 border"
          />
          <input
            type="date"
            value={checkout}
            required
            onChange={(e) => setCheckout(e.target.value)}
            className="w-full p-2 border"
          />
          <button type="submit" className="btn-primary w-full">
            Pay Now (${price})
          </button>
        </form>
      </div>
    </div>
  );
}
