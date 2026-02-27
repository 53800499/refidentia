/** @format */

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../ui/button";
import Link from "next/link";
import ButtonArrow from "../ui/buttonArrow";
import { cn } from "@/lib/utils";
import { slidesCta } from "@/mocks/Home/ctaData";



const CtaCarousel = ({ className }: { className?: string }) => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidesCta.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={cn("pt-16 sm:pt-20 lg:pt-[112px]", className)}>
      <div className="container">
        <div className="relative overflow-hidden rounded-[36px] h-[500px] sm:h-[550px] lg:h-[600px] bg-primary">
          <motion.div
            className="flex h-full"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.9, ease: "easeInOut" }}>
            {slidesCta.map((slide, i) => (
              <div
                key={i}
                className="relative min-w-full h-full flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}>
                {/* Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 mix-blend-multiply" />

                <div className="relative z-10 flex flex-col items-center text-center px-6 text-white max-w-3xl">
                  <h2 className="text-[clamp(2rem,1.6rem+1.7vw,3rem)] font-semibold leading-tight">
                    {slide.title}
                  </h2>

                  <p className="mt-4 text-lg text-white/90">
                    {slide.description}
                  </p>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="py-1.5 pr-1.5 pl-6">
                      <Link href="#features">
                        <span>{slide.primary}</span>
                        <ButtonArrow />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-black">
                      <Link href="#contact">
                        <span>{slide.secondary}</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {slidesCta.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-3 w-3 rounded-full transition-all",
                  i === index ? "bg-white w-6" : "bg-white/40 hover:bg-white/70"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaCarousel;
