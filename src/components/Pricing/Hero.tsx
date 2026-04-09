/** @format */

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import ButtonArrow from "@/components/ui/buttonArrow";
import { partners } from "@/mocks/Home/heroData";
import { HERO, PRICING_HERO } from "@/constants/wording";
import { CircleCheckBig } from "lucide-react";
import { Mastercard, Mtn } from "@/assets";

export default function Hero() {
  /* ===============================
     PRICING DATA
  =============================== */
  const pricingCards = [
    {
      name: "Free",
      price: "0",
      users: "10 utilisateurs",
      color: "bg-gray-100 text-gray-900",
      highlight: false
    },
    {
      name: "Standard",
      price: "5 000",
      users: "10 utilisateurs",
      color: "bg-gray-100 text-gray-900",
      highlight: false
    },
    {
      name: "Elite",
      price: "15 000",
      users: "50 utilisateurs",
      color: "bg-blue-600 text-white",
      highlight: true
    },
    {
      name: "Pro",
      price: "35 000",
      users: "Illimité",
      color: "bg-gray-900 text-white",
      highlight: false
    }
  ];

  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndex((prev) => (prev + 1) % pricingCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const card = pricingCards[cardIndex];

  return (
    <section className="relative z-10 overflow-hidden bg-white py-20 md:pt-35">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
          {/* ================= LEFT (FIXED CONTENT) ================= */}
          <div>
            <h1 className="text-3xl md:text-6xl font-bold leading-tight text-gray-900">
              {PRICING_HERO.TITLE}
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              {PRICING_HERO.SUBTITLE}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild className="h-12 px-6">
                <Link href="#">
                  {HERO.CTA_PRIMARY}
                  <ButtonArrow />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="#">{HERO.CTA_SECONDARY}</Link>
              </Button>
            </div>
            {/* PARTNERS */}
            <div className="mt-8 overflow-hidden border-y border-gray-200 py-2">
              <motion.div
                className="flex items-center gap-8 whitespace-nowrap"
                animate={{
                  x: ["0%", "-50%"]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear"
                }}>
                {[...partners, ...partners].map((partner, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center min-w-[140px] max-h-10 opacity-70 hover:opacity-100 transition duration-300">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="hover:grayscale- transition duration-300 object-contain max-h-10"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          {/* ================= RIGHT (SLIDER) ================= */}
          <AnimatePresence mode="wait">
            <motion.div
              key={cardIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-xl mx-auto lg:max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-xl p-4 sm:p-6">
              {/* HEADER */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                    Q
                  </div>
                  <span className="font-semibold text-gray-800">
                    {PRICING_HERO.RIGHT_HEADER.TITLE}
                  </span>
                </div>

                <p className="text-sm text-gray-500">
                  {PRICING_HERO.RIGHT_HEADER.DESCRIPTION}{" "}
                  <span className="text-purple-600 cursor-pointer hover:underline">
                    {PRICING_HERO.RIGHT_HEADER.DISCUTE}
                  </span>
                </p>
              </div>

              {/* CONTENT */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* ================= LEFT ================= */}
                <div className="space-y-5">
                  {/* OFFERS */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      {PRICING_HERO.RIGHT_HEADER.OFFERS.TITLE}
                    </h4>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 border border-gray-200 rounded-xl p-3 cursor-pointer hover:border-gray-300 transition">
                        <div className="w-4 h-4 rounded-full border border-gray-300" />
                        <span className="text-sm text-gray-700">
                          {PRICING_HERO.RIGHT_HEADER.OFFERS.MONTHLY}
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-2 border-purple-200 rounded-xl p-3 cursor-pointer bg-purple-50">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full bg-purple-500" />
                          <span className="text-sm font-medium text-gray-800">
                            {PRICING_HERO.RIGHT_HEADER.OFFERS.YEARLY}
                          </span>
                        </div>

                        <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                          {PRICING_HERO.RIGHT_HEADER.OFFERS.ECONOMIC}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* PAYMENT */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      {PRICING_HERO.RIGHT_HEADER.PAYMENT.TITLE}
                    </h4>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="flex-1 border-2 border-purple-200 rounded-lg p-3 text-center text-sm text-purple-600 font-medium">
                        {PRICING_HERO.RIGHT_HEADER.PAYMENT.METHODS[0]}
                      </div>

                      <div className="flex-1 border border-gray-200 rounded-lg p-3 text-center text-sm text-gray-400">
                        {PRICING_HERO.RIGHT_HEADER.PAYMENT.METHODS[1]}
                      </div>

                      <div className="sm:w-10 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                        {PRICING_HERO.RIGHT_HEADER.PAYMENT.METHODS[2]}
                      </div>
                    </div>
                  </div>

                  {/* CARD INPUT */}
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Numéro de carte
                      </label>

                      <div className="relative mt-1">
                        <input
                          type="text"
                          placeholder="1234 1234 1234 1234"
                          className="w-full border border-gray-200 rounded-lg p-2.5 sm:p-3 pr-24 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                        />

                        {/* ICONES */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                          <Image src={Mtn} alt="mtn" width={28} height={18} />
                          <Image
                            src={Mastercard}
                            alt="mastercard"
                            width={28}
                            height={18}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <input
                        className="w-1/2 border border-gray-200 rounded-lg p-2.5 sm:p-3 text-sm"
                        placeholder="MM/AA"
                      />
                      <input
                        className="w-1/2 border border-gray-200 rounded-lg p-2.5 sm:p-3 text-sm"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                </div>

                {/* ================= RIGHT ================= */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col justify-between lg:sticky lg:top-6 h-auto lg:h-full">
                  <div>
                    <h4 className="font-semibold text-gray-800">{card.name}</h4>

                    <p className="text-sm text-gray-500">{card.users}</p>

                    <div className="mt-3">
                      <span className="text-3xl font-bold text-gray-900">
                        {card.price}
                      </span>
                      {card.price !== "Sur mesure" && (
                        <span className="text-sm text-gray-500 ml-1">
                          FCFA / an
                        </span>
                      )}
                    </div>

                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li className="flex gap-2 items-center">
                        <CircleCheckBig className="w-4 h-4 text-green-500" />{" "}
                        Historique 24 mois
                      </li>
                      <li className="flex gap-2 items-center">
                        <CircleCheckBig className="w-4 h-4 text-green-500" />{" "}
                        Mise à jour temps réel
                      </li>
                      <li className="flex gap-2 items-center">
                        <CircleCheckBig className="w-4 h-4 text-green-500" />{" "}
                        +1000 intégrations
                      </li>
                      <li className="flex gap-2 items-center">
                        <CircleCheckBig className="w-4 h-4 text-green-500" />{" "}
                        Reporting simplifié
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between text-sm">
                    <span className="text-gray-500">Total aujourd’hui</span>
                    <span className="font-semibold text-gray-900">
                      {card.price} FCFA
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button className="mt-6 w-full py-3 text-white transition">
                Confirmer et s’abonner
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* BACKGROUND SVG */}
      <motion.div
        className="absolute right-0 bottom-0 z-[-1] opacity-30 lg:opacity-100"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
        {" "}
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25:218)"
          />
          <path
            d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
            stroke="url(#paint1_linear_25:218)"
          />
          <path
            d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
            stroke="url(#paint2_linear_25:218)"
          />
          <path
            d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
            stroke="url(#paint3_linear_25:218)"
          />
          <circle
            opacity="0.8"
            cx="214.505"
            cy="60.5054"
            r="49.7205"
            transform="rotate(-13.421 214.505 60.5054)"
            stroke="url(#paint4_linear_25:218)"
          />
          <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_25:218"
              x1="156.389"
              y1="69.2405"
              x2="156.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_25:218"
              x1="125.389"
              y1="69.2405"
              x2="125.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_25:218"
              x1="93.8507"
              y1="67.2674"
              x2="89.9278"
              y2="210.214"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:218"
              x1="214.505"
              y1="10.2849"
              x2="212.684"
              y2="99.5816"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint5_radial_25:218"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(220 63) rotate(90) scale(43)">
              <stop offset="0.145833" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.08" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
}
