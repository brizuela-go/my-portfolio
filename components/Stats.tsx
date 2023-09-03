"use client";

import React from "react";
import CountUp from "react-countup";
import { Separator } from "@/components/ui/separator";

type Props = {
  stat1: number;
  stat2: number;
  stat3: number;
  stat4: number;
};

const labels = [
  "Years of Experience",
  "Satisfied Clients",
  "Finished Projects",
  "Winning Awards",
];

const Stats = ({ stat1, stat2, stat3, stat4 }: Props) => {
  // join labels with stats in an object
  const stats = [stat1, stat2, stat3, stat4].map((stat, index) => ({
    label: labels[index],
    stat,
  }));

  return (
    <div className="flex justify-center gap-4  mt-6 ">
      {stats.map((stat, index) => (
        <div className="flex items-center gap-4" key={index}>
          <div className="flex flex-col justify-start">
            <p className="text-muted-foreground font-medium">{stat.label}</p>
            <div className="font-bold text-foreground ">
              <CountUp delay={1.2} end={stat.stat} duration={10} />
              {" +"}
            </div>
          </div>
          {index !== 3 && <Separator orientation="vertical" />}
        </div>
      ))}
    </div>
  );
};

export default Stats;
