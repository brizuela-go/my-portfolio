import ServicesCarousel from "@/components/ServicesCarousel";
import { Metadata } from "next";

const Services = () => {
  return (
    <main className="flex justify-center items-center h-screen max-lg:mt-20 mt-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:px-12 xl:px-0 ">
        <div className=" space-y-6 mb-10 px-4">
          <h1 className="text-7xl font-semibold text-foreground max-lg:text-center max-lg:text-4xl tracking-tighter ">
            My Services
          </h1>
          <p className="text-muted-foreground max-lg:text-center tracking-tight">
            List of services I provide. I&apos;m fully committed to provide the
            best quality to my clients
          </p>
        </div>
        <ServicesCarousel />
      </div>
    </main>
  );
};

export default Services;

export const metadata: Metadata = {
  title: "Services",
  description: "Services I provide",
};
