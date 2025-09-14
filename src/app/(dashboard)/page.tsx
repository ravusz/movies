import { redirect } from "next/navigation";

import { Routes } from "@/lib/constants/routes";

export default function DashboardPage() {
  redirect(Routes.Characters);
}
