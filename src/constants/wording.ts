/** @format */

import { User1, User2, User3 } from "@/assets";
import { Plan } from "@/types/pricing";

// Hero Section
export const HERO = {
  TAG: "Portefeuille Central",
  TITLE:
    "Portefeuille Central qui Agrège, Connecte et Sécurise Vos Portefeuilles",
  DESCRIPTION:
    "Gérez tous vos portefeuilles au même endroit. Une solution centralisée qui agrège, connecte et sécurise vos paiements pour simplifier votre gestion financière et accélérer votre croissance commerciale.",
  CTA_PRIMARY: "Commencer Gratuitement",
  CTA_SECONDARY: "Découvrir les Fonctionnalités"
};

// Features Section (used in Features component)
export const FEATURES = {
  MAIN_TITLE: "Une plateforme complète et intégrée",
  SUBTITLE: "Fonctionnalités clés",
  DESCRIPTION:
    "Découvrez comment notre portefeuille central centralise vos paiements, élimine les contraintes de monnaie, améliore votre sécurité et vous offre une visibilité totale sur votre activité."
};

// Key Features Section
export const KEY_FEATURES = {
  TITLE: "Fonctionnalités Clés",
  SUBTITLE:
    "Tout ce dont vous avez besoin pour transformer votre gestion financière",

  FEATURES: [
    {
      TITLE: "Portefeuille Numérique Dédié",
      DESCRIPTION:
        "Création d'un portefeuille digital pour chaque commerçant. Centralisez vos encaissements et paiements au sein d'un espace sécurisé.",
      ICON: "wallet"
    },
    {
      TITLE: "Paiements sans Contrainte de Monnaie",
      DESCRIPTION:
        "Supprimez les problèmes de change et de monnaie après chaque achat. Paiements instantanés via QR code depuis l'application client.",
      ICON: "zap"
    },
    {
      TITLE: "Sécurité Maximale",
      DESCRIPTION:
        "Plus besoin de transporter d'argent liquide pour vous ou vos clients. Réduction drastique des risques de braquage, pertes d'espèces et manipulations frauduleuses internes.",
      ICON: "shield"
    },
    {
      TITLE: "Facturation Normalisée",
      DESCRIPTION:
        "Génération et envoi automatiques de factures. Émission directe de factures conformes à la plateforme EMECEF pour une totale transparence.",
      ICON: "file-text"
    },
    {
      TITLE: "Traçabilité et Pilotage Financier",
      DESCRIPTION:
        "Suivi temps réel de toutes vos ventes avec historique fiable et structuré des transactions. Meilleure visibilité sur votre performance commerciale.",
      ICON: "activity"
    },
    {
      TITLE: "Accès Facilité au Financement",
      DESCRIPTION:
        "Constituez un historique financier crédible. Données exploitables pour simplifier l'obtention de prêts bancaires et améliorer vos conditions.",
      ICON: "trending-up"
    }
  ]
};

// QR Code Card Feature
export const QR_CARD_FEATURE = {
  TITLE: "Carte QR Physique Personnalisée",
  SUBTITLE: "Solution d'Encaissement Simplifié",
  DESCRIPTION:
    "Demandez votre carte physique personnalisée avec QR code. Recevez des paiements instantanément sans terminal électronique, idéale pour tous les types d'activités.",
  BENEFITS: [
    "Parfait pour les petits commerces",
    "Idéal pour les marchés et foires",
    "Adapté au travail freelance",
    "Solution pour activités mobiles"
  ],
  CTA: "Demander Ma Carte QR Physique"
};

