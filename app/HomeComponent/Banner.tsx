"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const monkeyFrames = [
  "/images/frame1.png",
  "/images/frame2.png",
  "/images/frame3.png",
  "/images/frame4.png",
  "/images/frame5.png",
  "/images/frame6.png",
];

export default function Banner() {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    monkeyFrames.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % monkeyFrames.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-[85vh] bg-lightGrey">
      <section className="mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ y: 45, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.45,
            ease: "easeOut",
          }}
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.55,
              delay: 0.65,
              ease: "easeOut",
            }}
            className="mb-4 inline-block rounded-full text-sm font-semibold text-darkBlue"
          >
            Interview. Improve. Skills.....
          </motion.p>

          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.65,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Rank Your{" "}
            <span className="water-marble-text text-5xl sm:text-6xl lg:text-7xl">
              Skill
            </span>{" "}
            by{" "}
            <span className="water-marble-text text-5xl sm:text-6xl lg:text-7xl">
              Interviewing
            </span>
            <br />
            with Us
          </motion.h1>

          <motion.p
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 1,
              ease: "easeOut",
            }}
            className="mt-6 max-w-xl text-base leading-8 text-gray-700 sm:text-lg"
          >
            Practice with real interview experience, improve your confidence,
            and climb your career ladder step by step.
          </motion.p>

          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.15,
              ease: "easeOut",
            }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button className="rounded-full bg-darkBlue px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-blue">
              Get Started
            </button>

            <button className="rounded-full border border-darkBlue bg-white px-8 py-3 text-base font-semibold text-darkBlue transition hover:bg-lightBlue">
              Explore More
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 60, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: "easeOut",
          }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative aspect-square w-full max-w-[560px] bg-transparent">
            {monkeyFrames.map((frame, index) => (
              <Image
                key={frame}
                src={frame}
                alt={
                  index === currentFrame
                    ? "Monkey climbing skill ranking stairs"
                    : ""
                }
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 460px"
                className={`object-contain mix-blend-multiply transition-opacity duration-100 ${
                  index === currentFrame ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}