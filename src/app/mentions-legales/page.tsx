/** @format */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Informations légales concernant l'éditeur et l'hébergeur du site Watountotche.bj.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

const SECTIONS = [
  { id: "editeur", title: "Éditeur du site" },
  { id: "hebergement", title: "Hébergement" },
  { id: "propriete", title: "Propriété intellectuelle" },
  { id: "responsabilite", title: "Responsabilité" },
  { id: "liens", title: "Liens externes" },
  { id: "droit", title: "Droit applicable" },
  { id: "contact", title: "Contact" },
];

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="mb-12 p-8 bg-gray-50 rounded-3xl border border-gray-100">
        <p className="m-0 text-sm text-gray-400">
          Dernière mise à jour : <strong className="text-gray-900">29 mars 2026</strong>
        </p>
      </div>

      <section className="mb-5">
        <h2 id="editeur">
          <span className="text-primary italic mr-4">1.</span>
          Éditeur du site
        </h2>
        <p>
          Le présent site web <a href="https://watountotche.bj">watountotche.bj</a> (ci-après « le Site ») est édité par <strong>RIVAEL SYSTEM</strong>, société basée à Cotonou (Bénin),
          opérant le service Watountotche.
        </p>
        <p>Services proposés :</p>
        <ul>
          <li>Plateforme de découverte culturelle et touristique de l&apos;Afrique</li>
          <li>Expériences immersives mêlant culture, gastronomie et patrimoine</li>
          <li>Cartographie interactive des destinations africaines</li>
          <li>Contenus vidéo et médias sur les traditions et sites remarquables</li>
        </ul>
        <p>
          Contact : <a href="mailto:contact@watountotche.bj">contact@watountotche.bj</a> — Tél : +229 21 00 00 00
        </p>
      </section>

      <section className="mb-5">
        <h2 id="hebergement">
          <span className="text-primary italic mr-4">2.</span>
          Hébergement
        </h2>
        <p>Le site est hébergé par :</p>
        <ul>
          <li><strong>Vercel Inc.</strong></li>
          <li>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
          <li>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
        </ul>
        <p>Les données sont stockées et traitées via :</p>
        <ul>
          <li><strong>Google Firebase</strong> (Google LLC)</li>
          <li>1600 Amphitheatre Parkway, Mountain View, CA 94043, États-Unis</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 id="propriete">
          <span className="text-primary italic mr-4">3.</span>
          Propriété intellectuelle
        </h2>
        <p>
          L&apos;ensemble des contenus présents sur le site Watountotche — textes, images, vidéos, graphismes, logo, icônes,
          sons, logiciels, base de données — sont protégés par les lois en vigueur sur la propriété intellectuelle et
          restent la propriété exclusive de <strong>RIVAEL SYSTEM</strong> ou de leurs auteurs respectifs.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des
          éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation écrite préalable
          de RIVAEL SYSTEM.
        </p>
        <p>
          La marque <strong>Watountotche</strong>, le logo et les éléments graphiques associés sont des marques déposées.
          Toute utilisation non autorisée constitue une contrefaçon passible de poursuites.
        </p>
      </section>

      <section className="mb-5">
        <h2 id="responsabilite">
          <span className="text-primary italic mr-4">4.</span>
          Limitation de responsabilité
        </h2>
        <p>
          RIVAEL SYSTEM s&apos;efforce de fournir des informations aussi précises que possible sur le site. Toutefois,
          elle ne pourra être tenue responsable des omissions, inexactitudes et carences dans la mise à jour,
          qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
        </p>
        <p>
          L&apos;application Watountotche est actuellement en phase de <strong>bêta-test</strong>. À ce titre, certaines
          fonctionnalités peuvent être incomplètes ou sujettes à des modifications. RIVAEL SYSTEM ne saurait être tenue
          responsable de tout dommage résultant de l&apos;utilisation de la version bêta.
        </p>
      </section>

      <section className="mb-5">
        <h2 id="liens">
          <span className="text-primary italic mr-4">5.</span>
          Liens externes
        </h2>
        <p>
          Le site peut contenir des liens hypertextes vers d&apos;autres sites internet. RIVAEL SYSTEM n&apos;exerce aucun contrôle
          sur le contenu de ces sites tiers et décline toute responsabilité quant à leur contenu et aux éventuels
          dommages pouvant résulter de leur consultation.
        </p>
      </section>

      <section className="mb-5">
        <h2 id="droit">
          <span className="text-primary italic mr-4">6.</span>
          Droit applicable
        </h2>
        <p>
          Les présentes mentions légales sont régies par le droit béninois. En cas de litige, et après tentative de
          résolution amiable, les tribunaux de Cotonou seront seuls compétents.
        </p>
      </section>

      <section className="mb-5">
        <h2 id="contact">
          <span className="text-primary italic mr-4">7.</span>
          Contact
        </h2>
        <p>Pour toute question ou réclamation, vous pouvez nous contacter :</p>
        <ul>
          <li><strong>E-mail</strong> : <a href="mailto:contact@watountotche.bj">contact@watountotche.bj</a></li>
          <li><strong>Téléphone</strong> : +229 21 00 00 00</li>
          <li><strong>Adresse</strong> : Cotonou, Bénin</li>
        </ul>
      </section>
    </div>
  );
}
