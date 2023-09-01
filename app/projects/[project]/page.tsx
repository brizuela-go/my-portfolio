import { getProject } from "@/sanity/sanity-utils";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return <main>{project.name}</main>;
}
