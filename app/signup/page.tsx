"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface SignupForm {
  full_name: string;
  email: string;
  phone_number: string;
  password: string;
  college_name: string;
  course: string;
  branch: string;
  passing_year: string;
}

interface FieldProps {
  name: keyof SignupForm;
  label: string;
  type?: string;
  required?: boolean;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputClass =
  "peer h-12 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 pt-5 pb-2 text-sm font-medium text-slate-800 shadow-sm outline-none backdrop-blur transition placeholder:text-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100";

const labelClass =
  "pointer-events-none absolute left-4 -top-2 bg-white px-2 text-[11px] font-bold uppercase tracking-wide text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:-top-2 peer-focus:bg-white peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-darkBlue";

function Field({
  name,
  label,
  type = "text",
  required = false,
  className = "",
  value,
  onChange,
}: FieldProps) {
  return (
    <div className={`relative ${className}`}>
      <input
        name={name}
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        className={inputClass}
        required={required}
      />
      <label className={labelClass}>{label}</label>
    </div>
  );
}

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<SignupForm>({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
    college_name: "",
    course: "",
    branch: "",
    passing_year: "",
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

    try {
      setLoading(true);

      const response = await fetch(
        "https://interview-backend-s66r.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            passing_year: formData.passing_year
              ? Number(formData.passing_year)
              : null,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Signup successful");
        router.push("/login");
      } else {
        toast.error(data?.message || "Signup failed. Please try again.");
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
      <div className="absolute bottom-[-140px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-300/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_560px]">
          <div className="hidden h-fit lg:block">
            <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/60 p-8 shadow-2xl backdrop-blur-xl">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-br from-darkBlue/25 via-darkBlue/45 to-blue/40" />

              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue/30 blur-3xl" />

              <div className="relative z-10 min-h-[650px] p-6 text-white">
                <span className="rounded-full border border-white/30 bg-white/15 px-5 py-2 text-sm font-bold text-white shadow-sm backdrop-blur">
                  Student Career Platform
                </span>

                <h1 className="mt-8 max-w-2xl text-5xl font-black leading-[1.05] tracking-tight">
                  Build your profile.
                  <span className="block text-blue-100">
                    Start your journey.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-blue-50">
                  Join Surprise and create your student account to access
                  learning support, career guidance, portfolio opportunities and
                  services.
                </p>

                <div className="mt-10 grid max-w-lg gap-4">
                  <div className="rounded-3xl border border-white/20 bg-white/15 p-5 backdrop-blur-md">
                    <h3 className="text-lg font-black">Career Ready</h3>
                    <p className="mt-1 text-sm leading-6 text-blue-50">
                      Create your student profile and prepare for future
                      opportunities.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/20 bg-white/15 p-5 backdrop-blur-md">
                    <h3 className="text-lg font-black">Learning Support</h3>
                    <p className="mt-1 text-sm leading-6 text-blue-50">
                      Access services and guidance designed for students.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-r from-blue/40 via-darkBlue/30 to-sky-300/40 blur-xl" />

            <form
              onSubmit={handleSubmit}
              className="relative rounded-[34px] border border-white/70 bg-white/85 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
            >
              <div className="mb-7 text-center">
                <Link
                  href="/"
                  className="mb-4 inline-block text-3xl font-black text-darkBlue no-underline lg:hidden"
                >
                  Surprise
                </Link>

                <h2 className="text-3xl font-black text-slate-950">
                  Create Account
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Enter your student details to continue.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  name="full_name"
                  label="Full Name"
                  required
                  className="sm:col-span-2"
                  value={formData.full_name}
                  onChange={handleChange}
                />

                <Field
                  name="email"
                  label="Email Address"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                <Field
                  name="phone_number"
                  label="Phone Number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />

                <Field
                  name="password"
                  label="Password"
                  type="password"
                  required
                  className="sm:col-span-2"
                  value={formData.password}
                  onChange={handleChange}
                />

                <Field
                  name="college_name"
                  label="College Name"
                  className="sm:col-span-2"
                  value={formData.college_name}
                  onChange={handleChange}
                />

                <Field
                  name="course"
                  label="Course"
                  value={formData.course}
                  onChange={handleChange}
                />

                <Field
                  name="branch"
                  label="Branch"
                  value={formData.branch}
                  onChange={handleChange}
                />

                <Field
                  name="passing_year"
                  label="Passing Year"
                  type="number"
                  className="sm:col-span-2"
                  value={formData.passing_year}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full rounded-2xl bg-darkBlue px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Student Account"}
              </button>

              <p className="mt-6 text-center text-sm text-slate-500">
                Already registered?{" "}
                <Link
                  href="/login"
                  className="font-black text-darkBlue no-underline hover:text-blue"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}