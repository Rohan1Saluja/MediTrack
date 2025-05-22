import { Metadata } from "next";

interface PageParams {
  regimenId: string;
}

interface Props {
  params: PageParams;
  searchParams?: { [key: string]: string | string[] | undefined };
}

/**
 * ! Removed the use of Props for now
 */
export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `Regimen: ${params.regimenId} - MediTrack Dashboard`,
  };
}

export default async function RegimenDetailPage({ params }: any) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Regimen Details: (ID: {params.regimenId})
        </h1>
        <p className="mt-1 text-sm text-gray-600"></p>
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
