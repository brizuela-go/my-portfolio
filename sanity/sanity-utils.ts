import { Project } from "@/interfaces/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

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
