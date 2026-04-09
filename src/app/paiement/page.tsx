"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CreditCard,
  Edit2,
  Lock,
  ShieldCheck,
  Smartphone,
  Wallet
} from "lucide-react";

const items = [
  { id: 1, name: "Masque Africain", qty: 1, price: 15000 },
  { id: 2, name: "Bracelet Artisanal", qty: 2, price: 5000 }
];

const customer = {
  name: "Kossi Ade",
  phone: "+228 90 12 34 56",
  email: "kossi.ade@example.com"
};

const paymentMethods = [
  {
    id: "mobile",
    label: "MTN Mobile Money",
    description: "Pay with wallet or USSD",
    icon: Smartphone
  },
  {
    id: "card",
    label: "Carte bancaire",
    description: "Visa, Mastercard, or Apple Pay",
    icon: CreditCard
  },
  {
    id: "wallet",
    label: "Digital Wallet",
    description: "Revolut / Mobile wallet",
    icon: Wallet
  }
];

function formatCurrency(value: number, locale: string, currency: string) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

export default function PaymentPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  const [selectedMethod, setSelectedMethod] = useState("mobile");
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
  const [countdown, setCountdown] = useState(300);
  const [locale, setLocale] = useState("en-US");
  const [currency, setCurrency] = useState("USD");

  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const fees = Math.round(subtotal * 0.02);
  const total = subtotal + fees;

  const selectedPayment = useMemo(
    () => paymentMethods.find((method) => method.id === selectedMethod) ?? paymentMethods[0],
    [selectedMethod]
  );

  useEffect(() => {
    const initial = navigator.language || "en-US";
    setLocale(initial);
    if (initial.startsWith("fr-FR") || initial.startsWith("en-GB")) {
      setCurrency(initial.startsWith("fr-FR") ? "EUR" : "GBP");
    } else if (initial.startsWith("fr-TG") || initial.startsWith("fr-BJ") || initial.startsWith("fr-CM")) {
      setCurrency("XOF");
    } else {
      setCurrency("USD");
    }
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isLoading || status === "success") {
      return;
    }

    const timer = window.setInterval(() => {
      setCountdown((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isLoading, status]);

  const countdownLabel = useMemo(() => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }, [countdown]);

  const onConfirm = () => {
    if (status === "processing") return;
    setStatus("processing");
    window.setTimeout(() => {
      const hasSucceeded = Math.random() > 0.15;
      setStatus(hasSucceeded ? "success" : "error");
    }, 1200);
  };

  const onRetry = () => {
    setStatus("idle");
    setCountdown(300);
  };

  const onSwitchMethod = () => {
    const currentIndex = paymentMethods.findIndex((method) => method.id === selectedMethod);
    const nextIndex = (currentIndex + 1) % paymentMethods.length;
    setSelectedMethod(paymentMethods[nextIndex].id);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-slate-950 via-slate-900 to-transparent opacity-10" />
        <div className="relative px-4 pt-5 pb-6 md:px-6">
          <div className="mx-auto max-w-md">
            <header className="rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_24px_80px_-55px_rgba(15,23,42,0.35)] backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm shadow-slate-200/10">
                    <Lock size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Secure payment</p>
                    <p className="text-xl font-semibold text-slate-950">Confirm your transaction</p>
                  </div>
                </div>
                <div className="flex flex-col items-end text-right">
                  <div className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
                    <ShieldCheck size={14} /> SSL secure
                  </div>
                  <span className="text-xs text-slate-500">Verified merchant</span>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>

      <main className="flex-1 px-4 pb-32 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {isLoading ? (
            <div className="mx-auto max-w-3xl space-y-4 animate-pulse">
              <div className="h-24 rounded-3xl bg-slate-100" />
              <div className="h-16 rounded-3xl bg-slate-100" />
              <div className="h-14 rounded-3xl bg-slate-100" />
            </div>
          ) : status === "success" ? (
            <section className="mx-auto max-w-3xl rounded-3xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-600 text-white shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 size={28} />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-emerald-700">Paiement confirmé</p>
                  <p className="mt-1 text-lg font-semibold text-slate-950">Transaction réussie</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Votre paiement a bien été traité. Merci d’avoir choisi Refidentia.
              </p>
              <div className="mt-5 rounded-3xl bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Référence QR</span>
                  <span className="font-semibold text-slate-900">QR-INV-2026-71</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                  <span>Montant payé</span>
                  <span className="font-semibold text-slate-900">{formatCurrency(total, locale, currency)}</span>
                </div>
              </div>
            </section>
          ) : (
            <div className="grid gap-4 xl:grid-cols-[1.35fr_0.95fr]">
              <div className="space-y-4">
                <section className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-[0_24px_70px_-55px_rgba(15,23,42,0.22)]">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-slate-700">
                        <span className="text-lg font-semibold">A</span>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Merchant</p>
                        <p className="text-lg font-semibold text-slate-950">L’Africa Market</p>
                      </div>
                    </div>
                    <div className="rounded-3xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 ring-1 ring-slate-200">
                      {countdownLabel}
                    </div>
                  </div>
                  <div className="mt-5 rounded-[24px] border border-slate-200/80 bg-slate-50 p-4">
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>Transaction ID</span>
                      <span className="font-semibold text-slate-900">REF-QR-42CH8</span>
                    </div>
                    <div className="mt-3 space-y-3">
                      {items.map((item, index) => (
                        <div key={item.id} className="flex items-center justify-between gap-4 border-b border-slate-200/70 pb-3 last:border-0 last:pb-0">
                          <div>
                            <p className="text-sm font-medium text-slate-900">{item.name}</p>
                            <p className="mt-1 text-xs text-slate-500">Quantité {item.qty}</p>
                          </div>
                          <p className="text-sm font-semibold text-slate-950">{formatCurrency(item.price * item.qty, locale, currency)}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 space-y-3 rounded-3xl bg-white p-4 text-sm text-slate-600 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span>Sous-total</span>
                        <span>{formatCurrency(subtotal, locale, currency)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Frais de service</span>
                        <span>{formatCurrency(fees, locale, currency)}</span>
                      </div>
                      <div className="mt-3 flex items-center justify-between rounded-3xl bg-slate-950 px-4 py-3 text-white shadow-sm">
                        <span className="font-semibold">Total</span>
                        <span className="text-lg font-semibold">{formatCurrency(total, locale, currency)}</span>
                      </div>
                    </div>
                  </div>
                </section>

                {status === "error" && (
                  <section className="rounded-[28px] border border-rose-200 bg-rose-50 p-4 text-slate-900 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-3xl bg-rose-100 text-rose-700">
                        <AlertTriangle size={20} />
                      </span>
                      <div>
                        <p className="font-semibold text-rose-900">Échec du paiement</p>
                        <p className="mt-1 text-sm text-rose-700">
                          La tentative de paiement a échoué. Veuillez réessayer ou changer de méthode.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={onRetry}
                      className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border border-rose-300 bg-white px-4 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-50"
                    >
                      Réessayer
                    </button>
                  </section>
                )}
              </div>

              <div className="space-y-4">
                <section className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setIsDetailsOpen((open) => !open)}
                    className="flex w-full items-center justify-between gap-3 text-left"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Détails du client</p>
                      <p className="mt-1 text-sm text-slate-500">Nom, téléphone, email</p>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${isDetailsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isDetailsOpen && (
                    <div className="mt-4 space-y-3 rounded-3xl bg-slate-50 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium text-slate-900">{customer.name}</p>
                          <p className="text-xs text-slate-500">Nom complet</p>
                        </div>
                        <Edit2 size={18} className="text-slate-500" />
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium text-slate-900">{customer.phone}</p>
                          <p className="text-xs text-slate-500">Téléphone</p>
                        </div>
                        <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Auto</span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium text-slate-900">{customer.email}</p>
                          <p className="text-xs text-slate-500">Adresse email</p>
                        </div>
                        <Edit2 size={18} className="text-slate-500" />
                      </div>
                    </div>
                  )}
                </section>

                <section className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-100 text-slate-800">
                        <selectedPayment.icon size={20} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{selectedPayment.label}</p>
                        <p className="text-sm text-slate-500">{selectedPayment.description}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={onSwitchMethod}
                      className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-slate-800"
                    >
                      Changer
                    </button>
                  </div>
                </section>

                <section className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3 rounded-3xl bg-slate-50 p-4">
                    <ShieldCheck size={18} className="text-slate-700" />
                    <p className="text-sm leading-6 text-slate-600">
                      Votre paiement est sécurisé et chiffré. Aucune donnée n’est stockée sans votre consentement.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-slate-500">
                    <Lock size={14} />
                    <span>Connexion sécurisée — 256-bit TLS</span>
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="fixed inset-x-0 bottom-0 border-t border-slate-200/90 bg-white/95 px-4 py-4 shadow-[0_-10px_30px_-25px_rgba(15,23,42,0.25)] backdrop-blur-xl md:px-6">
        <div className="mx-auto max-w-md">
          <div className="mb-3 flex items-center justify-between gap-3 text-sm text-slate-600">
            <span className="font-medium text-slate-900">Total à régler</span>
            <span className="font-semibold text-slate-950">{formatCurrency(total, locale, currency)}</span>
          </div>
          <button
            type="button"
            disabled={status === "processing" || status === "success"}
            onClick={onConfirm}
            className="flex h-14 w-full items-center justify-center rounded-3xl bg-slate-950 px-5 text-sm font-semibold text-white shadow-xl shadow-slate-950/20 transition duration-200 hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "processing" ? "Traitement…" : status === "success" ? "Paiement confirmé" : "Confirmer & Payer"}
          </button>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Annuler la transaction
          </button>
        </div>
      </footer>
    </div>
  );
}
