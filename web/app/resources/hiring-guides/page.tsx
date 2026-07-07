import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HiringGuidesClient from "./HiringGuidesClient";

export const metadata: Metadata = {
  title: "Hiring guides",
  description:
    "Role-by-role hiring guides with ready-to-use job descriptions, interview questions and the exact skills to test for — so you hire on proof, not gut feel.",
};

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="Free hiring guides — job descriptions, interview questions & skills to test for 90+ roles"
        announcementCta="Browse guides"
      />
      <HiringGuidesClient />
      <SiteFooter />
    </>
  );
}
