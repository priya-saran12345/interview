"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserSwitchOutlined,
  TrophyOutlined,
  MessageOutlined,
  LineChartOutlined,
  BookOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

const features = [
  {
    title: "Mock Interviews",
    desc: "Practice real interview rounds and improve your confidence.",
    icon: UserSwitchOutlined,
  },
  {
    title: "Skill Ranking",
    desc: "Know your current level with clear skill-based ranking.",
    icon: TrophyOutlined,
  },
  {
    title: "Expert Feedback",
    desc: "Get practical feedback from experienced interview experts.",
    icon: MessageOutlined,
  },
  {
    title: "Progress Tracking",
    desc: "Track your learning journey and see your improvement.",
    icon: LineChartOutlined,
  },
  {
    title: "Learning Path",
    desc: "Follow a guided roadmap after every interview session.",
    icon: BookOutlined,
  },
  {
    title: "Career Confidence",
    desc: "Prepare better and feel confident before real interviews.",
    icon: SafetyCertificateOutlined,
  },
];

const WhatWeDo = () => {
  const [active, setActive] = useState(features[0]);
  const ActiveIcon = active.icon;

  return (
    <section className="relative overflow-hidden bg-lightGrey px-4 py-20 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute -left-26 -top-40 h-[720px] w-[820px] bg-contain bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('/images/setting (2).png')" }}
      />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[620px] w-[620px] opacity-80 [background-image:linear-gradient(to_right,rgba(11,94,215,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,94,215,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative z-10 mx-auto xl:max-w-[90%]">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-darkBlue">
            What We Do
          </p>

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            We Help You Interview Better
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((item, index) => {
              const Icon = item.icon;
              const isActive = active.title === item.title;

              return (
                <motion.div
                  key={item.title}
                  onMouseEnter={() => setActive(item)}
                  initial={{ y: 35, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className={`group relative min-h-[125px] cursor-pointer overflow-hidden rounded-3xl border p-5 pr-16 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl ${
                    isActive
                      ? "border-darkBlue bg-white shadow-xl"
                      : "border-lightBlue bg-lightGrey"
                  }`}
                >
                  <div className="absolute right-0 top-0 z-20 flex h-14 w-14 items-center justify-center rounded-bl-3xl rounded-tr-3xl bg-darkBlue text-xl text-white shadow-md transition group-hover:bg-blue">
                    <Icon />
                  </div>

                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-lightBlue transition duration-500 group-hover:scale-150" />

                  <h3 className="relative z-10 max-w-[220px] text-lg font-extrabold text-darkBlue">
                    {item.title}
                  </h3>

                  <p className="relative z-10 mt-3 max-w-[300px] text-sm leading-7 text-gray-700">
                    {item.desc}
                  </p>

                  <span
                    className={`absolute bottom-0 left-0 h-[4px] bg-darkBlue transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>

          <div className="relative min-h-[430px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ x: 40, opacity: 0, scale: 0.94 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: 30, opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative h-[430px] overflow-hidden rounded-[36px] bg-darkBlue p-8 text-white shadow-2xl"
              >
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:32px_32px]" />

                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue opacity-40 blur-2xl" />
                <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-lightBlue opacity-20 blur-3xl" />

                <div
                  className="absolute right-4 top-4 h-48 w-48 bg-contain bg-center bg-no-repeat opacity-20"
                  style={{ backgroundImage: "url('/images/setting (2).png')" }}
                />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-4xl text-darkBlue shadow-xl">
                    <ActiveIcon />
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-white/70">
                      Selected Service
                    </p>

                    <h3 className="text-4xl font-extrabold leading-tight">
                      {active.title}
                    </h3>

                    <p className="mt-5 max-w-md text-base leading-8 text-white/85">
                      {active.desc}
                    </p>

                    <button className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-bold text-darkBlue shadow-md transition hover:bg-lightBlue">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;