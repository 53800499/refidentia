/** @format */

"use client";

import Image from "next/image";
import SectionTitle from "@/components/common/sectionTitle";
import { CHALLENGES } from "@/constants/wording";
import { Challenge } from "@/types/challenge";
interface ChallengesProps {
  challenges: Challenge[];
}

const Challenges = ({ challenges }: ChallengesProps) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 bg-[url('/images/video/shape.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container relative z-10">
        <SectionTitle
          className="flex flex-col items-center text-center"
          titleClassName="text-gray-900"
          descriptionClass="text-gray-600"
          subTitleClass="text-blue-600"
          subTitle={CHALLENGES.SUBTITLE}
          description={CHALLENGES.DESCRIPTION}>
          {CHALLENGES.MAIN_TITLE}
        </SectionTitle>

        <div className="grid gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3 lg:pt-16">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="group rounded-3xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-500">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition duration-300 group-hover:scale-110">
                {challenge.icon}
              </div>

              {/* Text */}
              <div className="pt-6">
                <h5 className="text-xl font-semibold text-gray-900">
                  {challenge.title}
                </h5>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {challenge.description}
                </p>
              </div>

              {/* Image */}
              <div className="pt-6">
                <div className="overflow-hidden rounded-2xl border border-gray-100">
                  <Image
                    width={364}
                    height={242}
                    sizes="100vw"
                    src={challenge.thumbnail}
                    alt={challenge.title}
                    className="w-full transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
