// src/components/ui/FeatureCard.tsx
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="flex flex-col items-center text-center p-6 bg-white rounded-lg"
      data-aos="fade-up"
    >
      <div className="mb-4 text-teal-500">
        {React.isValidElement(icon) &&
          React.cloneElement(icon as React.ReactElement<any>, {
            size: 48,
            strokeWidth: 1.5,
          })}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
