import { PortableTextBlock } from "sanity";
import { Technology } from "./Technology";

export interface Project {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  description: string;
  url: string;
  content: PortableTextBlock[];
  technologies: Technology[];
}
