import type { Metadata } from "next";
import SectionTemplatesClient from "./SectionTemplatesClient";

export const metadata: Metadata = {
  title: "Section library — reusable page templates",
  description:
    "A library of pre-built sections moved off the homepage. Drop any of these into a new page as a starting point.",
};

export default function Page() {
  return <SectionTemplatesClient />;
}
