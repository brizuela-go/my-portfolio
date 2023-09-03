import { Project } from "@/interfaces/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Skill } from "@/interfaces/Skill";
import { Experience } from "@/interfaces/Experience";

export async function getProjects(): Promise<Project[]> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name, 
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        technologies,
        description,
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name, 
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        technologies[]{
          name,
          url,
          "image": image.asset->url  
        },
        description,
    }`,
    { slug }
  );
}

export async function getSkills(): Promise<Skill[]> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "skills"]{
        _id,
        _createdAt,
        name,
        "icon": icon.asset->url,
        category,
    }`
  );
}

export async function getExperiences(): Promise<Experience[]> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "experience"]{
        _id,
        _createdAt,
        title,
        years,
        position,
        company,
        description,
    }`
  );
}
