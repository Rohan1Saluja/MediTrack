import Header from "@/components/layout/Header";
import Link from "next/link";
import { PlusSquare } from "lucide-react";
import AOSInitializer from "@/components/utils/AOSInitializer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CaseStudies from "./components/CaseStudies";

export default function LandingPage() {
  return (
    <>
      <AOSInitializer />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />

        <main id="home" className="flex-grow">
          <Hero />
          <Features />
          <CaseStudies />
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-12 text-center">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <PlusSquare size={24} className="text-primary" />
              <span className="text-xl font-semibold">MediTrack</span>
            </div>
            <p className="text-sm mb-2">
              © {new Date().getFullYear()} MediTrack. All rights reserved.
            </p>
            <div className="space-x-4">
              <Link href="/privacy" className="hover:text-teal-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-teal-400 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
