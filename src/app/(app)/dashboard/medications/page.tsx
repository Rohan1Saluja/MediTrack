import Link from "next/link";
import { PlusCircle } from "lucide-react";
// We will create these components next
// import RegimenList from '@/components/medications/RegimenList';
// import { getRegimensForUser } from '@/lib/actions/medicationActions'; // Placeholder for data fetching

// Mock data for now
const mockRegimens = [
  {
    id: "1",
    name: "Daily Diabetes Care",
    description: "Morning and evening meds for diabetes.",
    startDate: "2023-01-01",
    endDate: null,
    isActive: true,
  },
  {
    id: "2",
    name: "Antibiotic Course - Flu",
    description: "7-day course for recent flu.",
    startDate: "2023-10-20",
    endDate: "2023-10-27",
    isActive: true,
  },
  {
    id: "3",
    name: "Travel Sickness Prevention",
    description: "For upcoming vacation.",
    startDate: "2023-11-15",
    endDate: "2023-11-20",
    isActive: false,
  },
  {
    id: "4",
    name: "Old Heart Medication",
    description: "No longer taking.",
    startDate: "2022-05-01",
    endDate: "2023-01-01",
    isActive: false,
  },
];

export default async function MedicationsPage() {
  // In the future, fetch regimens for the logged-in user
  // const regimens = await getRegimensForUser(); // This would be a server action or API call
  const regimens = mockRegimens; // Using mock data for now

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Your Medication Regimens
        </h1>
        <Link
          href="/dashboard/medications/new-regimen" // Link to the "Add New Regimen" page
          className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors"
        >
          <PlusCircle size={20} />
          Add New Regimen
        </Link>
      </div>

      {regimens && regimens.length > 0 ? (
        <div className="bg-white shadow sm:rounded-lg">
          <ul role="list" className="divide-y divide-gray-200">
            {regimens.map((regimen) => (
              <li
                key={regimen.id}
                className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="truncate">
                    <Link
                      href={`/dashboard/medications/${regimen.id}`}
                      className="text-lg font-medium text-teal-600 hover:text-teal-800 truncate"
                    >
                      {regimen.name}
                    </Link>
                    <p className="text-sm text-gray-500 truncate">
                      {regimen.description || "No description"}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 space-x-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        regimen.isActive
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {regimen.isActive ? "Active" : "Inactive"}
                    </span>
                    {/* Placeholder for Edit/View details button that links to regimen details */}
                    <Link
                      href={`/dashboard/medications/${regimen.id}`}
                      className="rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      View/Edit
                    </Link>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-xs text-gray-500">
                      Start: {new Date(regimen.startDate).toLocaleDateString()}
                    </p>
                    {regimen.endDate && (
                      <p className="mt-2 flex items-center text-xs text-gray-500 sm:ml-6 sm:mt-0">
                        End: {new Date(regimen.endDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-semibold text-gray-900">
            No medication regimens
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by creating a new medication regimen.
          </p>
          <div className="mt-6">
            <Link
              href="/dashboard/medications/new-regimen"
              className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              <PlusCircle size={20} />
              Add New Regimen
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
