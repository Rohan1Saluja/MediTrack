import Link from "next/link";
import { PlusSquare } from "lucide-react"; // For the logo
import SignUpForm from "./components/SignUpForm";

export const metadata = {
  title: "Sign Up - MediTrack",
  description: "Create an account to start using MediTrack.",
};

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block mb-6">
            <PlusSquare size={48} className="text-teal-500" />
          </Link>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Create your MediTrack account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Start managing your medication schedule effectively.
          </p>
        </div>

        <SignUpForm />

        <p className="mt-8 text-center text-sm text-gray-600">
          Already registered?{" "}
          <Link
            href="/login"
            className="font-medium text-teal-600 hover:text-teal-500"
          >
            Log in instead
          </Link>
        </p>
      </div>
    </main>
  );
}
