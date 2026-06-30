import type { Metadata } from "next";
import ProductClient from "./ProductClient";

export const metadata: Metadata = {
  title: "AI Resume Screener — surface the best candidates automatically",
  description:
    "Testlify's AI reads every application the moment it lands — scoring skills, experience and intent against your role, then handing you a ranked shortlist you can trust.",
};

export default function Page() {
  return <ProductClient />;
}
