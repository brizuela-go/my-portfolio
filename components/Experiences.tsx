import { getExperiences } from "@/sanity/sanity-utils";
import { Separator } from "./ui/separator";

const Experiences = async () => {
  const experiences = await getExperiences();

  experiences.forEach((experience: any) => {
    experience.years = parseInt(experience.years, 10);
  });

  experiences.sort((a: any, b: any) => b.years - a.years);

  return (
    <div className="space-y-8 mb-14">
      {experiences.map((experience, index) => (
        <div className="grid grid-cols-1 text-sm p-2 " key={index}>
          <div className="space-y-1">
            <h4 className="font-medium text-start text-zinc-800 dark:text-zinc-200 ">
              {experience.position}
            </h4>
          </div>
          <Separator className="my-2 " />
          <div className="flex h-5 items-center space-x-4 text-muted-foreground">
            <div>{experience.company}</div>
            <Separator orientation="vertical" />
            <div className="font-bold text-foreground">
              {experience.years} - Present
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
