import type { Metadata } from "next";
import InterviewLibraryClient from "./InterviewLibraryClient";

export const metadata: Metadata = {
  title: "AI interviews for every role you hire",
  description:
    "Structured, AI-scored interviews in video, audio and chat — with role-specific questions and intelligent follow-ups. Every candidate gets the same fair interview; you get a scored, reviewable transcript.",
};

export default function Page() {
  return <InterviewLibraryClient />;
}
