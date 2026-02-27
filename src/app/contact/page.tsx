import Breadcrumb from "@/components/common/Breadcrumb";
import ContactPage from "@/components/Contact";
import { CONTACT } from "@/constants/wording";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Portefeuille Central",
  description:
    "Contactez notre équipe pour toute question ou partenariat. Une page dédiée, magnifique et réactive.",
};

const Contact = () => {
  return (
    <>
      <Breadcrumb
        pageName={CONTACT.SECTION?.KICKER || "Nous contacter"}
        description={CONTACT.SECTION?.DESCRIPTION || CONTACT.FORM.SUBTITLE}
      />
      <ContactPage />
    </>
  );
};

export default Contact;
