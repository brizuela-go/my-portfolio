import ProjectCards from "@/components/ProjectCards";
import { getProjects } from "@/sanity/sanity-utils";

export const dynamic = "auto",
  runtime = "edge",
  fetchCache = "auto",
  revalidate = 10;

const Projects = async () => {
  const projects = await getProjects();

  return (
    <main className="max-w-5xl mx-auto flex max-lg:justify-center  my-28 max-sm:mt-40 mt-40  ">
      <ProjectCards projects={projects} />
    </main>
  );
};

export default Projects;
