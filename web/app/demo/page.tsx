import type { Metadata } from "next";
import LiveDemoClient from "./LiveDemoClient";

export const metadata: Metadata = {
  title: "See Testlify live, end to end",
  description:
    "Watch how Testlify screens, interviews and scores candidates automatically — a guided walkthrough of the full skills-based hiring workflow, from first application to verified shortlist.",
};

export default function Page() {
  return <LiveDemoClient />;
}
