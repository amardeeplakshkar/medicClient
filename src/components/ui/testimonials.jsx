import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "./button"; 
import { AppName } from "../../../data/constants";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: `Thanks to ${AppName}, I found a specialist who understood my rare condition when local doctors couldn't help. The platform made it easy to share my symptoms and connect with the right doctor.`,
      name: "Sarah Johnson",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "As a dermatologist with a specialty in rare skin conditions, this platform has helped me connect with patients who truly need my expertise. It's revolutionized how I build my practice.",
      name: "Dr. Michael Chen",
      role: "Dermatologist",
      image: "https://images.unsplash.com/photo-1601582589907-f92af5ed9db8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The ability to post my health concerns anonymously was crucial for me. I found a compassionate doctor who helped me with a condition I was too embarrassed to discuss in person initially.",
      name: "Alex Patel",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: `${AppName} has transformed my pediatric practice. I can now help children from remote areas who otherwise wouldn't have access to specialized pediatric care.`,
      name: "Dr. Elizabeth Wright",
      role: "Pediatrician",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from doctors and patients who have found success on our platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6">
            <Quote className="h-12 w-12 text-blue-200" />
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-sm">
            <div className="min-h-[200px]">
              <p className="text-lg md:text-xl text-gray-700 italic mb-8">
                {testimonials[activeIndex].quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};