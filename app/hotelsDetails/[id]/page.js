import hotels from "@/app/lib/hotelsData";
import Image from "next/image";
import Link from "next/link";

export default function HotelsDetails({ params }) {
  const { id } = params;
  const hotel = hotels.find((item) => item.id === id);

  if (!hotel) {
    return (
      <div className="text-center text-red-500 mt-10 text-xl">
        Hotel not found
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 mt-8 mb-6">
      <div className="flex lg:flex-row gap-6">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800">{hotel.name}</h2>
          <p className="text-lg text-gray-600 mt-1 mb-3">📍 {hotel.location}</p>
          <span className="inline-block bg-yellow-300 text-black font-semibold px-3 py-1 rounded-md text-sm">
            ⭐ {hotel.rating} Star Property
          </span>
        </div>

        <div className="flex flex-col justify-center items-end">
          <h2 className="text-2xl font-bold text-right text-teal-800">
            ${hotel.pricePerNight}
          </h2>
          <p className="text-sm text-right text-gray-600">
            Per Night for 1 Room
          </p>
          <button className="mt-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-2 rounded-lg transition-all">
            <Link href={`/payment?price=${hotel.pricePerNight}`}>Book</Link>
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="rounded-lg overflow-hidden shadow-lg border-4 border-teal-200">
          <Image
            src={hotel.thumbnail}
            alt={hotel.name}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
