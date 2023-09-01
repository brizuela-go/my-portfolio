import Hero from "@/components/Hero";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  // const projects = await getProjects();

  return (
    <main className="max-w-5xl mx-auto flex max-lg:justify-center justify-start items-center h-screen -mt-6 ">
      <Hero />
    </main>
  );
}
