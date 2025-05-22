import { Medication } from "@/types/medication";
import MedicationCard from "./MedicationCard";

interface MedicationListProps {
  medications: Medication[];
  onMarkMedicationAsTaken: (id: string) => void;
}

export default function MedicationList({
  medications,
  onMarkMedicationAsTaken,
}: MedicationListProps) {
  if (!medications || medications.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        No medications scheduled for today.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {medications.map((med) => (
        <MedicationCard
          key={med.id}
          medication={med}
          onMarkAsTaken={onMarkMedicationAsTaken}
        />
      ))}
    </div>
  );
}
