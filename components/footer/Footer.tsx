import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";
import FooterItems from "./FooterItems";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center border border-t shadow">
      <div className="container flex w-full flex-col gap-16">
        <div className="mb-3 mt-24 flex flex-col items-start justify-center gap-20 md:flex-row">
          <Link
            href="/"
            className="font-pacifiko text-2xl font-semibold tracking-widest"
          >
            <span className="text-green-600">Camp</span> Traveller
          </Link>
          <div className="flex flex-wrap justify-between gap-10 md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterItems title={columns.title} key={columns.title}>
                {columns.links.map((link) => (
                  <Link href="/" key={link}>
                    {link}
                  </Link>
                ))}
              </FooterItems>
            ))}
          </div>

          <div className="flex flex-wrap justify-end gap-10 md:flex-1">
            <FooterItems title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <Link
                  key={link.label}
                  href="/"
                  className="flex gap-4 md:flex-col lg:flex-row"
                >
                  <p>{link.label}</p>
                  <p>{link.value}</p>
                </Link>
              ))}
            </FooterItems>
          </div>
        </div>
        <div className="border-t border-gray-300 p-3 text-center">
          <p className="w-full text-center text-gray-400">
            2024 Camp Traveller | Trainer: Efe Görkem Ümit
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
