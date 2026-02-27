/** @format */
'use client';
import Image from "next/image";
import { CONTACT } from "@/constants/wording";
import { Input } from "@/components/ui";
import Button from "@/components/ui/button";
import { motion } from "framer-motion";
import { MailAltFill, Telephone } from "@/lib/icons";
import SectionTitle from "@/components/common/sectionTitle";


const ContactPage = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 py-10 lg:py-10">
      <div className="container">
        <div className="mb-12 px-4">
          <div className="mt-6 w-full overflow-hidden rounded-3xl shadow-lg">
            <iframe
              title="Localisation"
              src={
                CONTACT.DETAILS?.MAPS_URL ||
                `https://www.google.com/maps?q=${encodeURIComponent(
                  CONTACT.DETAILS?.ADDRESS || "Abomey-Calavi, Bénin"
                )}&output=embed`
              }
              className="h-100 w-full rounded-2xl border-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap items-start">
          <div className="w-full px-4 lg:w-6/12">
            <div className="mb-8 max-w-xl rounded-3xl bg-white/80 p-8 shadow-2xl backdrop-blur-sm">
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {CONTACT.FORM.TITLE || "Contactez-nous"}
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                {CONTACT.FORM.SUBTITLE ||
                  "Parlez-nous de votre projet — nous sommes là pour aider."}
              </p>

              <form className="space-y-4" aria-label="Contact form">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      {CONTACT.FORM.NAME_LABEL || "Nom"}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={CONTACT.FORM.NAME_PLACEHOLDER || "Votre nom"}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      {CONTACT.FORM.EMAIL_LABEL || "Email"}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={
                        CONTACT.FORM.EMAIL_PLACEHOLDER || "votre@exemple.com"
                      }
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    {CONTACT.FORM.MESSAGE_LABEL || "Message"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder={
                      CONTACT.FORM.MESSAGE_PLACEHOLDER || "Votre message..."
                    }
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    type="submit"
                    className="rounded-full px-6 py-3 text-sm font-semibold shadow-md">
                    {CONTACT.FORM.SUBMIT_BUTTON || "Envoyer le message"}
                  </Button>
                  <p className="text-sm text-gray-500">
                    Nous répondons généralement sous 24h.
                  </p>
                </div>
              </form>
            </div>

            <div className="mb-8 max-w-xl rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm border border-gray-100">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-gray-800">
                  {CONTACT.DETAILS_TITLE || "Coordonnées"}
                </h2>
                <p className="mb-6 text-lg text-gray-600">
                  {CONTACT.DETAILS?.TAGLINE || "Contact rapide et support"}
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        <MailAltFill />
                      </span>
                      <div>
                        <a
                          href={`mailto:${CONTACT.DETAILS?.EMAIL || "info@example.com"}`}
                          className="text-sm font-medium text-gray-900 hover:underline">
                          {CONTACT.DETAILS?.EMAIL || "info@example.com"}
                        </a>
                        <p className="text-xs text-gray-500">
                          {CONTACT.DETAILS?.EMAIL_LABEL || "Support général"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        <Telephone />
                      </span>
                      <div>
                        <a
                          href={`tel:${(CONTACT.DETAILS?.PHONE || "").replace(/\s+/g, "")}`}
                          className="text-sm font-medium text-gray-900 hover:underline">
                          {CONTACT.DETAILS?.PHONE || "+229 20 00 00 00"}
                        </a>
                        <p className="text-xs text-gray-500">
                          {CONTACT.DETAILS?.HOURS_TEXT ||
                            CONTACT.DETAILS?.HOURS?.[0] ||
                            "Lun–Ven 08:30–18:00"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Adresse
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {CONTACT.DETAILS?.ADDRESS || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Horaires
                      </p>
                      <ul className="mt-1 text-sm text-gray-600 space-y-1">
                        {(CONTACT.DETAILS?.HOURS || []).map((h, idx) => (
                          <li key={idx}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={
                      CONTACT.DETAILS?.MAPS_URL ||
                      `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.DETAILS?.ADDRESS || "")}`
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700">
                    Voir la carte
                  </a>

                  <a
                    href={`mailto:${CONTACT.DETAILS?.EMAIL || "info@example.com"}`}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Envoyer un message
                  </a>

                  <div className="ml-auto flex items-center gap-2">
                    {(CONTACT.DETAILS?.SOCIAL || []).map((s, i) => (
                      <a
                        key={i}
                        href={s.HREF}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-indigo-600 hover:underline">
                        {s.NAME}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-6/12">
            <div className="relative h-[480px] w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/solution/bg3.jpg"
                alt="Contact hero"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute left-6 bottom-6 right-6 flex flex-col gap-4 rounded-lg bg-white/90 p-6 shadow-lg backdrop-blur-sm sm:left-auto sm:right-12 sm:w-[360px]">
                <h4 className="text-lg font-semibold text-gray-900">
                  Besoin d{"'"}une démo ?
                </h4>
                <p className="text-sm text-gray-600">
                  Planifiez un appel avec notre équipe pour découvrir toutes les
                  fonctionnalités.
                </p>
                <a
                  href="/signup"
                  className="inline-block self-start rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
                  Demander une démo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Déco SVG */}
      <span className="pointer-events-none absolute -left-20 -top-20 z-0 opacity-40">
        <motion.div
          className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
          {" "}
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)">
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)">
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#5B78EF" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </span>
      <span className="pointer-events-none absolute -right-24 -bottom-24 z-0 opacity-30">
        <Image
          src="/images/cta/bg-img.png"
          alt="deco"
          width={420}
          height={420}
        />
      </span>
    </section>
  );
};

export default ContactPage;
