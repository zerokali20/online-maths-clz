export type GalleryCategory = "class" | "whiteboard" | "students" | "events";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: GalleryCategory;
  aspect?: "square" | "portrait" | "landscape";
}

const gallery: GalleryPhoto[] = [
  { id: "g1", src: "/images/gallery/9.jpg", alt: "Mathematics class in session", caption: "Grade 9 - Algebra class", category: "class", aspect: "landscape" },
  { id: "g2", src: "", alt: "Whiteboard with mathematical equations", caption: "Quadratic equations explained", category: "whiteboard", aspect: "landscape" },
  { id: "g3", src: "", alt: "Students working through problems", caption: "Problem-solving session", category: "students", aspect: "square" },
  { id: "g4", src: "", alt: "O/L revision class", caption: "O/L revision - Grade 11", category: "class", aspect: "portrait" },
  { id: "g5", src: "", alt: "Geometry diagrams on board", caption: "Geometry - Grade 8", category: "whiteboard", aspect: "square" },
  { id: "g6", src: "/images/gallery/result.jpg", alt: "Students receiving results", caption: "Results celebration", category: "events", aspect: "landscape" },
  { id: "g7", src: "", alt: "Small group tutoring session", caption: "Small group - Grade 7", category: "students", aspect: "square" },
  { id: "g8", src: "", alt: "Statistics lesson", caption: "Statistics and probability", category: "class", aspect: "landscape" },
  { id: "g9", src: "/images/gallery/Award.jpg", alt: "Best Central Province Mathematics Teacher Award at Shilpabhimani Event", caption: "Best Central Province Maths Teacher — Shilpabhimani Event", category: "events", aspect: "portrait" },
];

export default gallery;
