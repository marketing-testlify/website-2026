import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers — do the best work of your career",
  description:
    "We're a remote-first team building the platform that makes hiring fair for everyone. Big problems, real ownership, and people who care.",
};

export default function Page() {
  return <CareersClient />;
}
