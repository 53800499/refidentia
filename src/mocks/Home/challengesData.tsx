/** @format */

import { FeatureImg1, FeatureImg2, FeatureImg3 } from "@/assets";
import { Briefcase, ShieldCheck, DesktopComputer, Sparkles } from "@/lib/icons";
import { Challenge } from "@/types/challenge";

export const challengesData = [
  {
    id: 1,
    icon: <Briefcase />,
    title: "Transport d'argent liquide - Un risque constant",
    description:
      "Les commerçants et clients prennent des risques quotidiens : vols, pertes, insécurité permanente. Aucune traçabilité, aucune protection.",
    thumbnail: FeatureImg1
  },
  {
    id: 2,
    icon: <DesktopComputer />,
    title: "Problèmes de monnaie et de change",
    description:
      "Gestion complexe des monnaies différentes, erreurs de calcul, clients insatisfaits par le rendu de monnaie. Perte de temps et de confiance.",
    thumbnail: FeatureImg2
  },
  {
    id: 3,
    icon: <Sparkles />,
    title: "Absence de traçabilité et conformité légale",
    description:
      "Sans historique structuré, impossible de suivre les ventes, d'analyser la performance ou de respecter les obligations EMECEF.",
    thumbnail: FeatureImg3
  }/* ,
  {
    id: 4,
    icon: <ShieldCheck />,
    title: "Accès limité au financement bancaire",
    description:
      "Les banques exigent des données fiables. Sans preuve numérique, l'accès au crédit et au financement devient un obstacle majeur.",
    thumbnail: FeatureImg3
  } */
];
  