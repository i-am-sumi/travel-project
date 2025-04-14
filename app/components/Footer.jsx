import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <a href="/index.html" className="text-3xl font-bold">
                <Image
                  src={`/assets/travel-svg.png`}
                  alt="lws-kitchen"
                  className="h-20 w-20"
                  width={100}
                  height={100}
                />
              </a>
              <p className="text-gray-600 mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Travel </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-500">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-500">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-500">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-500">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-500">
                    Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-500">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-500">
                    Copyright
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-500">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-500">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-500">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-500">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
