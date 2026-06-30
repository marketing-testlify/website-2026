import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Research, playbooks and practical guides for building a fairer, faster hiring process.",
};

export default function Page() {
  return <BlogClient />;
}
