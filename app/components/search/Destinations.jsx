"use client";

import sampleImages from "@/app/lib/data";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Destinations() {
  const [startIndex, setStartIndex] = useState(0);

  const imagesPerPage = 4;
  const endIndex = startIndex + imagesPerPage;
  const visibleImages = sampleImages.slice(startIndex, endIndex);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, sampleImages.length - imagesPerPage)
    );
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 capitalize text-center text-teal-800">
        Expole Popular Destinations
      </h1>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 "
        data-aos="fade-right"
      >
        {visibleImages.map((product) => (
          <Link key={product.id} href={`/${product.id}`} className="block">
            <div className="rounded-lg p-2 border bg-teal-800 overflow-hidden mb-2">
              <div className="relative">
                <Image
                  src={product.url}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-60 rounded-md object-cover"
                />
              </div>

              <p className="mt-4 text-center text-lg font-medium text-white">
                {product.country}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`px-4 py-2 rounded bg-teal-800 text-white font-semibold ${
            startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          ◀ Previous
        </button>
        <button
          onClick={handleNext}
          disabled={endIndex >= sampleImages.length}
          className={`px-4 py-2 rounded bg-teal-800 text-white font-semibold ${
            endIndex >= sampleImages.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}
