import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JdTemplatesClient from "./JdTemplatesClient";

export const metadata: Metadata = {
  title: "Job description templates",
  description:
    "Copy-ready, inclusive job descriptions for 90+ roles — structured to attract the right people and mapped to the skills you'll actually test for.",
};

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="Free job description templates — copy-ready JDs for 90+ roles, then screen for the skills"
        announcementCta="Browse templates"
      />
      <JdTemplatesClient />
      <SiteFooter />
    </>
  );
}
