/** @format */

import {
  Ecobank,
  Emecef,
  Mastercard,
  Moov,
  Mtn,
  Test,
  UBA,
  Visa
} from "@/assets";
interface Slide {
  title: string;
  highlight: string;
  description: string;
  image: any;
}
export const slides = [
  {
    title: "Agrégez tous vos portefeuilles",
    highlight: "dans une plateforme centrale sécurisée",
    description:
      "Connectez MTN Mobile Money, Moov, Visa, Mastercard et gérez tous vos encaissements depuis un seul espace. Fini la dispersion, bonjour la centralisation.",
    image: Test
  },
  {
    title: "Eliminez les contraintes",
    highlight: "de monnaie et de change",
    description:
      "Recevez des paiements instantanés par QR code sans jamais vous préoccuper de la monnaie rendue. Sécurité, rapidité et transparence garanties.",
    image: Test
  },
  {
    title: "Facturez automatiquement",
    highlight: "conformément à la norme EMECEF",
    description:
      "Générez et envoyez des factures normalisées directement depuis votre portefeuille central. Conformité légale assurée.",
    image: Test
  },
  {
    title: "Accédez au financement",
    highlight: "avec un historique financier crédible",
    description:
      "Construisez des données financières fiables et augmentez vos chances d'obtenir des prêts bancaires et des conditions meilleures.",
    image: Test
  }
];

export const partners = [
  { name: "MTN", logo: Mtn },
  { name: "Moov", logo: Moov },
  { name: "Visa", logo: Visa },
  { name: "Mastercard", logo: Mastercard },
  { name: "EMECEF", logo: Emecef },
  { name: "UBA", logo: UBA },
  { name: "Ecobank", logo: Ecobank }
];
