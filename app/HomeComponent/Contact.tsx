"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  agree: boolean;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);

  const inputClass =
    "h-10 w-full rounded border border-slate-200 bg-slate-50 px-3 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:bg-white";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);
    toast.success("Message submitted successfully");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    });

    setLoading(false);
  };

  return (
    <section className="bg-[#f4f7fb] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto grid overflow-hidden bg-white shadow-xl lg:grid-cols-[48%_52%]"
      >
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-[90%] p-6 sm:p-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-3xl font-black text-slate-950"
            >
              <span className="text-darkBlue">Send &nbsp;</span>
              Us a Message
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
              className="mt-1 text-xs font-medium text-slate-500"
            >
              Please fill in the form below to get in touch with us.
            </motion.p>

            <form onSubmit={handleSubmit} className="mt-5">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.45,
                    },
                  },
                }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {[
                  ["firstName", "First name", "text"],
                  ["lastName", "Last name", "text"],
                  ["email", "Email address", "email"],
                  ["phone", "Phone Number", "text"],
                ].map(([name, placeholder, type]) => (
                  <motion.input
                    key={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={formData[name as keyof ContactForm] as string}
                    onChange={handleChange}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    whileFocus={{ scale: 1.02 }}
                    className={inputClass}
                  />
                ))}

                <motion.textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileFocus={{ scale: 1.01 }}
                  className="sm:col-span-2 h-28 w-full resize-none rounded border border-slate-200 bg-slate-50 px-3 py-3 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={loading}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.85 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="mt-5 rounded bg-darkBlue px-4 py-2 text-sm font-black text-white transition hover:bg-slate-800 disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative hidden min-h-[380px] overflow-hidden bg-[#d9e9fb] lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#edf6ff] via-[#d6e9ff] to-[#8fb9ea]" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-20 top-7 h-16 w-16 rounded-full bg-white shadow-xl"
          >
            <div className="mx-auto mt-3.5 h-9 w-9 rounded-full bg-[#4b2b18]" />
          </motion.div>

          <div className="absolute -left-20 top-0 h-full w-44 rounded-r-[100%] bg-white" />
          <div className="absolute right-0 top-0 h-24 w-48 bg-slate-800/10" />
          <div className="absolute right-0 top-0 h-20 w-32 border-b-[18px] border-l-[18px] border-white/80" />

          <motion.div
            initial={{ opacity: 0, y: 45, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -6, rotate: 0 }}
            className="absolute bottom-11 right-20 h-52 w-56 rounded-lg bg-white shadow-2xl"
          >
            <div className="grid h-full grid-cols-2">
              <div className="border-r border-slate-200 p-5">
                <p className="text-xs font-bold uppercase text-slate-500">
                  PLAN
                </p>

                <ul className="mt-4 space-y-2 text-xs text-slate-600">
                  {["Learn", "Practice", "Improve", "Succeed"].map((item) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.75 }}
                      viewport={{ once: true }}
                    >
                      ✓ {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="p-5">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto h-10 w-10 rounded-full border-2 border-slate-400"
                />

                <div className="mt-7 flex items-end justify-center gap-2">
                  {[6, 9, 12, 16].map((h, index) => (
                    <motion.div
                      key={h}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h * 4}px` }}
                      transition={{
                        duration: 0.6,
                        delay: 0.8 + index * 0.12,
                      }}
                      viewport={{ once: true }}
                      className={`w-3 ${
                        index === 0
                          ? "bg-[#244d7f]/40"
                          : index === 1
                          ? "bg-[#244d7f]/50"
                          : index === 2
                          ? "bg-[#244d7f]/70"
                          : "bg-[#244d7f]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ x: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 h-24 w-full rounded-tl-[100%] bg-[#5f95ce]/45"
          />

          <motion.div
            animate={{ x: [0, 18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 h-16 w-full rounded-tl-[100%] bg-[#244d7f]/70"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}