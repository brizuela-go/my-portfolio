import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <main className="flex justify-center items-center h-screen flex-col space-y-10">
      <h1 className="z-10 text-7xl font-semibold text-muted-foreground text-center max-lg:text-4xl tracking-tight ">
        Contact <span className="text-foreground"> me</span>
      </h1>
      <ContactForm />
    </main>
  );
};

export default Contact;

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me",
};
