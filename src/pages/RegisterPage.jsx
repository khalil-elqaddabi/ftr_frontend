
import { useState } from "react";
import truckBackground from "../assets/cam.png";

function RegisterPage({ onRegister, loading, error, onShowLogin }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(formData);
  };

  return (
    <main className="min-h-screen bg-[#080D20] text-white flex flex-col lg:flex-row">

      {/* Left Section */}
      <section className="relative flex flex-col justify-between overflow-hidden bg-[#080D20] p-8 lg:w-1/2 lg:p-12">

        <div className="absolute inset-0">
          <img
            src={truckBackground}
            alt="Fleet truck in a futuristic city"
            className="h-full w-full object-cover object-center opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#080D20]/80 via-[#080D20]/40 to-[#080D20]/70" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#080D20] via-transparent to-[#080D20]/40" />
        </div>

        <div className="relative z-10">
          <h1 className="text-2xl font-bold tracking-wide">
            <span className="text-blue-500">◆</span> FleetTrackPRO
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Fleet Management Platform
          </p>

          <div className="mt-16">
            <h2 className="max-w-lg text-4xl font-bold leading-tight md:text-5xl">
              Join the future of fleet operations
            </h2>

            <p className="mt-5 max-w-md text-slate-300">
              Create your account and manage your fleet smarter.
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-10">
          <div className="flex justify-between gap-3 text-center text-sm">
            {[
              "Real-time Monitoring",
              "Predictive Maintenance",
              "Optimized Operations",
              "Secure & Reliable",
            ].map((feature) => (
              <div key={feature} className="flex-1">
                <div className="mb-2 text-xl text-blue-400">✦</div>
                <p className="text-xs text-slate-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Right Section */}
      <section className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border border-slate-700/50 bg-[#12182B] p-8 shadow-2xl shadow-black/30">

          <div className="mb-7">
            <h2 className="text-3xl font-bold">Create account</h2>

            <p className="mt-2 text-sm text-slate-400">
              Join FleetTrackPRO today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label htmlFor="firstName" className="mb-2 block text-sm text-slate-300">
                First Name
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-700 bg-[#080D20] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="mb-2 block text-sm text-slate-300">
                Last Name
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-700 bg-[#080D20] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label htmlFor="registerEmail" className="mb-2 block text-sm text-slate-300">
                Work Email
              </label>

              <input
                id="registerEmail"
                name="email"
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-700 bg-[#080D20] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label htmlFor="registerPassword" className="mb-2 block text-sm text-slate-300">
                Password
              </label>

              <input
                id="registerPassword"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-700 bg-[#080D20] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>

          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-700" />
            <span className="text-xs text-slate-500">OR</span>
            <div className="h-px flex-1 bg-slate-700" />
          </div>

          <p className="text-center text-sm text-slate-400">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onShowLogin}
              className="font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Sign In
            </button>
          </p>

          <div className="mt-7 border-t border-slate-700/50 pt-5 text-center text-xs text-slate-500">
            Your data is secure and encrypted.
            <p className="mt-2">
              © 2026 FleetTrackPRO. All rights reserved.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

export default RegisterPage;
