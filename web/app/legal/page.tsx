import type { Metadata } from "next";
import LegalClient from "./LegalClient";

export const metadata: Metadata = {
  title: "Legal — Privacy Policy, Terms & GDPR",
  description:
    "Read Testlify's Privacy Policy, Terms & Conditions and GDPR compliance commitments for our skills assessment and interviewing platform.",
};

export default function Page() {
  return <LegalClient />;
}
