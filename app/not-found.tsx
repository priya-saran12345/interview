"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#f7fbff] via-[#edf6ff] to-[#dceeff] px-4">

      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute top-1/4 -right-24 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute bottom-[-120px] left-1/4 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute bottom-60 right-40 h-5 w-5 rounded-full border border-blue-200" />
      <div className="absolute bottom-60 right-40 h-5 w-5 rounded-full border border-blue-200" />

      {/* Decorative Rings */}
      <div className="absolute left-24 top-32 h-4 w-4 rounded-full border-2 border-blue-300" />
      <div className="absolute left-40 top-40 h-3 w-3 rounded-full bg-blue-300" />
      <div className="absolute left-60 bottom-40 h-3 w-3 rounded-full bg-blue-300" />
      <div className="absolute left-80 bottom-60 h-3 w-3 rounded-full bg-blue-300" />
      <div className="absolute bottom-40 left-40 h-5 w-5 rounded-full border border-blue-200" />
      <div className="absolute bottom-28 right-56 h-3 w-3 rounded-full bg-sky-300" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <img
          src="/images/4041.png"
          alt="404"
          className="mx-auto w-full max-w-[430px] select-none"
          draggable={false}
        />

        <h1 className="mt-4 text-3xl font-black tracking-tight text-[#1D4ED8]">
          Oops! Page not found
        </h1>

        <p className="mt-2 text-[15px] text-slate-500">
          Looks like this page wandered off somewhere.
        </p>

        <div className="mt-7 flex justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-[#1D4ED8] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl"
          >
            Home
          </Link>

          <button
            onClick={() => router.back()}
            className="rounded-full border border-blue-200 bg-white px-6 py-2.5 text-sm font-semibold text-[#1D4ED8] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}