/** @format */

import { Metadata } from "next";
import SignupPage from "@/components/Signup/container";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Inscription - Portefeuille Central",
  description:
    "Créez votre compte et commencez à utiliser votre portefeuille centralisé en toute sécurité."
};

const Page = () => {
  return (
    <Suspense fallback={<div className="text-center">Chargement...</div>}>
      <SignupPage />
    </Suspense>
  );
};

export default Page;
