import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation
} from "./carousel";
import { Card, CardContent } from "./card";
const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3",
    label: "Dedicated Doctors",
    type: "doctor"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3",
    label: "Satisfied Patients",
    type: "patient"
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3",
    label: "Healthcare Teams",
    type: "doctor"
  },
  {
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3",
    label: "Innovative Solutions",
    type: "hospital"
  },
  {
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3",
    label: "Modern Facilities",
    type: "hospital"
  }
];

export const ImageCarousel = () => {
  return (
    <div className="w-full py-12 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Our Healthcare Community
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1 h-full">
                  <Card className="border-none shadow-md overflow-hidden h-full">
                    <CardContent className="p-0 aspect-square relative group">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <p className="text-white font-semibold text-lg">{item.label}</p>
                          <p className="text-blue-100 text-sm capitalize">{item.type}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2" />
        </Carousel>
      </div>
    </div>
  );
};
