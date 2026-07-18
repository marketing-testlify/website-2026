import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOLUTIONS } from "../[slug]/data";
import SolutionBody from "../[slug]/SolutionBody";

/* Dedicated static route for the "health-care-industry" template industry — kept as its own
   page (like the bespoke industries) so it ships in the immutable build and is
   served fresh on every deploy, instead of the dynamic [slug] ISR cache. */
const SLUG = "health-care-industry";
const d = SOLUTIONS[SLUG];

export const metadata: Metadata = {
  title: d?.title ?? "Solutions",
  description: d?.lead,
};

export default function Page() {
  if (!d) notFound();
  return <SolutionBody d={d} />;
}
