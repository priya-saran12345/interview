"use client";

import React from "react";
import Link from "next/link";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import FooterIconPage from "./FooterIcon";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="group relative w-fit overflow-hidden py-1 text-sm font-medium text-gray-700 no-underline transition hover:text-darkBlue"
    >
      {label}
      <span className="absolute bottom-0 left-0 
      h-[2px] w-0 bg-darkBlue opacity-0 transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-100" />
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t-4 border-white bg-lightGrey">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.10) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-blue-100/50" />

      <div className="relative z-10 mx-auto px-4 pt-12 pb-4 sm:px-6 lg:px-8 xl:max-w-[90%]">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-3xl font-extrabold tracking-tight text-darkBlue no-underline"
            >
              Surprise
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-700">
              Practice interviews, improve confidence, rank
              <br />
              your skills and climb your career
              <br />
              ladder step by step.
            </p>

            <div className="mt-5 flex gap-3">
              <FooterIconPage />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-darkBlue">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {quickLinks.map((item) => (
                <FooterLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-darkBlue">Contact</h3>

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

        <div className="mt-8 flex items-center justify-center gap-4 border-t border-slate-400 pt-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Surprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;