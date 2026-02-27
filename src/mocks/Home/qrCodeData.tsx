import { ShieldCheck, Zap, Smartphone } from "lucide-react";
import { QrCard } from "@/types/QrCardType";

export const qrCodeData: QrCard[] = [
  {
    id: "1",
    icon: <Zap size={22} />,
    title: "Transaction Instantanée",
    desc: "Encaissez vos paiements en quelques secondes. Les clients scannent, payent, c'est tout. Pas de terminal, pas d'attente."
  },
  {
    id: "2",
    icon: <ShieldCheck size={22} />,
    title: "Sécurité Maximale",
    desc: "Technologie chiffrée, protection avancée contre la fraude et conformité aux normes de sécurité internationales."
  },
  {
    id: "3",
    icon: <Smartphone size={22} />,
    title: "100% Mobile & Accessible",
    desc: "Compatible avec tous les smartphones. Parfait pour marchés, petits commerces, franchises et activités mobiles. Zéro infrastructure."
  }/* ,
  {
    icon: <Zap size={22} />,
    title: "Pas de Contrainte de Monnaie",
    desc: "Les clients paient que juste le montant demandé. Plus de problème de change, plus d'erreur. Satisfaction garantie."
  } */
];