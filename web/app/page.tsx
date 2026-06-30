import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "Testlify — Hire on skill, not on a hunch",
  },
  description:
    "Your next great hire is already in your pipeline. Testlify surfaces them in 30 minutes with validated assessments — no resume bias, no gut-check interviews, no bad-hire regret.",
};

export default function HomePage() {
  return <HomeClient />;
}
