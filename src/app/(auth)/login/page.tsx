import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RegisterForm from "@/components/Register/register-form";
import LoginForm from "@/components/Login/login-form";

const Login = () => {
  return (
    <>
      <>
        <section className="text-gray-600 body-font">
          <div className="container xl:px-32 px-5 py-36 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 className="flex items-center title-font font-bold lg:text-7xl text-6xl text-slate-700 dark:text-slate-500 text-center md:text-left ">
                <Image src="/logo.png" alt="logo" width={100} height={100} />
                book
              </h1>
              <p className="leading-relaxed mt-4 lg:text-3xl text-2xl lg:max-w-xl font-medium dark:text-white  text-black text-center md:text-left ">
                TBook helps you connect and share with the people in your life.
              </p>
            </div>
            <div className="lg:w-2/5 md:w-1/2 dark:bg-black bg-white shadow-lg rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <LoginForm />
              <div className="p-4 text-center">
                <Link href="/forgot" className="text-sm text-blue-500 text-center hover:underline">
                  Forgotten password?
                </Link>
              </div>
              <div className="border-t border-gray-400 mb-6" />
              <Dialog>
                <DialogTrigger className="text-white p-3 rounded-md bg-slate-700 hover:bg-slate-800">
                  Create New Account
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create a new account</DialogTitle>
                    <DialogDescription>
                      <RegisterForm />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="lg:w-2/5 md:w-1/2 bg-transparent rounded-lg p-8 flex flex-col md:ml-auto w-full mt-3 md:mt-0">
              <p className="text-sm text-gray-700 mt-3 text-center">
                <b>Create a Page</b> for a celebrity, band or business
              </p>
            </div>
          </div>
        </section>
      </>
      <div className="container mx-auto px-6">
        <div className="mt-10 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-slate-700 font-bold mb-2">
              TBook Social Network © {new Date().getFullYear()} Created by Nguyễn Viết Tuấn
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
