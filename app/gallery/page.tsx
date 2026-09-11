import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from class sessions, whiteboard lessons, and student moments at Sumedha Karunanayake Mathematics.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
