"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rafael Pérez Aguirre",
    title: "Full Time Academic at Universidad Iberoamericana Puebla",
    description:
      "I have worked with Juan for more than 2 years. He is a very talented and hardworking person. He is always willing to learn new things and to help others. He is a very good team player and a very good friend. I highly recommend him.",
    image: "/1.png",
  },
  {
    name: "Huber Giron Nieto",
    title:
      "Computer Systems and Mechatronics Coordinator at Universidad Iberoamericana Puebla",
    description:
      "Talented Software Innovator, with a great capacity for teamwork and leadership.",
    image: "/2.png",
  },
  {
    name: "Antonio Benítez Ruíz",
    title:
      "Coordinator of the Master's Degree in Innovation and Technological Development at Universidad Iberoamericana Puebla",
    description:
      "Eduardo is a person with very good skills as a developer. He is competent and responsible, you can trust his self-learning ability to undertake any type of project.",
    image: "/3.png",
  },
];

const TestimonialCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showArrows={false}
      className="px-10 max-sm:-z-20 "
    >
      {testimonials.map((testimonial, index) => (
        <div key={index} className="mb-10 ">
          <Card>
            <CardHeader className="text-center flex justify-center flex-col items-center">
              <div className="mb-6">
                <Avatar className=" w-32 h-32">
                  <AvatarImage src={testimonial.image} />
                </Avatar>
              </div>

              <CardTitle>{testimonial.name}</CardTitle>
              <CardDescription>{testimonial.title}</CardDescription>
            </CardHeader>
            <div className="flex justify-center mb-4">
              <Quote className="rotate-180" size={28} />
            </div>

            <CardContent className="italic text-muted-foreground text-sm">
              {testimonial.description}
            </CardContent>
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
