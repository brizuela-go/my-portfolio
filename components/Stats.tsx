"use client";

import React from "react";
import CountUp from "react-countup";
import { Separator } from "@/components/ui/separator";
import { Stat } from "@/interfaces/Stat";

type Props = {
  stats: Stat[];
};

const Stats = ({ stats }: Props) => {
  return (
    <div className="flex justify-center gap-4  mt-6 ">
      {stats.map((stat, index) => (
        <div className="flex items-center gap-4" key={index}>
          <div className="flex flex-col justify-start">
            <p className="text-muted-foreground font-medium max-sm:text-sm">
              {stat.name}
            </p>
            <div className="font-bold text-foreground ">
              <CountUp delay={1.2} end={stat.value} duration={10} />
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
