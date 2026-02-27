/** @format */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/common/sectionTitle";
import { BlogImg2 } from "@/assets";
import Button from "@/components/ui/button";
import ButtonArrow from "@/components/ui/buttonArrow";
import { qrCodeData } from "@/mocks/Home/qrCodeData";
import { QrCard } from "@/types/QrCardType";
import { QR_CARD } from "@/constants/wording";

interface QRCardSectionProps {
  items?: QrCard[];
}

const QRCardSection = ({ items = qrCodeData }: QRCardSectionProps) => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-white via-blue-50/40 to-white">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="container relative z-10">
        <SectionTitle
          className="flex flex-col items-center text-center"
          titleClassName="text-gray-900"
          descriptionClass="text-gray-600 max-w-2xl"
          subTitleClass="text-blue-600"
          subTitle={QR_CARD.SUBTITLE}
          description={QR_CARD.DESCRIPTION}>
          {QR_CARD.MAIN_TITLE}
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-20 items-center pt-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-10">
            {items.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                className="group flex gap-6 p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative flex justify-center">
            {/* Animated Pulse Ring */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute w-[360px] h-[360px] bg-blue-600/20 rounded-full blur-3xl"
            />

            {/* QR CARD */}
            <motion.div
              whileHover={{ rotateY: 12, rotateX: -6 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="relative bg-white/80 backdrop-blur-2xl rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-10 w-[340px] text-center border border-white/40"
              style={{ transformStyle: "preserve-3d" }}>
              {/* Floating Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 text-white text-xs rounded-full shadow-md">
                {QR_CARD.BADGE}
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-6">
                {QR_CARD.CARD_TITLE}
              </h4>

              <div className="relative">
                <Image
                  src={BlogImg2}
                  alt="QR Code"
                  className="mx-auto rounded-2xl"
                  width={400}
                  height={400}
                  unoptimized
                />
              </div>

              <p className="text-sm text-gray-500 mt-6">
                {QR_CARD.CARD_DESCRIPTION}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-20">
          <Button
            asChild
            className="h-14 rounded-full px-8 text-base font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
            Générer mon QR
            <ButtonArrow />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QRCardSection;
