import RegisterForm from "@/components/Register/register-form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image className="mx-auto" src="/logo.png" alt="Logo" width={100} height={100} />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">Create a new account</h2>
        <div className="flex gap-1 justify-center items-center">
          <p className="text-center text-sm leading-5 text-gray-500 max-w">Or</p>
          <Link
            href="/login"
            className="font-medium text-slate-700 hover:text-slate-900 focus:outline-none focus:underline transition ease-in-out duration-150">
            login to your account
          </Link>
        </div>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-8">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
