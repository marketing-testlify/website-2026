import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOLUTIONS } from "../_shared/data";
import SolutionBody from "../_shared/SolutionBody";

const SLUG = "lateral-hiring";
const d = SOLUTIONS[SLUG];

export const metadata: Metadata = {
  title: d?.title ?? "Solutions",
  description: d?.lead,
};

export default function Page() {
  if (!d) notFound();
  return <SolutionBody d={d} />;
}
