import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOLUTIONS } from "../_shared/data";
import SolutionBody from "../_shared/SolutionBody";

/* Dedicated static route for the "media-industry" template industry — kept as its own
   page so it ships in the immutable build and is
   served fresh on every deploy, instead of the dynamic route ISR cache. */
const SLUG = "media-industry";
const d = SOLUTIONS[SLUG];

export const metadata: Metadata = {
  title: d?.title ?? "Solutions",
  description: d?.lead,
};

export default function Page() {
  if (!d) notFound();
  return <SolutionBody d={d} />;
}
