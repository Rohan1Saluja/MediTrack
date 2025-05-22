import { redirect } from "next/navigation";

// This page will act as the entry point to the dashboard
// For now, we'll redirect to the medications management page
export default function DashboardHomePage() {
  redirect("/dashboard/medications");
  return (
    <div>
      <p>Loading your dashboard...</p>
    </div>
  );
}
