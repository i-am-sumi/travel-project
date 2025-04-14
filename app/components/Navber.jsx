"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../components/context/AuthContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  if (pathname === "/login") return null;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenubar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed mt-0 inset-0 bg-black bg-opacity-50 z-10 md:hidden"
        />
      )}

      <nav className="h-[80px] flex justify-between items-center px-6 py-6 text-white sticky top-0 z-20 bg-teal-800">
        <Link href="/">
          <Image
            src="/assets/travel-svg.png"
            alt="Logo"
            width={60}
            height={60}
          />
        </Link>

        <ul className="hidden md:flex gap-10 font-bold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Contact us</Link>
          </li>
          <li>
            <Link href="/booking">Bookings</Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm font-bold">{user.name}</span>
              <span className="h-6 w-px bg-white"></span>
              <button
                onClick={logout}
                className="text-sm text-white hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-bold hover:underline">
                Login
              </Link>
              <span className="h-6 w-px bg-white"></span>
              <Link href="#" className="text-sm font-bold hover:underline">
                Create account
              </Link>
            </>
          )}
          <button className="ml-4 bg-white text-teal-800 p-2 rounded-xl">
            <Link href={"hotelsDetails"}>Book Now</Link>
          </button>
        </div>

        <div className="md:hidden">
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {isMenuOpen && (
          <div className="fixed left-0 top-0 bg-teal-800 text-white z-20 p-16 md:hidden w-[250px] h-full shadow-lg rounded-r-lg">
            <button
              onClick={closeMenubar}
              className="absolute top-2 right-2 bg-red-600 text-white rounded px-2 py-1"
            >
              X
            </button>
            <ul className="flex flex-col gap-4 underline underline-offset-1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact us</Link>
              </li>
              <li>
                <Link href="/booking">Bookings</Link>
              </li>
              {!user ? (
                <li>
                  <Link href="/login">Login</Link>
                </li>
              ) : (
                <>
                  <li className="font-bold">{user.name}</li>
                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
