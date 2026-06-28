"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface LoginForm {
  email: string;
  password: string;
}
export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
                // `${API_URL}auth/login`,
                `https://interview-backend-s66r.onrender.com/api/auth/login`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        toast.success("Login successful");
        router.push("/dashboard");
      } else {
        toast.error(data?.message || "Login failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eef6ff] px-4 py-8">
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-blue/30 blur-3xl" />
      <div className="absolute right-[-120px] top-20 h-96 w-96 rounded-full bg-darkBlue/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-md items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-[34px] border border-white/70 bg-white/85 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
        >
          <div className="mb-7 text-center">
            <Link
              href="/"
              className="mb-4 inline-block text-3xl font-black text-darkBlue no-underline"
            >
              Surprise
            </Link>

            <h2 className="text-3xl font-black text-slate-950">Login</h2>

            <p className="mt-2 text-sm text-slate-500">
              Enter your email and password to continue.
            </p>
          </div>

          <div className="space-y-5">
            <div className="relative">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer h-12 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 pt-5 pb-2 text-sm font-medium text-slate-800 shadow-sm outline-none transition placeholder:text-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
              <label className="pointer-events-none absolute left-4 -top-2 bg-white px-2 text-[11px] font-bold uppercase tracking-wide text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:-top-2 peer-focus:bg-white peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-darkBlue">
                Email Address
              </label>
            </div>

            <div className="relative">
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="peer h-12 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 pt-5 pb-2 text-sm font-medium text-slate-800 shadow-sm outline-none transition placeholder:text-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
              <label className="pointer-events-none absolute left-4 -top-2 bg-white px-2 text-[11px] font-bold uppercase tracking-wide text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:-top-2 peer-focus:bg-white peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-darkBlue">
                Password
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-2xl bg-darkBlue px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="mt-6 text-center text-sm text-slate-500">
            New student?{" "}
            <Link
              href="/signup"
              className="font-black text-darkBlue no-underline hover:text-blue"
            >
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}