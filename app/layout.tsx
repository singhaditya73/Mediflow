import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediFlow - Clinical Data Standardization & FHIR Conversion",
  description: "Transform unstructured clinical data into standardized FHIR format with Web3 technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Wrapping with ClerkProvider */}
        <ClerkProvider
          frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
          navigate={(to) => router.push(to)}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
