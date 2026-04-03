/** @format */

"use client";
import React, { useState } from "react";
import SectionTitle from "../common/sectionTitle";
import { SIGNUP_OPTION } from "@/constants/wording";
import Button from "../ui/button";
import Link from "next/link";
import { User, Briefcase, Check } from "lucide-react";

type OptionType = "personnel" | "pro";

export const OptionSignUp = () => {
  const [selected, setSelected] = useState<OptionType>("personnel");
  const options: {
    id: OptionType;
    title: string;
    description: string;
    icon: React.ReactNode;
    highlight?: boolean;
    features: string[];
  }[] = [
    {
      id: "personnel",
      title: "Personnel",
      description:
        "Gérez facilement vos informations personnelles et accédez à vos services en toute sécurité.",
      icon: <User className="w-5 h-5" />,
      features: [
        "Faitessez vos achats en ligne en toute sécurité sans partager vos informations bancaires avec les commerçants.",
        "Recevez des paiements de vos clients sans avoir à créer un compte marchand séparé.",
        "Gérez vos transactions et votre historique de paiement en toute simplicité."
      ]
    },
    {
      id: "pro",
      title: "Professionnel",
      description:
        "Vendez en ligne, en magasin ou en déplacement avec une solution de paiement sécurisée et facile à utiliser.",
      icon: <Briefcase className="w-5 h-5" />,
      highlight: true,
      features: [
        "Acceptez les paiements en ligne, en magasin ou en déplacement avec une solution de paiement sécurisée et facile à utiliser.",
        "Gérez vos transactions, votre inventaire et vos clients à partir d'une plateforme centralisée.",
        "Bénéficiez d'outils de reporting et d'analyse pour suivre les performances de votre entreprise et prendre des décisions éclairées."
      ]
    }
  ];

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container max-w-6xl mx-auto">
        {/* HEADER */}
        <SectionTitle
          className="flex flex-col items-center text-center mb-14"
          titleClassName="text-gray-900"
          descriptionClass="text-gray-600 max-w-2xl"
          subTitleClass="text-blue-600"
          subTitle={SIGNUP_OPTION.SUBTITLE}
          description={SIGNUP_OPTION.DESCRIPTION}>
          {SIGNUP_OPTION.TITLE}
        </SectionTitle>

        {/* OPTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {options.map((option) => {
            const isActive = selected === option.id;

            return (
              <div
                key={option.id}
                onClick={() => setSelected(option.id)}
                className={`relative cursor-pointer rounded-2xl border p-7 transition-all duration-300
                ${
                  isActive ?
                    "border-blue-600 bg-blue-50 shadow-xl scale-[1.02]"
                  : "border-gray-200 hover:border-blue-400 hover:shadow-lg"
                }`}>
                {/* Badge recommandé */}
                {option.highlight && (
                  <span className="absolute top-2 right-2 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
                    Recommandé
                  </span>
                )}

                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isActive ?
                          "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600"
                      }`}>
                      {option.icon}
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900">
                      {option.title}
                    </h3>
                  </div>

                  {/* Radio stylisé */}
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center
                    ${isActive ? "border-blue-600" : "border-gray-300"}`}>
                    {isActive && (
                      <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {option.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-blue-100">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Input caché (accessibilité) */}
                <input
                  type="radio"
                  name="signup-option"
                  checked={isActive}
                  onChange={() => setSelected(option.id)}
                  className="hidden"
                />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            asChild
            disabled={!selected}
            className="h-12 px-8 text-base font-medium">
            <Link href={selected ? `/signup?type=${selected}` : "#"}>
              {selected ?
                `Continuer en ${selected === "pro" ? "Professionnel" : "Personnel"}`
              : "Choisissez une option"}
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-[-1]">
        <svg
          width="1440"
          height="969"
          viewBox="0 0 1440 969"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <mask
            id="mask0_95:1005"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="969">
            <rect width="1440" height="969" fill="#090E34" />
          </mask>
          <g mask="url(#mask0_95:1005)">
            <path
              opacity="2"
              d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
              fill="url(#paint0_linear_95:1005)"
            />
            <path
              opacity="2"
              d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
              fill="url(#paint1_linear_95:1005)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_95:1005"
              x1="1178.4"
              y1="151.853"
              x2="780.959"
              y2="453.581"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_95:1005"
              x1="160.5"
              y1="220"
              x2="1099.45"
              y2="1192.04"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};
