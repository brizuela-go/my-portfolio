import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <main>
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className=" text-9xl max-sm:text-7xl tracking-tight font-medium text-center">
          {project.name}
        </h1>
        <p className="text-2xl text-center mt-4 text-muted-foreground text">{`${project.description}`}</p>
      </div>
      <div className="max-w-5xl h-screen mx-auto">
        <h3 className="text-5xl tracking-tight font-medium ">Technologies</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-12">
          {project.technologies.map((technology) => (
            <Link key={technology.name} href={technology.url}>
              <Card className="hover:shadow-lg hover:-translate-y-1 transition duration-200 ease-in-out dark:shadow-zinc-900   ">
                <CardHeader className="flex justify-center items-center flex-col">
                  <Image
                    className="w-16 h-16 mb-4 filter invert dark:filter-none"
                    src={technology.image}
                    alt={technology.name}
                    width={80}
                    height={80}
                  />
                  <CardTitle className="text-center">
                    {technology.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
