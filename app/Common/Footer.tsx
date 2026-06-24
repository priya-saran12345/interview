"use client";

import React from "react";
import Link from "next/link";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-lightBlue bg-lightBlue">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-3xl font-extrabold tracking-tight text-darkBlue no-underline"
            >
              Surprise
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-700">
              We create modern, responsive and user-friendly websites that help
              your business grow online with confidence.
            </p>

            <div className="mt-5 flex gap-3">
              {[FacebookOutlined, InstagramOutlined, LinkedinOutlined].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-darkBlue shadow-sm transition hover:bg-darkBlue hover:text-white"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-darkBlue">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 no-underline transition hover:text-darkBlue"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-darkBlue">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-700">
              <p className="flex gap-3">
                <EnvironmentOutlined className="mt-1 text-darkBlue" />
                New Delhi, India
              </p>

              <p className="flex gap-3">
                <PhoneOutlined className="mt-1 text-darkBlue" />
                +91 98765 43210
              </p>

              <p className="flex gap-3">
                <MailOutlined className="mt-1 text-darkBlue" />
                info@surprise.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/70 pt-6 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} Surprise. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="/privacy-policy" className="text-gray-600 no-underline hover:text-darkBlue">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 no-underline hover:text-darkBlue">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;