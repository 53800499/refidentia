/** @format */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Consultez la politique de confidentialité de Watountotche pour comprendre comment nous protégeons vos données personnelles.",
  alternates: {
    canonical: "/politique-de-confidentialite",
  },
};

const SECTIONS = [
  { id: "collecte", title: "Collecte des données" },
  { id: "utilisation", title: "Utilisation des données" },
  { id: "partage", title: "Partage des données" },
  { id: "cookies", title: "Cookies" },
  { id: "securite", title: "Sécurité" },
  { id: "droits", title: "Vos droits" },
  { id: "contact", title: "Contact" },
];

export default function PolitiqueDeConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="mb-12 p-8 bg-gray-50 rounded-3xl border border-gray-100">
        <p className="m-0 text-sm text-gray-400">
          Dernière mise à jour : <strong className="text-gray-900">29 mars 2026</strong>
        </p>
        <p className="mt-4 mb-0 text-lg leading-relaxed">
          La présente Politique de Confidentialité décrit comment <strong className="text-primary italic">RIVAEL SYSTEM</strong>, société basée à Cotonou (Bénin),
          collecte, utilise et protège vos données personnelles lors de l&apos;utilisation de l&apos;application et du site web <strong>Watountotche</strong>.
        </p>
      </div>

      <section className="mb-5">
        <h2 id="collecte">
          <span className="text-primary italic mr-4">1.</span>
          Collecte des données
        </h2>
        <p>Nous collectons les informations suivantes :</p>
        <ul>
          <li><strong>Données d&apos;inscription</strong> : prénom, nom, adresse e-mail</li>
          <li><strong>Données d&apos;utilisation</strong> : pages consultées, interactions avec l&apos;application, durée des sessions</li>
          <li><strong>Données techniques</strong> : adresse IP, type de navigateur, système d&apos;exploitation, identifiant de l&apos;appareil</li>
          <li><strong>Données de localisation</strong> : position géographique approximative (uniquement avec votre consentement)</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 id="utilisation">
          <span className="text-primary italic mr-4">2.</span>
          Utilisation des données
        </h2>
        <p>Vos données personnelles sont utilisées pour :</p>
        <ul>
          <li>Fournir et améliorer nos services</li>
          <li>Personnaliser votre expérience de découverte de l&apos;Afrique</li>
          <li>Vous envoyer des notifications concernant la bêta et les mises à jour</li>
          <li>Analyser les tendances d&apos;utilisation pour optimiser l&apos;application</li>
          <li>Assurer la sécurité et prévenir les fraudes</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 id="partage">
          <span className="text-primary italic mr-4">3.</span>
          Partage des données
        </h2>
        <p>
          Nous ne vendons jamais vos données personnelles. Nous pouvons les partager avec :
        </p>
        <ul>
          <li><strong>Prestataires techniques</strong> : hébergement (Firebase/Google Cloud), analyse (anonymisée)</li>
          <li><strong>Obligations légales</strong> : si la loi l&apos;exige ou pour protéger nos droits</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 id="cookies">
          <span className="text-primary italic mr-4">4.</span>
          Cookies
        </h2>
        <p>
          Notre site utilise des cookies pour améliorer votre expérience de navigation.
          Ces cookies sont essentiels au fonctionnement du site et ne collectent aucune donnée personnelle à des fins publicitaires.
        </p>
        <ul>
          <li><strong>Cookies essentiels</strong> : nécessaires au bon fonctionnement du site</li>
          <li><strong>Cookies analytiques</strong> : nous aident à comprendre comment le site est utilisé (données anonymisées)</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 id="securite">
          <span className="text-primary italic mr-4">5.</span>
          Sécurité
        </h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données
          contre tout accès non autorisé, toute modification, divulgation ou destruction. Cela inclut le chiffrement des données
          en transit et au repos, ainsi que des audits de sécurité réguliers.
        </p>
      </section>

      <section className="mb-5">
        <h2 id="droits">
          <span className="text-primary italic mr-4">6.</span>
          Vos droits
        </h2>
        <p>Conformément à la réglementation applicable, vous disposez des droits suivants :</p>
        <ul>
          <li><strong>Droit d&apos;accès</strong> : obtenir une copie de vos données personnelles</li>
          <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
          <li><strong>Droit de suppression</strong> : demander la suppression de vos données</li>
          <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
          <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à l&apos;adresse : <a href="mailto:contact@watountotche.bj">contact@watountotche.bj</a>
        </p>
      </section>

      <section className="mb-5">
        <h2 id="contact">
          <span className="text-primary italic mr-4">7.</span>
          Contact
        </h2>
        <p>
          Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter :
        </p>
        <ul>
          <li><strong>E-mail</strong> : <a href="mailto:contact@watountotche.bj">contact@watountotche.bj</a></li>
          <li><strong>Téléphone</strong> : +229 21 00 00 00</li>
          <li><strong>Adresse</strong> : Cotonou, Bénin</li>
        </ul>
      </section>
    </div>
  );
}
