import type { Metadata } from "next";
import IntegrationsClient from "./IntegrationsClient";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect Testlify to your ATS, HRIS and the tools your team already uses. 100+ native integrations, plus an open API and webhooks for everything else.",
};

export default function Page() {
  return <IntegrationsClient />;
}
