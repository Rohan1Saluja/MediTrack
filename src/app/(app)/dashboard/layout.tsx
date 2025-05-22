// src/app/dashboard/layout.tsx
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import NextAuthProvider from "@/components/providers/NextAuthProvider"; // If not already in root layout
import { authOptions } from "@/lib/auth";

export const metadata = {
  title: "MediTrack Dashboard",
  description: "Manage your medications and health with MediTrack.",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    // If you want to redirect to login from any dashboard page if not authenticated
    // Adjust the callbackUrl as needed
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  return (
    // If NextAuthProvider is already in RootLayout, you might not need it here again
    // depending on your setup. For simplicity, keeping it here ensures session context.
    <NextAuthProvider>
      <div className="min-h-screen bg-gray-100">
        {/*
          Future: Add a dashboard-specific header here
          e.g., <DashboardHeader user={session.user} />
        */}
        <main className="py-8 px-4 sm:px-6 lg:px-8">
          {/*
            The container and max-width might be better handled
            within individual page components for more flexibility,
            or you can set a default max-width here.
          */}
          <div className="container mx-auto max-w-7xl">{children}</div>
        </main>
        {/*
          Future: Add a dashboard-specific footer or BottomNavbar if needed
          Note: If BottomNavbar is global, it should be in the root layout.
        */}
      </div>
    </NextAuthProvider>
  );
}
