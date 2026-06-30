import type { Metadata } from "next";
import TestLibraryClient from "./TestLibraryClient";

export const metadata: Metadata = {
  title: "Test Library — 3,184+ skills tests validated by experts",
  description:
    "Browse role-specific, cognitive, coding, language and personality assessments — each built by subject-matter experts and calibrated on real candidate data.",
};

export default function Page() {
  return <TestLibraryClient />;
}
