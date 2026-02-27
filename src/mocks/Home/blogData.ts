/** @format */

import {
  Author1,
  Author2,
  BlogImg1,
  BlogImg2,
  BlogImg3,
  BlogImg4,
  BlogImg5,
  BlogImg6
} from "@/assets";
import { BlogType } from "@/types/BlogType";

export const blogData: BlogType[] = [
  {
    _id: "blog-1",
    title: "Pourquoi digitaliser les paiements de votre commerce en 2026 ?",
    slug: { current: "digitaliser-paiements-commerce-2026" },
    featureImage: BlogImg1,
    shortDescription:
      "Découvrez comment les paiements numériques améliorent la sécurité, la traçabilité et la croissance des commerçants.",
    content: [],
    author: {
      name: "Équipe Produit",
      photo: Author1,
      title: "Expert Paiements Digitaux"
    },
    date: "2026-01-10"
  },
  {
    _id: "blog-2",
    title: "Paiement QR : la solution simple sans terminal électronique",
    slug: { current: "paiement-qr-sans-terminal" },
    featureImage: BlogImg2,
    shortDescription:
      "Le QR code transforme les transactions en les rendant rapides, économiques et accessibles à tous.",
    content: [],
    author: {
      name: "Équipe Tech",
      photo: Author2,
      title: "Spécialiste Solutions Fintech"
    },
    date: "2026-01-15"
  },
  {
    _id: "blog-3",
    title: "Comment centraliser tous vos flux financiers dans un wallet unique",
    slug: { current: "wallet-centralisation-flux-financiers" },
    featureImage: BlogImg3,
    shortDescription:
      "Un portefeuille digital unique permet un meilleur contrôle et une vision claire de vos transactions.",
    content: [],
    author: {
      name: "Équipe Finance",
      photo: Author1,
      title: "Consultant Gestion Financière"
    },
    date: "2026-01-18"
  },
  {
    _id: "blog-4",
    title: "Facturation conforme EMECEF : ce que chaque commerçant doit savoir",
    slug: { current: "facturation-conforme-emecef-guide" },
    featureImage: BlogImg4,
    shortDescription:
      "Comprenez les obligations légales et comment automatiser votre conformité facilement.",
    content: [],
    author: {
      name: "Service Conformité",
      photo: Author2,
      title: "Expert Réglementation"
    },
    date: "2026-01-22"
  },
  {
    _id: "blog-5",
    title: "Pourquoi la traçabilité des ventes facilite l’accès au crédit",
    slug: { current: "tracabilite-ventes-acces-credit" },
    featureImage: BlogImg5,
    shortDescription:
      "Des données financières fiables renforcent votre crédibilité auprès des institutions financières.",
    content: [],
    author: {
      name: "Équipe Partenariats",
      photo: Author2,
      title: "Responsable Inclusion Financière"
    },
    date: "2026-01-25"
  },
  {
    _id: "blog-6",
    title: "Sécuriser votre commerce face aux risques liés au cash",
    slug: { current: "securiser-commerce-risques-cash" },
    featureImage: BlogImg6,
    shortDescription:
      "Réduisez les risques de vol et de perte grâce aux paiements numériques sécurisés.",
    content: [],
    author: {
      name: "Équipe Sécurité",
      photo: Author1,
      title: "Expert Sécurité Financière"
    },
    date: "2026-01-28"
  }
];
