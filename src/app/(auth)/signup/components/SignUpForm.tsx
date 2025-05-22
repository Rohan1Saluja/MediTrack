// src/components/auth/SignUpForm.tsx
"use client"; // Mark this as a Client Component

import { Apple, AtSign, Lock, User } from "lucide-react";
import Link from "next/link"; // Although not strictly needed here if no internal links

// Re-define GoogleIcon here or import it if it's a shared component
const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    <path d="M1 1h22v22H1z" fill="none" />
  </svg>
);

export default function SignUpForm() {
  const handleManualSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Manual sign-up form submitted (placeholder)");
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({ name, email, password });
    // TODO: Implement actual API call for sign-up
  };

  const handleGoogleSignUp = () => {
    alert("Sign up with Google clicked (placeholder)");
    // TODO: Implement Google OAuth
  };

  const handleAppleSignUp = () => {
    alert("Sign up with Apple clicked (placeholder)");
    // TODO: Implement Apple OAuth
  };

  return (
    <>
      {/* Social Sign Up Buttons */}
      <div className="space-y-4">
        <button
          onClick={handleGoogleSignUp}
          type="button"
          className="w-full flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
        >
          <GoogleIcon />
          Sign up with Google
        </button>
        <button
          onClick={handleAppleSignUp}
          type="button"
          className="w-full flex items-center justify-center gap-3 rounded-lg border border-gray-800 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors"
        >
          <Apple size={20} className="text-white" />
          Sign up with Apple
        </button>
      </div>

      {/* "OR" Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-gray-50 px-2 text-gray-500">
            Or continue with
          </span>
        </div>
      </div>

      {/* Manual Sign Up Form */}
      <form className="space-y-6" onSubmit={handleManualSignUp}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="block w-full appearance-none rounded-lg border border-gray-300 pl-10 px-3 py-2.5 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm transition-colors"
              placeholder="Your Name"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <AtSign className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full appearance-none rounded-lg border border-gray-300 pl-10 px-3 py-2.5 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm transition-colors"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              className="block w-full appearance-none rounded-lg border border-gray-300 pl-10 px-3 py-2.5 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm transition-colors"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center rounded-lg border border-transparent bg-teal-500 py-2.5 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
          >
            Create Account
          </button>
        </div>
      </form>
      {/* The "Already registered?" link is now in the Server Component (page.tsx) */}
    </>
  );
}
