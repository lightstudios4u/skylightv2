"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { Accordion, FAQ, Input, Stat, Textarea, TrustItem } from "./Shared";
import {
  FaBolt,
  FaShieldAlt,
  FaQrcode,
  FaEnvelope,
  FaPlay,
  FaTools,
  FaClipboardList,
  FaRedoAlt,
  FaArrowRight,
} from "react-icons/fa";

type Step = { num: string; title: string; desc: string; img: string };
type Feature = { title: string; desc: string; img: string };

export function LandingSections() {
  const steps: Step[] = useMemo(
    () => [
      {
        num: "01",
        title: "Strap It On",
        desc: `Position the net over the skylight and secure it using the heavy-duty ratchet strap system.`,
        img: "https://images.unsplash.com/photo-1581579185169-7b2571b6f3b0?auto=format&fit=crop&w=900&q=80",
      },
      {
        num: "02",
        title: "Scan the QR Code",
        desc: "Scan the unique QR label to register the install location, date, and responsible crew member.",
        img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=900&q=80",
      },
      {
        num: "03",
        title: "Log and Redeploy",
        desc: "Track inspections during the project, log removal, and redeploy the net at the next job site.",
        img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=900&q=80",
      },
    ],
    []
  );

  const features: Feature[] = useMemo(
    () => [
      {
        title: "Purpose-Built Sizing",
        desc: "Built around the most common commercial skylight footprint so coverage is obvious, consistent, and inspector-friendly.",
        img: "/net.png",
      },
      {
        title: "Fast Strap-On Install",
        desc: "Installs in minutes with heavy-duty ratchet straps. No drilling. No roof penetrations. No drama.",
        img: "/maninstall.png",
      },
      {
        title: "QR Inspection Logs",
        desc: "Each net has a unique QR code for registration and inspection logging—clean documentation without spreadsheets.",
        img: "/qr.png",
      },
    ],
    []
  );

  const faqs: FAQ[] = useMemo(
    () => [
      {
        q: "How long does installation take?",
        a: "A two-person crew can install a net in under 5 minutes. Removal is equally fast—ideal for short-duration work and phased jobs.",
      },
      {
        q: "Do I need special tools?",
        a: "No tools required. The system is designed to strap on quickly without fasteners or roof penetrations.",
      },
      {
        q: "Can I move it from job to job?",
        a: "Yes. Remove it, log it, and redeploy across sites with QR-based records that keep compliance documentation consistent.",
      },
    ],
    []
  );

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-slate-950" />
          <div className="absolute inset-0 opacity-40 [background:radial-gradient(80rem_40rem_at_70%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(50rem_30rem_at_20%_10%,rgba(249,115,22,0.30),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-12 lg:py-8">
          <div className="text-center">
            <div className="mx-auto mb-6 w-32 sm:w-40">
              <img src="/logo.png" alt="Logo" className="w-full" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Skylight Safety Net System
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
              Purpose-Built Skylight Fall-Through Protection
            </p>
            <p className="mt-3 text-sm font-semibold tracking-wide text-orange-500">
              Installs in minutes. Moves job-to-job. Documented with one QR
              scan.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#request"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <FaEnvelope className="mr-2" size={18} />
                Request Information
              </a>

              <a
                href="#working-plan"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                <FaPlay className="mr-2" size={16} />
                How it Works
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-10 max-w-3xl">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-orange-500/20 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl">
              <img
                src="/wideshot.png"
                alt="Worker installing skylight protection"
                className="h-[280px] w-full object-cover sm:h-[320px]"
              />
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
              <TrustItem
                icon={<FaBolt className="text-orange-400" size={20} />}
                title="Fast Install"
                desc="Under ~5 minutes."
              />
              <TrustItem
                icon={<FaShieldAlt className="text-orange-400" size={20} />}
                title="Zero Penetration"
                desc="No drilling. No damage."
              />
              <TrustItem
                icon={<FaQrcode className="text-orange-400" size={20} />}
                title="QR Compliance"
                desc="Log installs + inspections."
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST ITEMS */}

      {/* WORKING PLAN */}
      <section id="working-plan" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-sm font-semibold tracking-wide text-orange-600">
            Simple on site. Clean in audits.
          </p>
          <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Working Plan
          </h2>

          <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-stretch">
            {steps.map((s, idx) => {
              const icons = [FaTools, FaQrcode, FaRedoAlt];
              const Icon = icons[idx];
              return (
                <React.Fragment key={s.num}>
                  <div className="group relative flex-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 shadow-lg shadow-orange-500/25 transition group-hover:bg-orange-500/20 group-hover:shadow-xl group-hover:shadow-orange-500/40">
                          <Icon className="text-orange-500" size={36} />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold">{s.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="hidden items-center justify-center lg:flex lg:px-2">
                      <FaArrowRight className="text-slate-300" size={28} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-wide text-orange-600">
                Built for commercial crews
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Three Things That Matter
              </h2>
            </div>

            <Link
              href="/details"
              className="inline-flex w-fit items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Specs + QR Details <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {f.desc}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <div className="overflow-hidden rounded-2xl bg-white">
                    <img
                      src={f.img}
                      alt=""
                      className="h-52 w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-sm font-semibold tracking-wide text-orange-600">
            FAQs
          </p>
          <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Questions, Answered
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Accordion items={faqs} />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold">Need deeper details?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                If you’re a safety manager or you’re prepping for an audit, the
                detailed page includes what’s included, QR logging workflows,
                and a simple comparison.
              </p>
              <Link
                href="/details"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
              >
                View Details <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="request" className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-orange-400">
                Get details, pricing, and availability
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Request Product Information
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200">
                Tell us about your job site and we’ll follow up with sizing,
                lead times, and compliance documentation.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <Stat label="Standard size" value="4' × 8'" />
                <Stat label="Typical install" value="< 5 min" />
                <Stat label="Roof penetration" value="None" />
                <Stat label="QR tracking" value="Included" />
              </div>
            </div>

            <form className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="First Name" placeholder="First Name" />
                <Input label="Last Name" placeholder="Last Name" />
                <Input label="Phone" placeholder="Phone Number" />
                <Input label="Email" placeholder="Email Address" />
                <div className="sm:col-span-2">
                  <Input
                    label="Company / Job Site"
                    placeholder="Company or Job Site"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Textarea
                    label="Message"
                    placeholder="Tell us what you need…"
                  />
                </div>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
              >
                Send Request <span className="ml-2">→</span>
              </button>

              <p className="mt-3 text-xs text-slate-300">
                UI only — wire to your backend (EmailJS, Formspree, API route,
                etc.).
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
