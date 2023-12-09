"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginValidatorForm, LoginValidatorFormSchema } from "./login-form.validator";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthResponse, LoginAuthBody, loginAuth } from "@/api/auth";
import { ApiErrorResponse } from "@/lib/http";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "@/lib/get-error-message";

const LoginForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const loginForm = useForm<LoginValidatorForm>({
    resolver: zodResolver(LoginValidatorFormSchema),
  });

  const { mutate: loginMutate, isPending: loginIsPending } = useMutation<AuthResponse, ApiErrorResponse, LoginAuthBody>(
    {
      mutationFn: async (params) => await loginAuth(params),
      onSuccess: (loginData) => {
        toast.success("Login success!");
        queryClient.setQueryData(["auth"], loginData);
        loginForm.reset();
        router.push("/");
      },
      onError: (error) => {
        toast.error(getErrorMessage(error, "Login failed!"));
      },
    }
  );

  const onSubmit = async (data: LoginValidatorForm) => {
    loginMutate(data);
  };
  return (
    <Form {...loginForm}>
      <form method="post" onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={loginForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email or Phone</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com or 0123456789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={loginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="1234****" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full p-6 text-xl">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
