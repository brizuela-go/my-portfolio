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
import { PortableText } from "@portabletext/react";
import ReactMarkdown from "react-markdown";
import { Calendar, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  const formattedDate = new Date(project._createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <main>
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className=" text-9xl max-sm:text-5xl tracking-tight font-medium text-center max-w-5xl ">
          {project.name}
        </h1>
        <p className="text-2xl text-center mt-4 text-muted-foreground text px-8">{`${project.description}`}</p>
        <div className="text-2xl text-center mt-4 text-primary text px-8 flex justify-center items-center gap-4">
          <Calendar size={24} />
          {`${formattedDate}`}
        </div>
      </div>
      <div className="max-w-5xl h-screen mx-auto flex justify-center items-center ">
        <div className="text-center  tracking-tight font-medium text-3xl mt-4 px-8 text-transparent bg-gradient-to-r  bg-clip-text dark:from-zinc-100 dark:to-zinc-300 from-zinc-900 to-zinc-700 ">
          <PortableText value={project.content} />
        </div>
      </div>
      <div className="max-w-5xl h-screen mx-auto px-10 ">
        <h3 className="text-5xl max-sm:text-4xl tracking-tight font-medium max-sm:text-center ">
          Technologies
        </h3>
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
      <Link href={project.url} target="_blank" rel="noopener noreferrer">
        <Button className="fixed max-lg:bottom-20 bottom-5 right-7">
          <Globe className="mr-2 h-4 w-4" />
          Visit Project
        </Button>
      </Link>
    </main>
  );
}
