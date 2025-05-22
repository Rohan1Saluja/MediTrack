// src/app/dashboard/medications/[regimenId]/page.tsx

// import { getRegimenDetails } from "@/lib/actions/medicationActions"; // Placeholder

export async function generateMetadata({
  params,
}: {
  params: { regimenId: string };
}) {
  // In a real app, fetch regimen name for dynamic title
  // const regimen = await getRegimenDetails(params.regimenId);
  return {
    title: `Regimen Details - MediTrack Dashboard`, // Replace with dynamic title later
  };
}

export default async function RegimenDetailPage({
  params,
}: {
  params: { regimenId: string };
}) {
  // const regimen = await getRegimenDetails(params.regimenId); // Fetch details

  // if (!regimen) {
  //   return <div>Regimen not found.</div>;
  // }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Regimen Details: {/* regimen.name */} (ID: {params.regimenId})
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          {/* regimen.description */}
        </p>
      </div>
      <p className="mt-4 p-4 bg-blue-100 border border-blue-300 rounded-md text-blue-700">
        Details of the regimen and list of medications within this regimen will
        go here.
        <br />
        Button to "Add Medication to this Regimen" will also be here.
      </p>
    </div>
  );
}
