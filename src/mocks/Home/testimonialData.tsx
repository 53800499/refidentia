import { User1, User2, User3, User4, User5, VideoThumb1, VideoThumb2 } from "@/assets";
import { testimonialType } from "@/types/testimonial";


export const testimonialData: testimonialType[] = [
  {
    id: 1,
    user: {
      name: "Aïssatou Niang",
      position: "Commerçante, Dakar",
      image: User1
    },
    isVideoReview: false,
    review:
      "Avant, je gérais plusieurs portefeuilles et comptais la monnaie à chaque transaction. Maintenant, tout est centralisé et sécurisé. Mon chiffre d'affaires a augmenté de 30%."
  },
  {
    id: 2,
    user: {
      name: "Fatou Sarr",
      position: "E-Commerçante",
      image: User2
    },
    isVideoReview: true,
    review:
      "En tant que e-commerçante, c'est parfait pour gérer mes paiements en ligne et mes encaissements par QR code. Reconnaissance Client améliorée, fraude éliminée.",
    videoThumb: VideoThumb1
  },
  {
    id: 3,
    user: {
      name: "Moussa Diallo",
      position: "Consultant Freelance",
      image: User3
    },
    isVideoReview: false,
    review:
      "Freelancer, j'ai besoin de simplicité et de factures professionnelles. Ce portefeuille central me fait gagner des heures administratives chaque mois."
  },
  {
    id: 4,
    user: {
      name: "Ibrahim Traoré",
      position: "Commerçant Formel, Ouagadougou",
      image: User4
    },
    isVideoReview: true,
    review:
      "Les factures automatiques EMECEF m'ont gagné du temps. Et la traçabilité complète ? Parfait pour rassurer mes clients et mes partenaires.",
    videoUrl: "https://www.youtube.com/watch?v=ssVGeSf8oFI",
    videoThumb: VideoThumb2
  },
  {
    id: 5,
    user: {
      name: "Aya Kesteloot",
      position: "Marketeur Digital Indépendante",
      image: User5
    },
    isVideoReview: false,
    review:
      "L'interface est intuitive, le QR code fonctionne partout, et maintenant j'ai un historique financier fiable pour accéder au financement bancaire."
  }
];
