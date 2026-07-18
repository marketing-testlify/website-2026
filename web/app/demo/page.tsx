import type { Metadata } from "next";
import LiveDemoClient from "./LiveDemoClient";

export const metadata: Metadata = {
  title: "Experience Testlify with a demo",
  description:
    "See how Testlify helps 1,500+ teams hire with confidence using skills-based assessments, structured interviews, and advanced proctoring, all in one platform.",
};

export default function Page() {
  return <LiveDemoClient />;
}
