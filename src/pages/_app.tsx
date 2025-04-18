import "../styles/globals.css";
import React, { ComponentType, useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";

import { Theme, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Footer, Navbar, MessageFlashSlider } from "components";

import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { TailwindIndicator } from "@/components/ui/tailwind-indicator";

type ComponentWithLayout = AppProps & {
  Component: AppProps["Component"] & {
    pageLayout?: ComponentType;
  };
};

export default function App({ Component, pageProps }: ComponentWithLayout) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} forcedTheme="light">
      <SessionProvider>
        <ToastThemeWrapper />
        <Navbar />
        <main className="min-h-screen">
          {/* <MessageFlashSlider/> */}
          {Component.pageLayout ? (
            <Component.pageLayout {...pageProps}>
              <Component {...pageProps} />
            </Component.pageLayout>
          ) : (
            <div className={"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"}>
              <Component {...pageProps} />
            </div>
          )}
        </main>
        <Footer />
        <Analytics />
        <TailwindIndicator />
      </SessionProvider>
    </ThemeProvider>
  );
}

const ToastThemeWrapper = () => {
  const { theme, systemTheme } = useTheme();

  const [toastTheme, setToastTheme] = useState<Theme>("dark");

  useEffect(() => {
    if (theme === "dark") {
      setToastTheme("dark");
    } else if (theme === "light") {
      setToastTheme("light");
    } else if (theme === "system") {
      if (systemTheme === "dark") {
        setToastTheme("dark");
      } else if (systemTheme === "light") {
        setToastTheme("light");
      }
    }
  }, [theme, systemTheme]);

  const [toastPosition, setToastPosition] = useState(toast.POSITION.TOP_RIGHT);

  useEffect(() => {
    setToastPosition(
      window.innerWidth > 1024
        ? toast.POSITION.TOP_RIGHT
        : toast.POSITION.BOTTOM_CENTER
    );
  }, []);

  return (
    <ToastContainer
      className={"relative mt-20 "}
      //position top-right on large screens and bottom-center on small screens
      position={toastPosition}
      theme={toastTheme}
    />
  );
};
