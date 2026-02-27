/** @format */

"use client";

import Button from "@/components/ui/button";
import ButtonArrow from "@/components/ui/buttonArrow";
import { motion } from "framer-motion";

const PricingBox = ({
  price,
  duration,
  packageName,
  subtitle,
  children,
  popular = false
}: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
  popular?: boolean;
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative w-full">
      <div
        className={`
          relative overflow-hidden rounded-3xl p-10
          bg-white/80 backdrop-blur-xl
          border border-gray-100
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          hover:shadow-[0_30px_80px_rgba(0,0,0,0.1)]
          transition duration-500
        `}>
        {/* Popular Badge */}
        {popular && (
          <div className="absolute top-6 right-6 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            ⭐ Populaire
          </div>
        )}

        {/* Package Name */}
        <h4 className="text-lg font-semibold text-gray-500 uppercase tracking-wider mb-3">
          {packageName}
        </h4>

        {/* Price */}
        <div className="flex items-end gap-2 mb-4">
          <span className="text-5xl font-extrabold text-gray-900">{price}</span>
          <span className="text-lg font-medium text-gray-500">
            FCFA / {duration}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8 leading-relaxed">{subtitle}</p>

        {/* CTA */}
        <div className="mb-8">
          <Button className="h-14 w-full justify-between rounded-full px-6 text-base font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300">
            <span>Commencer</span>
            <ButtonArrow />
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 pt-8">{children}</div>

        {/* Decorative Gradient Glow */}
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/10 blur-3xl rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default PricingBox;
