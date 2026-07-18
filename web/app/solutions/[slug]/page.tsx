import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOLUTIONS, SOLUTION_SLUGS } from "./data";
import SolutionBody from "./SolutionBody";

/**
 * These 6 template industries are served by their own static route folders
 * (web/app/solutions/<slug>/) so they land in the immutable build output —
 * not the persistent ISR cache the dynamic route uses. Excluded here to avoid
 * a route collision with those static pages.
 */
export const STATIC_INDUSTRY_SLUGS = [
  "it-industry",
  "bpo-industry",
  "edtech-industry",
  "health-care-industry",
  "hospitality-industry",
  "media-industry",
] as const;

const EXCLUDE = new Set<string>(STATIC_INDUSTRY_SLUGS);

export function generateStaticParams() {
  return SOLUTION_SLUGS.filter((slug) => !EXCLUDE.has(slug)).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/solutions/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const d = SOLUTIONS[slug];
  if (!d) return { title: "Solutions" };
  return { title: d.title, description: d.lead };
}

export default async function Page(props: PageProps<"/solutions/[slug]">) {
  const { slug } = await props.params;
  const d = SOLUTIONS[slug];
  if (!d) notFound();
  return <SolutionBody d={d} />;
}
