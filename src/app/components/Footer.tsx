"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1F2937] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-300">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Essential Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="text-sm text-white hover:text-[#10B981] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white hover:text-[#10B981] transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-sm text-white hover:text-[#10B981] transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
