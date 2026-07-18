import type { Metadata } from "next";
import InterviewLibraryClient from "./InterviewLibraryClient";

export const metadata: Metadata = {
  title: "Ready-to-use interviews for every role you hire",
  description:
    "Discover ready-to-use interview questions for every role — designed for fast, consistent and effective candidate evaluation, scored automatically in video, audio and chat.",
};

export default function Page() {
  return <InterviewLibraryClient />;
}
