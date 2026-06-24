"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];
  
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative text-2xl font-extrabold tracking-tight text-blue-600 no-underline sm:text-3xl"
        >
          Surprise
          <span className="absolute -bottom-1 left-0 h-[3px] w-10 rounded-full bg-blue-500" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden py-2 text-[15px] font-semibold text-gray-700 no-underline transition hover:text-blue-600"
            >
              {item.label}

              <span className="absolute bottom-0 left-0 h-[3px] w-0 rounded-full bg-blue-500 transition-all duration-500 ease-out group-hover:w-full" />

              <span className="absolute bottom-0 left-0 h-[3px] w-full translate-x-[-120%] rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[120%]" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            type="primary"
            size="large"
            className="!rounded-full !bg-blue-600 !px-7 !font-semibold hover:!bg-blue-700"
          >
            Get Started
          </Button>
        </div>

        <Button
          type="text"
          className="!flex !items-center !justify-center md:!hidden"
          icon={<MenuOutlined className="text-xl text-blue-600" />}
          onClick={() => setOpen(true)}
        />
      </div>

      <Drawer
        placement="right"
        width={290}
        open={open}
        closable={false}
        onClose={() => setOpen(false)}
        title={
          <div className="flex items-center justify-between">
            <span className="text-xl font-extrabold text-blue-600">
              Surprise
            </span>

            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={() => setOpen(false)}
            />
          </div>
        }
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-semibold text-gray-700 no-underline transition hover:bg-blue-50 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}

          <Button
            type="primary"
            size="large"
            block
            className="!mt-3 !rounded-full !bg-blue-600 !font-semibold hover:!bg-blue-700"
          >
            Get Started
          </Button>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;