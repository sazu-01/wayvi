
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "../lib/hook";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const mainNavigation = [
    { name: "Templates", href: "/templates" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
  ];

  const authNavigation = [
    { name: "Login", href: "/login" },
    { name: "Get started", href: "/register", primary: true },
  ];

  return (
    <nav className="bg-[#101828] border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-2xl tracking-tight">
              Wayvi
            </Link>
          </div>

          {/* Desktop Center Navigation */}
          <div className="hidden sm:block flex-1 max-w-2xl">
            <div className="flex justify-center space-x-8">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-bold transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          {user !== null ? <div className="">
            <Image className="rounded-[50%]" src={user.image} width={40} height={40} alt="" /></div> : 
          <div className="hidden sm:flex items-center space-x-4">
            {authNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 ${
                  item.primary
                    ? "bg-white text-[#101828] hover:bg-gray-100"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>}
          

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white rounded-md p-2 transition-colors duration-200"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-[#101828] border-t border-gray-800">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-gray-800 my-2 pt-2">
              {authNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(!isOpen)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium mb-2 transition-all duration-200 ${
                    item.primary
                      ? "bg-white text-[#101828] hover:bg-gray-100 text-center"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;