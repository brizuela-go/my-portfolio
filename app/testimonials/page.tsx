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

import Image from "next/image";
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
    description: "Very capable student. One of my favourites.",
    image: "/3.png",
  },
];

const Testimonials = () => {
  return (
    <main className="mt-36 max-sm:mt-44">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8 ">
        <div className=" space-y-6 mb-10 px-4">
          <h1 className="text-7xl font-semibold text-muted-foreground text-center max-lg:text-4xl ">
            What people has to <span className="text-foreground"> say</span>
          </h1>
        </div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          className="px-10"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mb-10">
              <Card>
                <CardHeader className="text-center flex justify-center flex-col items-center">
                  <div className="mb-6">
                    <Image
                      className="rounded-full h-36 w-36 "
                      alt={testimonial.name}
                      width={1000}
                      height={1000}
                      src={testimonial.image}
                    />
                  </div>

                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.title}</CardDescription>
                </CardHeader>
                <div className="flex justify-center mb-4">
                  <Quote className="rotate-180" size={28} />
                </div>

                <CardContent className="italic text-muted-foreground">
                  {testimonial.description}
                </CardContent>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </main>
  );
};

export default Testimonials;
