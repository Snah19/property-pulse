"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";

import { FaGoogle } from "react-icons/fa";
import logo from "@/assets/images/logo-white.png";
import profileDefault from "@/assets/images/profile.png";

import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import UnreadMessageCount from "../pages/unread-message-count";

const Header = () => {

  const { data: session } = useSession();
  const profileImage = session?.user?.image;

  const [isMobileMenuOpen, setIsMobileOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  const pathName = usePathname();

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setAuthProviders();
  }, []);

  return (
    <header className="z-50 sticky top-0 bg-blue-700 border-b border-blue-500">

      <nav className="mx-auto px-2 xsm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">

          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMobileOpen(curr => !curr)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* Logo */}
            <Link className="flex flex-shrink-0 items-center" href="/">
              <Image
                className="h-10 w-auto"
                src={logo}
                alt="PropertyPulse"
                priority
              />
              <span className="hidden xsm:block md:hidden lg:block text-white text-2xl font-bold ml-2">
                PropertyPulse
              </span>
            </Link>

            {/* Desktop Menu Hidden below md screens */}
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-2">
                <Link
                  href="/"
                  className={`text-white ${pathName === "/" ? "bg-black" : null} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Home
                </Link>
                <Link
                  href="/properties"
                  className={`text-white ${pathName === "/properties" ? "bg-black" : null} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Properties
                </Link>
                <Link
                  href="/properties/add"
                  className={`text-white ${pathName === "/properties/add" ? "bg-black" : null} hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Add Property
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side Menu (Logged Out) */}
          <div className={`hidden md:block ${session ? "md:hidden" : null} md:ml-6`}>
            <div className="flex items-center">
              {providers && Object.values(providers).map((provider, index) => (
                <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" key={index} onClick={() => signIn(provider.id)}>
                  <FaGoogle className="text-white mr-2" />
                  <span>Sign In</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side Menu (Logged In) */}
          <div className={`absolute inset-y-0 right-0 ${session ? "flex" : "hidden"} items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0`}>
            <Link href="/messages" className="relative group">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <UnreadMessageCount />
            </Link>

            {/* Profile dropdown button */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setIsProfileMenuOpen(curr => !curr)}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full"
                    src={profileImage || profileDefault}
                    alt=""
                    width={40}
                    height={40}
                  />
                </button>
              </div>

              {/* Profile dropdown */}
              <div
                id="user-menu"
                className={`${isProfileMenuOpen ? "block" : "hidden"} absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                  onClick={() => setIsProfileMenuOpen(curr => !curr)}
                >
                  Your Profile
                </Link>
                <Link
                  href="/properties/bookmarks"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                  onClick={() => setIsProfileMenuOpen(curr => !curr)}
                >
                  Bookmarks
                </Link>
                <button
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                  onClick={() => {
                    setIsProfileMenuOpen(curr => !curr);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>

        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      <nav className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className={`${pathName === "/" ? "bg-black" : null} text-white block rounded-md px-3 py-2 text-base font-medium`}
            onClick={() => setIsMobileOpen(curr => !curr)}
          >
            Home
          </Link>
          <Link
            href="/properties"
            className={`${pathName === "/properties" ? "bg-black" : null} text-white block rounded-md px-3 py-2 text-base font-medium`}
            onClick={() => setIsMobileOpen(curr => !curr)}
          >
            Properties
          </Link>
          <Link
            href="/properties/add"
            className={`${pathName === "/properties/add" ? "bg-black" : null} text-white block rounded-md px-3 py-2 text-base font-medium`}
            onClick={() => setIsMobileOpen(curr => !curr)}
          >
            Add Property
          </Link>

          {providers && Object.values(providers).map((provider, index) => (
            <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" key={index} onClick={() => signIn(provider.id)}>
              <FaGoogle className="text-white mr-2" />
              <span>Sign In</span>
            </button>
          ))}
          
        </div>
      </nav>

    </header>
  );
};

export default Header;
