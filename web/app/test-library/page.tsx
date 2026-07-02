import type { Metadata } from "next";
import TestLibraryClient from "./TestLibraryClient";

export const metadata: Metadata = {
  title: "Test Library — 3,500+ tests for every role you hire",
  description:
    "The widest catalog of expert-validated assessments anywhere — coding, cognitive, role-specific, language and personality. Combine any of them into one job-ready test in minutes.",
};

export default function Page() {
  return <TestLibraryClient />;
}