// Pricing Section
export const PRICING: {
  MAIN_TITLE: string;
  SUBTITLE: string;
  DESCRIPTION: string;
  MONTHLY_LABEL: string;
  YEARLY_LABEL: string;
  PLANS: Plan[];
} = {
  MAIN_TITLE: "Tarification simple et transparente",
  SUBTITLE: "Portefeuille Central",
  DESCRIPTION:
    "Choisissez le plan qui correspond à votre activité. Aucun coût caché, facturation transparente et support adapté à votre croissance.",
  MONTHLY_LABEL: "Mensuel",
  YEARLY_LABEL: "Annuel",
  PLANS: [
    {
      NAME: "Essentiel",
      PRICE_MONTHLY: "0",
      PRICE_YEARLY: "0",
      DURATION_MONTHLY: "FCFA",
      DURATION_YEARLY: "FCFA",
      SUBTITLE: "Parfait pour démarrer votre transformation digitale.",
      FEATURES: [
        { TEXT: "Portefeuille numérique sécurisé", STATUS: "active" },
        { TEXT: "Paiements par QR code", STATUS: "active" },
        { TEXT: "Jusqu'à 10 transactions/jour", STATUS: "active" },
        { TEXT: "Factures basiques", STATUS: "active" },
        { TEXT: "Support email", STATUS: "inactive" },
        { TEXT: "Analytics avancées", STATUS: "inactive" }
      ]
    },
    {
      NAME: "Professionnel",
      PRICE_MONTHLY: "4 999",
      PRICE_YEARLY: "49 990",
      DURATION_MONTHLY: "FCFA",
      DURATION_YEARLY: "FCFA",
      SUBTITLE: "Pour les commerçants en croissance avec volume élevé.",
      FEATURES: [
        { TEXT: "Portefeuille numérique sécurisé", STATUS: "active" },
        { TEXT: "Paiements illimités par QR code", STATUS: "active" },
        { TEXT: "Factures normalisées EMECEF", STATUS: "active" },
        { TEXT: "Traçabilité complète", STATUS: "active" },
        { TEXT: "Support prioritaire 24/7", STATUS: "active" },
        { TEXT: "Analytics avancées & Rapports", STATUS: "inactive" }
      ]
    },
    {
      NAME: "Enterprise",
      PRICE_MONTHLY: "Sur",
      PRICE_YEARLY: "Mesure",
      DURATION_MONTHLY: "",
      DURATION_YEARLY: "",
      SUBTITLE:
        "Solution personnalisée pour grandes entreprises et e-commerçants.",
      FEATURES: [
        { TEXT: "Portefeuille multi-devises", STATUS: "active" },
        { TEXT: "Paiements illimités", STATUS: "active" },
        { TEXT: "Facturation EMECEF + API intégration", STATUS: "active" },
        { TEXT: "Accès au financement facilité", STATUS: "active" },
        { TEXT: "Support dédié & Account Manager", STATUS: "active" },
        { TEXT: "Carte QR physique personnalisée", STATUS: "active" }
      ]
    }
  ]
};

// Economic Model Section
export const ECONOMIC_MODEL = {
  TITLE: "Modèle Économique Transparent",
  SUBTITLE: "Des tarifs adaptés à votre volume et ambitions",

  PLANS: [
    {
      NAME: "Commission Standard",
      DESCRIPTION:
        "Commission compétitive appliquée sur chaque transaction. Scalable selon votre croissance.",
      PRICE: "Flexible",
      ICON: "zap"
    },
    {
      NAME: "Abonnement Premium",
      DESCRIPTION:
        "Destiné aux grands commerçants avec taux réduits, support prioritaire et fonctionnalités avancées.",
      PRICE: "Sur Mesure",
      ICON: "star"
    }
  ]
};

// Target Audience Section
export const TARGET_AUDIENCE = {
  TITLE: "Une Solution Pour Tous",
  SUBTITLE: "Adaptée à tous les types d'activités",

  TARGETS: [
    {
      TITLE: "Commerçants Physiques",
      DESCRIPTION:
        "Boutiques, restaurants, marchés, petits commerces et points de vente locaux",
      ICON: "shopping-bag"
    },
    {
      TITLE: "E-Commerçants",
      DESCRIPTION:
        "Vendeurs en ligne, boutiques digitales et plateformes de vente",
      ICON: "shopping-cart"
    },
    {
      TITLE: "Freelancers & Indépendants",
      DESCRIPTION:
        "Consultants, prestataires, freelancers et travailleurs indépendants",
      ICON: "briefcase"
    }
  ]
};

