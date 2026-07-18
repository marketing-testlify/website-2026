import type { Metadata } from "next";
import TestlifyAiClient from "./TestlifyAiClient";

export const metadata: Metadata = {
  title: "The AI talent assessment platform for smarter hiring",
  description:
    "Finding the right skills in a competitive market — bias-free and fast — is hard. Testlify gives you the tools and insight to make data-driven hiring decisions, every time.",
};

export default function Page() {
  return <TestlifyAiClient />;
}
