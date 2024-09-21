import React from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { Button } from "../ui/button";
import { MenuIcon, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b p-3 shadow-sm">
      {/* Container */}
      <div className="container relative z-30 flex items-center justify-between">
        {/* Header Logo */}
        <Link
          href="/"
          className="font-pacifiko text-2xl font-semibold tracking-widest"
        >
          <span className="text-green-600">Camp</span> Traveller
        </Link>

        {/* Header Right Menu */}
        <div className="hidden items-center gap-11 lg:flex">
          {/* NavLinks */}
          <ul className="flex h-full gap-7 text-xl">
            {NAV_LINKS.map((link) => (
              <Link
                className="font-popins font-medium transition duration-300 hover:text-green-600"
                href={link.href}
                key={link.key}
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay={link.delay}
              >
                {link.label}
              </Link>
            ))}
          </ul>

          {/* Login Button */}
          <div className="flex justify-center">
            <Button
              className="flex gap-2"
              size="sm"
              type="button"
              variant="login"
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-delay="1000"
            >
              <User className="size-4" /> Login
            </Button>
          </div>
        </div>
        {/* Hamburger Menu */}
        <MenuIcon className="inline-block size-7 cursor-pointer text-green-600 lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