// Benefits Section
export const BENEFITS = {
  TITLE: "Avantages Concrets",
  SUBTITLE: "Ce qui change vraiment pour votre activité",

  ITEMS: [
    {
      TITLE: "Sécurité Accrue",
      DESCRIPTION:
        "Plus de risques de braquage, pertes d'espèces ou manipulations internes. Vous et vos clients êtes protégés."
    },
    {
      TITLE: "Traçabilité Totale",
      DESCRIPTION:
        "Suivi en temps réel de tous les paiements avec historique fiable et structuré pour parfaite transparence."
    },
    {
      TITLE: "Gestion Simplifiée",
      DESCRIPTION:
        "Pilotage centralisé de vos encaissements, moins de contraintes administratives, plus de temps pour votre cœur de métier."
    },
    {
      TITLE: "Conformité & Légalité",
      DESCRIPTION:
        "Factures normalisées EMECEF, conformité automatique aux obligations légales et fiscales."
    }
  ]
};

// Header Navigation
export const HEADER = {
  LOGO: "Portefeuille Central",
  MENU_ITEMS: [
    {
      LABEL: "Accueil",
      HREF: "/"
    },/* 
    {
      LABEL: "Fonctionnalités",
      HREF: "/fonctionnalite"
    }, */
    {
      LABEL: "Tarification",
      HREF: "/tarification"
    },
    {
      LABEL: "Solutions",
      HREF: "/solutions"
    },
    {
      LABEL: "Contact",
      HREF: "/contact"
    }
  ],
  CTA_LOGIN: "Se Connecter",
  CTA_SIGNUP: "Créer un Portefeuille"
};

// Footer
export const FOOTER = {
  DESCRIPTION:
    "La solution centrale qui agrège, connecte et sécurise tous vos portefeuilles et paiements.",
  LINKS: {
    PRODUCT: [
      { LABEL: "Fonctionnalités", HREF: "#" },
      { LABEL: "Tarifs", HREF: "#" },
      { LABEL: "Solution", HREF: "#" }
    ],
    COMPANY: [
      { LABEL: "Contact", HREF: "#contact" },
      { LABEL: "À Propos", HREF: "#about" }
    ],
    LEGAL: [
      { LABEL: "Mentions Légales", HREF: "#legal" },
      { LABEL: "CGU", HREF: "#terms" },
      { LABEL: "Politique de Confidentialité", HREF: "#privacy" }
    ]
  },
  COPYRIGHT: "© 2026 Rivael system. Tous droits réservés."
};

// CTA Sections
export const CTA = {
  MAIN_BANNER: {
    TITLE: "Prêt à Centraliser Votre Gestion Financière ?",
    DESCRIPTION:
      "Rejoignez des milliers de commerçants qui ont simplifié leurs paiements et amélioré leur sécurité.",
    BUTTON: "Débuter Maintenant"
  },
  SECONDARY_BANNER: {
    TITLE: "Des Questions sur Notre Plateforme ?",
    DESCRIPTION:
      "Notre équipe d'experts est disponible pour vous guider et répondre à tous vos besoins.",
    BUTTON: "Contactez-nous"
  }
};

// Security Section
export const SECURITY = {
  TITLE: "Sécurité Maximale",
  DESCRIPTION:
    "Votre argent et vos données sont protégés avec les meilleures normes de sécurité.",
  FEATURES: [
    "Chiffrement de bout en bout",
    "Conformité aux normes internationales",
    "Authentification sécurisée",
    "Protection contre les fraudes",
    "Assurance des transactions",
    "Support 24/7"
  ]
};

// How It Works
export const HOW_IT_WORKS = {
  TITLE: "Comment Ça Marche",
  SUBTITLE: "Trois étapes simples pour démarrer",

  STEPS: [
    {
      NUMBER: "1",
      TITLE: "Créez Votre Compte",
      DESCRIPTION:
        "Inscription rapide et gratuite. Accédez à votre portefeuille central en quelques minutes."
    },
    {
      NUMBER: "2",
      TITLE: "Connectez Vos Portefeuilles",
      DESCRIPTION:
        "Agréger vos différents portefeuilles et méthodes de paiement en un seul endroit securisé."
    },
    {
      NUMBER: "3",
      TITLE: "Commencez à Encaisser",
      DESCRIPTION:
        "Recevez vos paiements instantanément par QR code ou terminaux connectés. Gestion centralisée garantie."
    }
  ]
};

