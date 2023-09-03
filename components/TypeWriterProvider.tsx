"use client";

import React from "react";
import TypewriterComponent from "typewriter-effect";

type Props = {};

const TypeWriterProvider = (props: Props) => {
  return (
    <span>
      <TypewriterComponent
        options={{
          strings: ["code ", "test ", "deploy ", "debug ", "design ", "learn "],
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  );
};

export default TypeWriterProvider;
