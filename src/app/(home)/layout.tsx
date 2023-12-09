'use client'

import { useProtectRoute } from "@/hooks/useProtectRoute";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const preventRoute = useProtectRoute();
  if (preventRoute) return preventRoute;
  return children;
}
