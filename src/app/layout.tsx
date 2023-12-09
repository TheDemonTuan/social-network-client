"use client";

import { Inter, Lato } from "next/font/google";
import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/Theme/theme-provider";

const inter = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 5,
    },
    mutations: {
      retry: false,
    },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem> */}
          <Header />
          <main className="flex-auto">{children}</main>
          <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
          {/* </ThemeProvider> */}
        </QueryClientProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
