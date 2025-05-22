"use client";

import { Apple, AtSign, Lock, User } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { Google } from "../../../../../public/icons";
import React from "react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === "authenticated") {
      console.log("Session data:", session);
      router.push("/dashboard");
    }
  }, [status, router, session]);

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

  const handleGoogleSignUp = async () => {
    // This will redirect the user to Google's sign-in page
    // After successful sign-in, Google will redirect back to your /api/auth/callback/google
    // NextAuth.js will handle the callback and create a session.
    const result = await signIn("google", {});

    if (result?.error) {
      console.error("Error signing in with Google:", result.error);
      alert(`Error Signing in: ${result.error}`);
    } else if (result?.ok) {
      console.log("Successfully signed in with Google");
    }
  };

  const handleAppleSignUp = () => {
    alert("Sign up with Apple clicked (placeholder)");
    // TODO: Implement Apple OAuth
  };

  return (
    <>
      <div className="space-y-4">
        <button
          onClick={handleGoogleSignUp}
          type="button"
          className="w-full flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors hover:cursor-pointer"
          disabled={status === "loading"}
        >
          <Google />
          Sign up with Google
        </button>
        {/* <button
          onClick={handleAppleSignUp}
          type="button"
          className="w-full flex items-center justify-center gap-3 rounded-lg border border-gray-800 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors"
          disabled
        >
          <Apple size={20} className="text-white" />
          Sign up with Apple
        </button> */}
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
