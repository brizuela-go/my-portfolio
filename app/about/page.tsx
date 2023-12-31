import Awards from "@/components/Awards";
import Credentials from "@/components/Credentials";
import Experiences from "@/components/Experiences";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import TypeWriterProvider from "@/components/TypeWriterProvider";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getStats } from "@/sanity/sanity-utils";
import { FileIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "auto",
  runtime = "edge",
  fetchCache = "auto",
  revalidate = 0;

const About = async () => {
  const stats = await getStats();
  return (
    <main className="max-w-5xl mx-auto mt-52 max-xl:my-48 ">
      <div className="flex flex-col xl:flex-row xl:justify-around xl:items-start gap-56 max-xl:gap-20">
        <div className="px-6">
          <h1 className=" text-start max-xl:text-center max-lg:text-4xl text-foreground text-6xl font-semibold ">
            A guy who loves to
            <TypeWriterProvider />
          </h1>
          <p className=" max-xl:text-center text-start text-muted-foreground text-xl font-semibold mt-6">
            Full Stack Developer building modern and performant web applications
          </p>
          <Stats stats={stats} />
        </div>
        <div className="flex flex-col justify-center max-sm:px-6 w-full ">
          <Tabs defaultValue="skills" className=" text-center space-y-6 w-full">
            <TabsList>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="credentials">Credentials</TabsTrigger>
              <TabsTrigger value="awards">Awards</TabsTrigger>
            </TabsList>
            <TabsContent value="skills">
              <Skills />
            </TabsContent>
            <TabsContent value="experience">
              <Experiences />
            </TabsContent>
            <TabsContent value="credentials">
              <Credentials />
            </TabsContent>
            <TabsContent value="awards">
              <Awards />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Link
        className="fixed bottom-5 right-7 max-lg:bottom-20"
        rel="noopener noreferrer"
        target="_blank"
        href="/resume.pdf"
      >
        <Button>
          <FileIcon className="w-6 h-6 mr-2" />
          Download CV
        </Button>
      </Link>
    </main>
  );
};

export default About;

export const metadata: Metadata = {
  title: "About",
  description: "About me",
};
