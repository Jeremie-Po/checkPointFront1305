import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
// import Logout from "../Logout";
// import { checkUserConnected } from "@/utils/checkConnection";
// import { maxWidthScreen } from "@/constants/styles";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  //   const isConnected = checkUserConnected();
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full h-16 sticky top-0 shadow-lg z-10 bg-bgPrimary">
      <div
        className={` h-full flex justify-between items-center gap-2 mx-auto px-10`}
      >
        {/* Burger Icon for Mobile Screens */}
        <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo Link */}
        <Link href="/">
          <h1 className="font-rubik">CheckPoint frontend</h1>
        </Link>

        {/* Links for Larger Screens */}
        <div className={`hidden md:flex md:flex-row gap-4`}>
          <Link href="#">Liste des pays</Link>
          <Link href="#">Ajouter un pays</Link>
          {/* <Link href="#">TestOPSSur Staging</Link> */}
        </div>
      </div>

      {/* Auth Buttons for Larger Screens */}
    </nav>
  );
}
