/** @format */

import { Metadata } from "next";
import SigninPage from "@/components/Signin/form";

export const metadata: Metadata = {
  title: "Connexion - Portefeuille Central",
  description:
    "Connectez-vous à votre portefeuille centralisé et gérez vos paiements en toute sécurité."
  // other metadata
};

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <SigninPage />
    </main>
  );
};

export default Page;
