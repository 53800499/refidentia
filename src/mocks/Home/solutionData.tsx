/** @format */

import { Solution } from "@/types/SolutionType";
import { ShieldCheck, QrCode, BarChart3 } from "lucide-react";

export const solutions: Solution[] = [
  {
    icon: <QrCode size={22} />,
    title: "Paiements QR Instantanés",
    description:
      "Encaissez vos clients immédiatement par QR code sans terminal électronique. Pas de problème de monnaie, paiement sécurisé et traçable."
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Facturation EMECEF",
    description:
      "Automatisez votre conformité légale et générez des factures normalisées en un clic. Zéro souci administratif."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Suivi Temps Réel & Traçabilité",
    description:
      "Visualisez vos ventes, analysez vos données et prenez de meilleures décisions. Historique complet et fiable."
  } /* ,
  {
    icon: <ShieldCheck size={22} />,
    title: "Agrégation Centralisée",
    description:
      "Reliez tous vos portefeuilles (MTN, Moov, Visa, Mastercard) en un seul endroit. Gestion simplifiée et sécurisée."
  },
  {
    icon: <QrCode size={22} />,
    title: "Carte QR Physique Personnalisée",
    description:
      "Recevez une carte QR professionnelle pour votre commerce. Idéale pour marchés, petits commerces et activités mobiles."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Accès Facilité au Financement",
    description:
      "Construisez un historique financier crédible. Données exploitables pour obtenir des prêts bancaires."
  } */
];
