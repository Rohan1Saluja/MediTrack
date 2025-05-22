"use client"; // This component has a button with an onClick handler

import { Medication } from "@/types/medication";
import { useState } from "react";

interface MedicationCardProps {
  medication: Medication;
  onMarkAsTaken: (id: string) => void;
}

export default function MedicationCard({
  medication,
  onMarkAsTaken,
}: MedicationCardProps) {
  // Internal state for the button text, or you can manage "taken" status from parent
  const [isTaken, setIsTaken] = useState(medication.taken || false);

  const handleMark = () => {
    setIsTaken(true); // Optimistic update
    onMarkAsTaken(medication.id);
    // You might want to disable the button or change its appearance permanently after click
  };

  return (
    <div className="bg-primary-50 p-5 rounded-xl shadow-md flex items-center justify-between space-x-4 ">
      <div>
        <h3 className="text-xl font-semibold text-text-800">
          {medication.name}
        </h3>
        <p className="text-text-600">{medication.time}</p>
        <p className="text-text-600">{medication.dosage}</p>
      </div>
      <button
        onClick={handleMark}
        disabled={isTaken}
        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors
                    ${
                      isTaken
                        ? "bg-background-300 text-text-500 cursor-not-allowed"
                        : "bg-primary-400 text-white hover:bg-primary-500 focus:ring-2 focus:ring-primary-300 focus:outline-none hover:cursor-pointer"
                    }`}
      >
        {isTaken ? "Taken" : "Mark as Taken"}
      </button>
    </div>
  );
}
