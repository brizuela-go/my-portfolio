"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Brain,
  BrainCircuit,
  Brush,
  Lightbulb,
  MonitorSmartphone,
  TabletSmartphone,
} from "lucide-react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const services = [
  {
    title: "Web Development",
    description: "Full stack web development using the latest technologies",
    icon: MonitorSmartphone,
  },
  {
    title: "Mobile Development",
    description: "For both Android and iOS using Flutter and React Native",
    icon: TabletSmartphone,
  },
  {
    title: "AI Services",
    description:
      "Prompt engineering, image generation, text generation, video generation, etc...",
    icon: Brain,
  },
  {
    title: "AI Development",
    description: "Open AI, Scikit-learn, Tensorflow, PyTorch, and more...",
    icon: BrainCircuit,
  },
  {
    title: "IoT Development",
    description: "Web and mobile apps for IoT devices and hardware coding",
    icon: Lightbulb,
  },
  {
    title: "Design",
    description: "Adobe XD, Figma and Photoshop for UI/UX design",
    icon: Brush,
  },
];

const ServicesCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      className="px-10"
    >
      {services.map((service, index) => (
        <div key={index} className="mb-10">
          <Card>
            <CardHeader className="text-center flex justify-center flex-col items-center">
              <service.icon size={64} />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default ServicesCarousel;
