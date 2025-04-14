"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookingDetailsPage() {
  const searchParams = useSearchParams();
  const bookingsParam = searchParams.get("bookings");

  const [bookings, setBookings] = useState([]);

  const loadBookings = () => {
    let data = [];

    try {
      if (bookingsParam) {
        data = JSON.parse(bookingsParam);
      } else {
        const fromStorage = localStorage.getItem("bookings");
        if (fromStorage) {
          data = JSON.parse(fromStorage);
        }
      }
    } catch (err) {
      console.error("Failed to parse bookings", err);
    }

    setBookings(data);
  };

  useEffect(() => {
    loadBookings();
  }, [bookingsParam]);

  const handleDelete = (indexToDelete) => {
    const updatedBookings = bookings.filter((_, i) => i !== indexToDelete);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <div className="bg-white p-6 rounded shadow border border-teal-200 mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-700">
          All Booking Details
        </h2>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-500">No bookings found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300 min-w-[700px]">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="border px-4 py-2">#</th>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Check-In</th>
                  <th className="border px-4 py-2">Checkout</th>
                  <th className="border px-4 py-2">Total Price</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => {
                  const checkinDate = new Date(booking.checkin);
                  const checkoutDate = new Date(booking.checkout);
                  const nights = Math.max(
                    1,
                    (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24)
                  );
                  const totalPrice = booking.price * nights;

                  return (
                    <tr key={index} className="hover:bg-teal-50">
                      <td className="border px-4 py-2 text-center">
                        {index + 1}
                      </td>
                      <td className="border px-4 py-2">{booking.name}</td>
                      <td className="border px-4 py-2">{booking.email}</td>
                      <td className="border px-4 py-2">{booking.checkin}</td>
                      <td className="border px-4 py-2">{booking.checkout}</td>
                      <td className="border px-4 py-2 text-center">
                        ${totalPrice.toFixed(2)}{" "}
                        <span className="text-xs text-gray-500">
                          ({nights} nights)
                        </span>
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
