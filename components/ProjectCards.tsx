import { Project } from "@/interfaces/Project";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type Props = {
  projects: Project[];
};

const ProjectCards = ({ projects }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:space-x-2 ">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project.name}>
          <Card className="hover:shadow-lg hover:-translate-y-1 transition duration-200 ease-in-out dark:shadow-zinc-900 w-[300px] h-[230px]  ">
            <CardHeader>
              <CardTitle className="">{project.name}</CardTitle>
              <CardDescription className="">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {project.technologies.map((tag, i) => (
                <Badge
                  key={i}
                  variant={"secondary"}
                  className="text-center mr-2"
                >
                  {tag.name}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCards;
