import React from "react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div>
        <div>
          <section className="text-gray-600 body-font bg-gray-100">
            <div className="container xl:px-32 px-5 py-36 mx-auto flex flex-wrap items-center">
              <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="flex items-center title-font font-bold lg:text-7xl text-6xl text-slate-700 text-center md:text-left ">
                  <Image src="/logo.png" alt="logo" width={100} height={100} />
                  book
                </h1>
                <p className="leading-relaxed mt-4 lg:text-3xl text-2xl lg:max-w-xl font-medium  text-black text-center md:text-left ">
                  TBook helps you connect and share with the people in your life.
                </p>
              </div>
              <div className="lg:w-2/5 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="full-name"
                    placeholder="Email address or phone number"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Password"
                    className="w-full  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-lg text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="text-white border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-blue-600 ">
                  Log In
                </button>
                <p className="text-sm text-blue-500 py-5 text-center">Forgotten password?</p>
                <hr className="my-5" />
                <Link
                  href="/register"
                  className="text-white w-full border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-green-500 text-center">
                  Create New Account
                </Link>
              </div>
              <div className="lg:w-2/5 md:w-1/2 bg-transparent rounded-lg p-8 flex flex-col md:ml-auto w-full mt-3 md:mt-0">
                <p className="text-sm text-gray-700 mt-3 text-center">
                  <b>Create a Page</b> for a celebrity, band or business
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="container mx-auto px-6">
          <div className="mt-10 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-slate-700 font-bold mb-2">
                TBook Social Network © {new Date().getFullYear()} Created by Nguyễn Viết Tuấn
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
