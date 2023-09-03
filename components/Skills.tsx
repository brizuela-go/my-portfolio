import { getSkills } from "@/sanity/sanity-utils";
import React from "react";
import Image from "next/image";

export default async function Skills() {
  // Fetch skills data directly during server rendering
  const skills = await getSkills();

  // Extract unique skill categories
  const skillCategories = Array.from(
    new Set(
      skills.map((skill) => skill.category).sort((a, b) => a.localeCompare(b))
    )
  );

  return (
    <div
      // center
      className="grid grid-cols-1  gap-4 max-md:grid-cols-1 max-xl:grid-cols-3 max-xl:gap-8

      "
    >
      {skillCategories.map((category) => (
        <div className="grid grid-cols-3" key={category}>
          <p className=" text-start capitalize font-medium text-muted-foreground">
            {category}
          </p>
          <div className="flex space-x-4 col-span-2 ">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <div key={skill._id}>
                  <Image
                    title={skill.name}
                    className="filter invert dark:filter-none"
                    src={skill.icon}
                    alt={skill.name}
                    width={20}
                    height={20}
                  />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
