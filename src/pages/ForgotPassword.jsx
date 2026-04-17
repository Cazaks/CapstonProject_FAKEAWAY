import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Reset password email:", email);
  }

  return (
    <>
      <Header />

      <main className="flex bg-gray-100 min-h-screen items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md rounded-lg bg-white p-8 shadow-md"
        >
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Forgot Password
          </h2>

          <p className="mb-6 text-center text-sm text-gray-600">
            Enter your email and we’ll send you a reset link.
          </p>

          <div className="mb-6">
            <label className="mb-2 block text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Remembered your password?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </main>

      <Footer />
    </>
  );
}
