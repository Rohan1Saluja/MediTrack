"use client"; // This component will use Next.js Link, and might have active state logic

import Link from "next/link";
import { Home, Pill, Bell, User } from "lucide-react";
import { usePathname } from "next/navigation"; // To highlight active link

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/medications", label: "Medications", icon: Pill }, // Assuming a /medications route
  { href: "/notifications", label: "Notifications", icon: Bell }, // Assuming a /notifications route
  { href: "/profile", label: "Profile", icon: User }, // Assuming a /profile route
];

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] rounded-t-2xl md:rounded-t-3xl">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors duration-200 ease-in-out
                          ${
                            isActive
                              ? "text-teal-600"
                              : "text-gray-500 hover:text-teal-500"
                          }`}
            >
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span
                className={`mt-1 text-xs font-medium ${
                  isActive ? "font-semibold" : ""
                }`}
              >
                {/* Optional: Show label only if active or on larger screens */}
                {/* {item.label} */}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
