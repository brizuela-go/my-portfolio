import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Metadata } from "next";

const Testimonials = () => {
  return (
    <main className="mt-36 max-sm:mt-44">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8 md:px-16 ">
        <div className=" space-y-6 mb-10 px-4">
          <h1 className="text-7xl font-semibold text-muted-foreground text-center max-lg:text-4xl tracking-tighter ">
            What people have to <span className="text-foreground"> say</span>
          </h1>
        </div>
        <TestimonialCarousel />
      </div>
    </main>
  );
};

export default Testimonials;

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What people have to say about me",
};
