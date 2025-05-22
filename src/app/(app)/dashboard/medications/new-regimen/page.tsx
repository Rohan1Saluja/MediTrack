// src/app/dashboard/medications/new-regimen/page.tsx
// We will build the form component for this page next.

// import AddRegimenForm from "@/components/medications/AddRegimenForm";

export const metadata = {
  title: "Add New Regimen - MediTrack Dashboard",
};

export default function AddNewRegimenPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Create a New Medication Regimen
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Group your medications for specific conditions, timeframes, or
          purposes.
        </p>
      </div>
      {/* <AddRegimenForm /> */}
      <p className="mt-4 p-4 bg-yellow-100 border border-yellow-300 rounded-md text-yellow-700">
        Form to add a new regimen will go here.
      </p>
    </div>
  );
}
