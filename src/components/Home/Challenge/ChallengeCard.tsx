/** @format */
"use client";

import { ReactElement } from "react";
import Image from "next/image";
import {
  Briefcase,
  DesktopComputer,
  ShieldCheck,
  Sparkles,
  Video,
  PainBrush
} from "@/lib/icons";
import { CategoryType } from "@/types/CategoryType";

// Mapping des icônes pour chaque challenge
function challengeIconFinder(category: string): ReactElement {
  const icons: Record<string, ReactElement> = {
    "Transport d'argent liquide": <Briefcase />,
    "Absence de traçabilité": <DesktopComputer />,
    "Accès au crédit limité": <Sparkles />,
    "Multiplication des portefeuilles": <ShieldCheck />
  };
  return icons[category] || <PainBrush />;
}

const CategoryCard = ({ category }: { category: CategoryType }) => {
  return (
    <div className="rounded-3xl border-2 border-transparent bg-primary px-5 pt-5 pb-6 transition-all duration-500 hover:border-purple-500 sm:px-7 sm:pt-7 sm:pb-8">
      <div className="mb-9 flex items-center justify-center sm:mb-11 lg:mb-15">
        {/* Icone */}
        <div
          className="flex h-20.5 w-20.5 items-center justify-center rounded-3xl shadow-lg"
          style={{
            background:
              "linear-gradient(var(--primary), var(--primary)) padding-box, linear-gradient(to bottom, var(--gray-200), var(--primary)) border-box",
            borderRadius: "999px",
            border: "1.125px solid transparent"
          }}>
          {category.image ?
            <Image
              src={category.image}
              alt={category.title}
              width={28}
              height={28}
            />
          : challengeIconFinder(category.title)}
        </div>

        {/* Nombre de cours / info */}
        {/* <div className="inline-flex rounded-full bg-gray-50 px-3 py-1">
          <p className="text-sm leading-5 font-medium tracking-sm text-secondary">
            {category.courseCount > 1 ?
              category.courseCount + " Courses"
            : category.courseCount + " Course"}
          </p>
        </div> */}
      </div>

      {/* Titre */}
      <h5 className="text-lg font-medium sm:text-xl lg:text-2xl lg:leading-8">
        {category.title}
      </h5>

      {/* Description */}
      <p className="mt-3 leading-6 tracking-base text-secondary line-clamp-2">
        {category.description}
      </p>
    </div>
  );
};

export default CategoryCard;
