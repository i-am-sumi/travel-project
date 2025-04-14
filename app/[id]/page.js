import Image from "next/image";
import sampleImages from "../lib/data";

export default function DestinationDetail({ params }) {
  const { id } = params;
  const destination = sampleImages.find((item) => item.id === Number(id));

  if (!destination) {
    return (
      <div className="text-center text-red-600 text-xl mt-10">
        Destination Not Found
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-teal-900">
        {destination.country}
      </h1>
      <Image
        src={destination.url}
        alt={destination.title}
        width={600}
        height={400}
        className="mx-auto rounded-md shadow-md"
      />
      <p className="mt-4 text-lg text-teal-700">
        Places: <strong>{destination.title}</strong>
      </p>
      <p className="mt-2 text-base text-gray-600">{destination.description}</p>
    </div>
  );
}