// Blogs Section
export const BLOGS = {
  SUBTITLE: "Actualités & Conseils",
  TITLE: "L'Hub des commerçants connectés",
  DESCRIPTION:
    "Découvrez des articles, guides et astuces pour optimiser la gestion de votre portefeuille, sécuriser vos transactions et développer votre activité commerciale.",
  VIEW_MORE: "Voir plus d'articles"
};

// QR Card Feature
export const QR_CARD = {
  SUBTITLE: "Encaissement Simplifié",
  MAIN_TITLE: "Paiements instantanés par QR code",
  DESCRIPTION:
    "Solution moderne et sécurisée pour encaisser vos clients en quelques secondes sans terminal électronique.",
  CARD_TITLE: "Scannez pour Payer",
  CARD_DESCRIPTION: "Paiement intégré via portefeuille numérique centralisé",
  BADGE: "Instantané & Sécurisé"
};

// Solution Section
export const SOLUTION = {
  SUBTITLE: "La Solution Complète",
  MAIN_TITLE: "Votre portefeuille central pour tous vos paiements",
  DESCRIPTION:
    "Une infrastructure centralisée qui agrège vos portefeuilles, connecte vos paiements et sécurise vos transactions pour vous laisser vous concentrer sur votre croissance.",
  CTA_BUTTON: "Explorer la Plateforme"
};

// Challenge Section
export const CHALLENGES = {
  SUBTITLE: "Les Vrais Enjeux",
  MAIN_TITLE: "Les obstacles qui freinent votre croissance",
  DESCRIPTION:
    "Les commerçants font face à des contraintes quotidiennes : gestion compliquée de monnaies différentes, risques de sécurité élevés et manque de visibilité financière. Nous résolvons tout cela."
};

// Counter Section
export const COUNTER = {
  ITEMS: [
    {
      VALUE: 4.86,
      SUFFIX: "",
      DESCRIPTION:
        "Note moyenne sur Google basée sur des milliers d'avis clients."
    },
    {
      VALUE: 364,
      SUFFIX: "",
      DESCRIPTION: "Témoignages clients reçus démontrant la confiance accordée."
    },
    {
      VALUE: 45,
      SUFFIX: "M+",
      DESCRIPTION:
        "Revenus générés grâce aux nouveaux projets et stratégies marketing."
    }
  ]
};

// Testimonials
export const TESTIMONIALS = {
  TITLE: "Ce que disent nos utilisateurs",
  SUBTITLE:
    "Découvrez comment notre portefeuille central transforme les activités",

  ITEMS: [
    {
      QUOTE:
        "Avant, je gérais plusieurs portefeuilles et comptais la monnaie à chaque transaction. Maintenant, tout est centralisé et sécurisé. Mon chiffre d'affaires a augmenté de 30%.",
      AUTHOR: "Aïssatou Niang",
      POSITION: "Commerçante, Dakar",
      AVATAR: User1
    },
    {
      QUOTE:
        "En tant que e-commerçante, c'est parfait pour gérer mes paiements en ligne et mes encaissements par QR code. Reconnaissance Client améliorée, fraude éliminée.",
      AUTHOR: "Fatou Sarr",
      POSITION: "E-Commerçante",
      AVATAR: User2
    },
    {
      QUOTE:
        "Freelancer, j'ai besoin de simplicité et de factures professionnelles. Ce portefeuille central me fait gagner des heures administratives chaque mois.",
      AUTHOR: "Moussa Diallo",
      POSITION: "Consultant Freelance",
      AVATAR: User3
    }
  ]
};

