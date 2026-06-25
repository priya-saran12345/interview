"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserAddOutlined,
  PhoneOutlined,
  CalendarOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
const steps = [
  {
    no: "1",
    title: "Login / Register",
    desc: "Create your account quickly and start your interview journey.",
    icon: UserAddOutlined,
  },
  {
    no: "2",
    title: "Interview Team Will Contact",
    desc: "Our team will connect with you and understand your goals.",
    icon: PhoneOutlined,
  },
  {
    no: "3",
    title: "Schedule Your Interview",
    desc: "Choose a suitable time slot and schedule your interview.",
    icon: CalendarOutlined,
  },
  {
    no: "4",
    title: "Enjoy Learning",
    desc: "Attend interviews, get feedback, improve skills and grow.",
    icon: TrophyOutlined,
  },
];

const ProcessSteps = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto xl:max-w-[90%]">
        <motion.div
          initial={{ y: 35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-wide text-gray-900 sm:text-4xl">
            <span className="text-darkBlue">Process </span> Steps Infographic
          </h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="mx-auto mt-5 flex w-72 origin-center items-center justify-center"
          >
            <span className="h-[2px] flex-1 bg-lightBlue" />
            <span className="mx-3 h-3 w-3 rounded-full bg-blue" />
            <span className="mx-3 h-3 w-3 rounded-full bg-blue" />
            <span className="h-[2px] flex-1 bg-lightBlue" />
          </motion.div>
        </motion.div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.no}
                initial={{ y: 45, opacity: 0, scale: 0.96 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-lightBlue bg-white p-7 shadow-sm transition duration-300 hover:shadow-xl"
              >
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="absolute -left-1 top-4 text-[180px] font-extrabold leading-none text-transparent [-webkit-text-stroke:2px_var(--darkBlue)]"
                >
                  {step.no}
                </motion.span>

                <motion.div
                  initial={{ rotate: -20, scale: 0.7, opacity: 0 }}
                  whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25 + index * 0.12,
                    ease: "easeOut",
                  }}
                  className="relative z-10 ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-darkBlue 
                  text-2xl text-white shadow-md  transition group-hover:bg-blue"
                >
                  <Icon />
                </motion.div>

                <motion.div
                  initial={{ y: 25, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: 0.35 + index * 0.12,
                    ease: "easeOut",
                  }}
                  className="relative z-10 mt-2 ml-8"
                >
                  <h3 className="bg-white text-lg font-extrabold uppercase leading-7 text-darkBlue">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-700">
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;