import type { Metadata } from "next";
import GlossaryClient from "./GlossaryClient";

export const metadata: Metadata = {
  title: "HR Glossary — every hiring term, defined in plain English",
  description:
    "An A–Z reference of 500+ hiring and assessment terms for recruiters and HR leaders — from adverse impact to zero-based hiring, written to be actually useful, not academic.",
};

export default function Page() {
  return <GlossaryClient />;
}
