/** @format */

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { count } from "@/mocks/Home/counterData";


const Counter = () => {
  return (
    <section className={`py-20 bg-gray-50 overflow-x-hidden`}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {count.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group flex flex-col items-center gap-6">
              {/* Icon */}
              <div className="flex h-8 w-8 items-center justify-center rounded-2xl text-blue-600  transition-all duration-300 group-hover:scale-110">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={32}
                  height={32}
                  unoptimized
                />
              </div>

              {/* Animated Number */}
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.2
                }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-midnight_text dark:text-white">
                {item.value}
                {item.suffix}
              </motion.span>

              {/* Description */}
              <p className="text-base text-grey dark:text-white/60 max-w-xs leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
