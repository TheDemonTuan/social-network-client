'use client'

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { authData, authIsFetching } = useAuth();
  const router = useRouter();
  if (authIsFetching) {
    return (
      <div className="flex items-center gap-2">
        Loading
        <span className="loading loading-spinner text-forum_black" />
      </div>
    );
  } else if (authData) {
    router.replace("/");
    return (
      <div className="flex items-center">
        Redirecting
        <span className="loading loading-spinner text-forum_black" />
      </div>
    );
  }
  return children;
}
