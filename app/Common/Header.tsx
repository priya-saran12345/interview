"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, Drawer, Tooltip } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

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
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 w-full border-b border-lightBlue bg-white/90 shadow-sm backdrop-blur-md"
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative text-2xl font-extrabold tracking-tight text-darkBlue no-underline sm:text-3xl"
        >
          Surprise
          <span className="absolute -bottom-1 left-0 h-[3px] w-10 rounded-full bg-blue" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.45,
                delay: 0.15 + index * 0.08,
                ease: "easeOut",
              }}
            >
<Tooltip
  title={
    item.label === "About"
      ? "About is waiting for you"
      : `Let's explore ${item.label}`
  }
  placement="bottom"
  color="var(--darkBlue)"
  // text="var(--darkBlue)"
>    
            <Link
                  href={item.href}
                  className="group relative overflow-hidden py-2 text-[15px] font-semibold text-gray-700 no-underline transition hover:text-darkBlue"
                >
                  {item.label}

                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-darkBlue opacity-0 transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-100" />
                </Link>
              </Tooltip>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.45,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="hidden md:block"
        >
          <Button
            type="primary"
            size="large"
            className="!rounded-full !bg-darkBlue !px-7 !font-semibold hover:!bg-blue"
          >
            Get Started
          </Button>
        </motion.div>

        <Button
          type="text"
          className="!flex !items-center !justify-center md:!hidden"
          icon={<MenuOutlined className="text-xl text-darkBlue" />}
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
            <span className="text-xl font-extrabold text-darkBlue">
              Surprise
            </span>

            <Button
              type="text"
              icon={<CloseOutlined className="text-darkBlue" />}
              onClick={() => setOpen(false)}
            />
          </div>
        }
      >
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="flex flex-col gap-3"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ x: 25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.35,
                delay: index * 0.06,
                ease: "easeOut",
              }}
            >
              <Tooltip
                title={
                  item.label === "About"
                    ? "About is waiting for you"
                    : `Let's explore ${item.label}`
                }
                placement="left"
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-gray-700 no-underline transition hover:bg-lightBlue hover:text-darkBlue"
                >
                  {item.label}
                </Link>
              </Tooltip>
            </motion.div>
          ))}

          <Button
            type="primary"
            size="large"
            block
            className="!mt-3 !rounded-full !bg-darkBlue !font-semibold hover:!bg-blue"
          >
            Get Started
          </Button>
        </motion.div>
      </Drawer>
    </motion.header>
  );
};

export default Header;