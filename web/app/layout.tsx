import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import MagneticButtons from "@/components/MagneticButtons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Testlify — AI-powered skills assessment & interviewing platform",
    template: "%s · Testlify",
  },
  description:
    "Testlify helps hiring teams stop guessing and start proving who can actually do the job — 3,500+ expert-validated tests, AI screening and interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={poppins.variable}>
      <body className="bg-white text-ink antialiased">
        <ScrollProgress />
        <MagneticButtons />
        {children}
      </body>
    </html>
  );
}
