import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOLUTIONS } from "../_sol/data";
import SolutionBody from "../_sol/SolutionBody";

const SLUG = "volume-hiring";
const d = SOLUTIONS[SLUG];

export const metadata: Metadata = {
  title: d?.title ?? "Solutions",
  description: d?.lead,
};

export default function Page() {
  if (!d) notFound();
  return <SolutionBody d={d} />;
}
