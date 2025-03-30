import React from "react"
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, UserRound, Stethoscope } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [titleWord, setTitleWord] = useState(0);
  const alternatingWords = useMemo(
    () => ["patients", "doctors", "care", "healing", "solutions"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleWord === alternatingWords.length - 1) {
        setTitleWord(0);
      } else {
        setTitleWord(titleWord + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleWord, alternatingWords]);

  return (
    <div className="w-full py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Connecting 
              <span className="relative ml-3 inline-block w-[180px] md:w-[240px] overflow-hidden">
                {alternatingWords.map((word, index) => (
                  <motion.span
                    key={index}
                    className="absolute text-blue-600 inline-block"
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                      titleWord === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: titleWord > index ? -40 : 40 }
                    }
                    transition={{ duration: 0.5 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2">
              for better healthcare
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mt-3">
              A dedicated platform where patients can share their health concerns and connect with the right doctors. 
              We're revolutionizing the way healthcare practitioners find and treat patients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link to="/sign-up" className="flex-1 sm:flex-none">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 gap-2">
                  <UserRound size={18} />
                  Join Us
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-3 mt-6">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-xs text-white font-bold">{i + 1}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600">
                <span className="font-semibold">5,000+</span> doctors and patients already joined
              </p>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transform rotate-3 transition-transform duration-300 hover:rotate-0">
                  <div className="p-3 bg-blue-50 rounded-xl mb-4">
                    <h3 className="font-semibold text-blue-800">Patient Post</h3>
                  </div>
                  <p className="text-gray-700 mb-4">I've been experiencing severe migraines for the past week, especially in the morning. Looking for a neurologist who can help.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Posted 2 hours ago</span>
                    <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                      Connect
                    </Button>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 absolute -top-10 -right-10 transform -rotate-6 transition-transform duration-300 hover:rotate-0">
                  <div className="p-3 bg-green-50 rounded-xl mb-4">
                    <h3 className="font-semibold text-green-800">Doctor Response</h3>
                  </div>
                  <p className="text-gray-700 mb-4">I'm Dr. Sarah, a neurologist with 10+ years of experience in treating migraines. I'd like to help.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Stethoscope size={16} className="text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Dr. Sarah J.</span>
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Accept
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
