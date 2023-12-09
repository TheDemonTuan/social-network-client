import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ApiErrorResponse } from "@/lib/http";
import { AuthResponse, meAuth } from "@/api/auth";
import { getErrorMessage } from "@/lib/get-error-message";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    data: authData,
    error: authError,
    isSuccess: authIsSuccess,
    isError: authIsError,
    isFetching: authIsFetching,
  } = useQuery<AuthResponse, ApiErrorResponse>({
    queryKey: ["auth"],
    queryFn: async () => await meAuth(),
    staleTime: 1000 * 60 * 3, // 3 minutes
  });

  useEffect(() => {
    if (authIsError && queryClient.getQueryData(["auth"])) {
      queryClient.removeQueries({
        queryKey: ["auth"],
      });
      toast.error(getErrorMessage(authError, "Your session has expired. Please login again."));
      router.replace("/login");
    }
  }, [authIsError, authError, queryClient, router]);

  return {
    authData,
    authIsFetching,
    authIsSuccess,
  };
};
