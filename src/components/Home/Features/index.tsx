/** @format */
"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { featuresData } from "@/mocks/Home/featuresData";
import { Feature } from "@/types/FeatureType";
import SectionTitle from "@/components/common/sectionTitle";
import { FEATURES } from "@/constants/wording";

interface FeaturesProps {
  features?: Feature[];
}

const Features = ({ features = featuresData }: FeaturesProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  if (inView) controls.start("visible");

  const featureAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 }
    })
  };

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
      id="features">
      <div className="absolute inset-0 z-0 bg-[url('/images/solution/bg9.jpg')] bg-cover bg-center bg-no-repeat" />{" "}
      {/* Overlay */}
      <div className="container relative z-10">
        <SectionTitle
          className="flex flex-col items-center text-center"
          titleClassName="text-gray-900"
          descriptionClass="text-gray-600 max-w-2xl"
          subTitleClass="text-blue-600"
          subTitle={FEATURES.SUBTITLE}
          description={FEATURES.DESCRIPTION}>
          {FEATURES.MAIN_TITLE}
        </SectionTitle>
        <div
          ref={ref}
          className="grid gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={featureAnimation}
              className="rounded-3xl bg-white dark:bg-darkmode shadow-md p-6 flex flex-col items-start gap-4 hover:shadow-xl transition-shadow duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white text-2xl">
                <feature.icon />
              </div>
              <h5 className="text-lg font-semibold text-midnight_text dark:text-white">
                {feature.title}
              </h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
