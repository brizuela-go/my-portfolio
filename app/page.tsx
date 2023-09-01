import Hero from "@/components/Hero";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  // const projects = await getProjects();

  return (
    <main className="max-w-5xl mx-auto mt-44 max-lg:mt-52">
      <Hero />
      <h1></h1>
    </main>
  );
}
