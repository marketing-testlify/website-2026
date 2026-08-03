import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TEST_INDEX, getTest } from '@/app/_tests';
import TestDetailClient from './TestDetailClient';

// Every test detail page is prerendered at build time, and unknown slugs 404
// rather than being rendered on demand — so there is no ISR cache to go stale.
export const dynamicParams = false;

export function generateStaticParams() {
  return TEST_INDEX.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const test = getTest(slug);
  if (!test) return { title: 'Test library' };
  return {
    title: `${test.name} Test | Testlify`,
    description: test.desc,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const test = getTest(slug);
  if (!test) notFound();
  return <TestDetailClient test={test} />;
}