// FAQ
export const FAQ = {
  TITLE: "Questions Fréquemment Posées",

  ITEMS: [
    {
      QUESTION: "Combien de temps pour activer mon portefeuille ?",
      ANSWER:
        "Votre portefeuille central est activé instantanément après inscription. Commencez à recevoir des paiements immédiatement."
    },
    {
      QUESTION: "Quel est le modèle tarifaire ?",
      ANSWER:
        "Commission compétitive sur chaque transaction, scalable selon votre volume. Abonnement premium disponible pour grands commerçants avec taux réduits."
    },
    {
      QUESTION: "Comment est sécurisée ma plateforme ?",
      ANSWER:
        "Chiffrement de bout en bout, conformité aux normes internationales, authentification multi-niveaux et protection anti-fraude intégrée."
    },
    {
      QUESTION: "Comment fonctionnent les paiements par QR code ?",
      ANSWER:
        "Générez votre QR code unique, partagez-le avec vos clients qui scannent pour payer instantanément via leur portefeuille numérique."
    },
    {
      QUESTION: "Puis-je exporter mes données ?",
      ANSWER:
        "Oui, accès complet à votre historique, factures et données transactionnelles. Export possible à tout moment pour vos records."
    },
    {
      QUESTION: "Quand recevrai-je mes fonds ?",
      ANSWER:
        "Les paiements sont généralement crédités dans 24-48 heures ouvrables depuis votre portefeuille central."
    }
  ]
};

// Contact Page
export const CONTACT = {
  TITLE: "Nous Sommes Là pour Vous Aider",
  DESCRIPTION:
    "Une question sur votre portefeuille central ? Notre équipe support est disponible pour vous accompagner.",
  SECTION: {
    KICKER: "Contact",
    SUBKICKER: "Coordonnées & Localisation",
    TITLE: "Retrouvez-nous et écrivez‑nous",
    DESCRIPTION:
      "Trouvez notre bureau, consultez nos horaires et contactez directement notre équipe via email ou téléphone."
  },
  FORM: {
    TITLE: "Ouvrir un Ticket Support",
    SUBTITLE: "Notre équipe vous répondra rapidement par email.",
    NAME_LABEL: "Votre Nom",
    NAME_PLACEHOLDER: "Entrez votre nom complet",
    EMAIL_LABEL: "Votre Email",
    EMAIL_PLACEHOLDER: "Entrez votre email",
    EMAIL_HELP: "Nous répondrons sous 24 heures ouvrées.",
    MESSAGE_LABEL: "Votre Message",
    MESSAGE_PLACEHOLDER: "Décrivez votre question ou problème",
    SUBMIT_BUTTON: "Envoyer le Ticket"
  },
  DETAILS_TITLE: "Nos coordonnées",
  DETAILS: {
    ADDRESS: "12 Avenue du Portefeuille, Abomey-Calavi, Bénin",
    PHONE: "+229 20 00 00 00",
    EMAIL: "support@portefeuillecentral.ci",
    EMAIL_LABEL: "Support général",
    TAGLINE: "Visitez-nous ou contactez notre équipe commerciale et support.",
    HOURS: [
      "Lundi - Vendredi: 08:30 - 18:00",
      "Samedi: 09:00 - 13:00",
      "Dimanche: Fermé"
    ],
    HOURS_TEXT: "Lun–Ven 08:30–18:00",
    MAPS_URL: "",
    MAP_THUMB: "/images/solution/bg3.jpg",
    SOCIAL: [
      { NAME: "Twitter", HREF: "https://twitter.com" },
      { NAME: "Facebook", HREF: "https://facebook.com" },
      { NAME: "LinkedIn", HREF: "https://linkedin.com" }
    ]
  },
  FAQ_CTA: {
    TITLE: "Besoin de réponses rapides ?",
    DESCRIPTION:
      "Consultez nos guides et articles pour résoudre vos questions.",
    BUTTON: "Voir la FAQ"
  }
};

// Sign In Page
export const SIGNIN = {
  TITLE: "Connectez-vous à Votre Portefeuille",
  SUBTITLE:
    "Accédez à votre portefeuille centralisé et gérez vos paiements en toute sécurité.",
  GOOGLE_SIGNIN: "Se connecter avec Google",
  GITHUB_SIGNIN: "Se connecter avec GitHub",
  GOOGLE_BUTTON: "Se connecter avec Google",
  OR: "Ou",
  EMAIL_LABEL: "Email",
  EMAIL_PLACEHOLDER: "Entrez votre email",
  PASSWORD_LABEL: "Mot de passe",
  PASSWORD_PLACEHOLDER: "Entrez votre mot de passe",
  REMEMBER: "Se souvenir de moi",
  FORGOT_PASSWORD: "Mot de passe oublié ?",
  SIGNIN_BUTTON: "Se Connecter",
  NO_ACCOUNT: "Vous n'avez pas de compte ?",
  SIGNUP_LINK: "S'inscrire gratuitement",
  SECURITY_NOTE:
    "Votre compte est protégé avec le chiffrement de bout en bout.",
  TERMS: "En vous connectant, vous acceptez nos",
  TERMS_LINK: "Conditions d'utilisation"
};

// Sign Up Page
export const SIGNUP = {
  TITLE: "Créez Votre Portefeuille Central",
  SUBTITLE: "C'est gratuit et vous serez opérationnel en quelques minutes.",
  GOOGLE_BUTTON: "S'inscrire avec Google",
  OR_DIVIDER: "Ou",
  NAME_LABEL: "Nom Complet",
  NAME_PLACEHOLDER: "Entrez votre nom complet",
  EMAIL_LABEL: "Email",
  EMAIL_PLACEHOLDER: "Entrez votre email",
  PHONE_LABEL: "Numéro de Téléphone",
  PHONE_PLACEHOLDER: "Entrez votre numéro",
  PASSWORD_LABEL: "Mot de passe",
  PASSWORD_PLACEHOLDER: "Créez un mot de passe sécurisé",
  CONFIRM_PASSWORD_LABEL: "Confirmer le Mot de passe",
  CONFIRM_PASSWORD_PLACEHOLDER: "Confirmez votre mot de passe",
  TERMS_TEXT: "En créant un compte, vous acceptez nos",
  TERMS_LINK: "Conditions d'utilisation",
  AND_TEXT: "et notre",
  PRIVACY_LINK: "Politique de confidentialité",
  SIGNUP_BUTTON: "Créer Mon Portefeuille",
  ALREADY_ACCOUNT: "Vous avez déjà un compte ?",
  SIGNIN_LINK: "Se connecter",
  BENEFITS: [
    "Portefeuille sécurisé gratuit",
    "Paiements QR instantanés",
    "Factures EMECEF conformes",
    "Support 24/7 inclus"
  ]
};

// Error Page
export const ERROR = {
  NOT_FOUND: {
    CODE: "404",
    TITLE: "Page Non Trouvée",
    DESCRIPTION:
      "La page que vous cherchez n'existe pas ou a été déplacée. Nous vous proposons de retourner à l'accueil ou de consulter notre support.",
    BUTTON: "Retour à l'Accueil"
  },
  SERVER_ERROR: {
    CODE: "500",
    TITLE: "Une Erreur est Survenue",
    DESCRIPTION:
      "Nous rencontrons un souci temporaire. Notre équipe technique travaille pour le résoudre. Réessayez dans quelques instants.",
    BUTTON: "Réessayer"
  },
  UNAUTHORIZED: {
    CODE: "401",
    TITLE: "Accès Non Autorisé",
    DESCRIPTION:
      "Vous devez vous connecter à votre portefeuille pour accéder à cette page.",
    BUTTON: "Se Connecter"
  },
  FORBIDDEN: {
    CODE: "403",
    TITLE: "Accès Refusé",
    DESCRIPTION:
      "Vous n'avez pas les permissions nécessaires pour accéder à cette ressource. Contactez notre support si vous croyez qu'il s'agit d'une erreur.",
    BUTTON: "Contacter le Support"
  },
  CONTACT_SUPPORT: "Contacter le Support"
};

// Newsletter Box
export const NEWSLETTER = {
  TITLE: "Restez Informé des Dernières Mises à Jour",
  DESCRIPTION:
    "Inscrivez-vous à notre newsletter pour recevoir les actualités, guides et astuces sur la gestion de votre portefeuille central.",
  NAME_PLACEHOLDER: "Entrez votre nom complet",
  EMAIL_PLACEHOLDER: "Entrez votre adresse email",
  SUBMIT_BUTTON: "S'inscrire",
  PRIVACY_NOTE: "Aucun spam garanti. Nous respectons votre confidentialité."
};
