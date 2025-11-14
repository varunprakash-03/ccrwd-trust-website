import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Award,
  Calendar,
  Download,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Timeline } from "@/components/ui/timeline";
import profile from "@/assets/dir.jpg";
// Use a hosted image to avoid missing-local-file import errors. Replace with your own URL if desired.
const heroPhoto = profile;

/* ---------- Config / data ---------- */
const cvFile: string | undefined = undefined; // set to path if you have a CV

type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

const timelineData: TimelineEntry[] = [
  {
    title: "2018 – Present",
    content: (
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2">Project Coordinator — Illam Thedi Kalvi (TNSF)</h3>
        <p className="text-muted-foreground mb-2">Coimbatore</p>
        <p className="text-sm text-muted-foreground">
          Led zonal trainers, community outreach and remedial learning resources to bridge educational gaps in remote communities.
        </p>
      </div>
    ),
  },
  {
    title: "2017 – 2020",
    content: (
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2">District Co-Coordinator — Child Friendly Schools</h3>
        <p className="text-muted-foreground mb-2">UNICEF & ISE</p>
        <p className="text-sm text-muted-foreground">
          Coordinated teacher training, safety workshops and inclusive education initiatives across district government schools.
        </p>
      </div>
    ),
  },
  {
    title: "2015 – Present",
    content: (
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2">Counselling & Awareness Lead</h3>
        <p className="text-sm text-muted-foreground">
          Delivered counselling sessions on mental & physical hygiene, stress management and gender awareness in schools and welfare hostels.
        </p>
      </div>
    ),
  },
  {
    title: "Ongoing",
    content: (
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2">Teacher Training & Master Trainer Programs</h3>
        <p className="text-sm text-muted-foreground">
          Designing and delivering teacher capacity-building programs and master trainer workshops to improve classroom outcomes.
        </p>
      </div>
    ),
  },
];

const stats = [
  { value: 38, label: "Districts Reached" },
  { value: 76, label: "Counselors" },
  { value: 16098, label: "Students trained (1 yr)" },
  { value: 64390, label: "Total students" },
];

/* ---------- Small UI ---------- */
const StatCard: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  return (
    <div className="stat-card p-3 text-center bg-transparent">
      <div className="stat-value text-2xl md:text-3xl font-extrabold" data-target={value}>
        {value.toLocaleString()}
      </div>
      <div className="stat-label text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

/* ---------- Page (full) ---------- */
const AboutFounder: React.FC = () => {
  const revealRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = revealRef.current;
    if (!container) return;

    const els = Array.from(container.querySelectorAll("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("translate-y-0", "opacity-100");
            el.classList.remove("translate-y-6", "opacity-0");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    // animated counters (more resilient than direct DOM queries)
    const statCards = document.querySelectorAll(".stat-card");
    const animateCounter = (el: HTMLElement, target: number) => {
      let start = 0;
      const duration = 1000;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(target * eased);
        el.textContent = current.toLocaleString();

        if (t < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString();
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const card = entry.target as HTMLElement;
          const valEl = card.querySelector(".stat-value") as HTMLElement | null;
          if (valEl) {
            const raw = valEl.getAttribute("data-target") || valEl.textContent || "0";
            const target = parseInt(String(raw).replace(/,/g, ""), 10) || 0;
            valEl.textContent = "0";
            animateCounter(valEl, target);
          }
          observer.unobserve(card);
        });
      },
      { threshold: 0.6 }
    );

    statCards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <header className="pt-24 pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7" data-reveal>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-secondary/40 text-secondary-foreground mb-4">
                  <Star size={14} /> Founder & Director
                </span>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                  Dr. S. Sathiya Priya
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  Dedicated social activist with 9+ years of experience uplifting rural and tribal children in
                  Coimbatore — leading education reforms, community counselling and capacity building.
                </p>

               
              </div>
            </div>

            <div className="lg:col-span-5" data-reveal>
              <div className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900/60 shadow-lg relative overflow-hidden">
                <svg className="absolute -top-10 -right-10 w-48 opacity-10 pointer-events-none" viewBox="0 0 200 200" aria-hidden>
                  <path d="M0 100 C50 10 150 190 200 100" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>

                <div className="flex items-center gap-4">
                  <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/80">
                    <img
                      src={heroPhoto}
                      alt="Dr. S. Sathiya Priya"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Dr. S. Sathiya Priya</h3>
                    <div className="text-sm text-primary font-medium">Director — CCRWD Trust</div>
                    <div className="text-xs text-muted-foreground mt-2 max-w-[15rem]">
                      Passionate leader focused on education equity, child protection, and community empowerment.
                    </div>
                  </div>
                </div>

                <hr className="my-4 border-t border-border" />

               

                <div className="mt-4 flex gap-3">
                  <a href="#awards" className="text-sm px-3 py-2 rounded-md glass">
                    <Award size={14} className="mr-2" /> Awards
                  </a>
                  <a href="#timeline" className="text-sm px-3 py-2 rounded-md glass">
                    <Calendar size={14} className="mr-2" /> Timeline
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HIGHLIGHTS & STATS */}
      <section className="py-10 md:py-14" ref={revealRef as any}>
        <div className="container mx-auto px-4">
          <div className="bg-section-primary/60 p-6 md:p-10 rounded-2xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Impact & Focus Areas</h2>
                <p className="text-muted-foreground mb-4">
                  Focused on rural & tribal upliftment, child protection, and life-skills development.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3 text-sm">
                    <span className="mt-1 text-primary">•</span>
                    <span className="text-muted-foreground">School readiness & remedial programmes</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="mt-1 text-primary">•</span>
                    <span className="text-muted-foreground">Counselling & mental health sessions</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="mt-1 text-primary">•</span>
                    <span className="text-muted-foreground">Child protection & legal awareness</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="mt-1 text-primary">•</span>
                    <span className="text-muted-foreground">Teacher training & master trainer programs</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 items-center justify-center p-4 rounded-lg bg-white/80 dark:bg-slate-900/60 shadow">
                <div className="w-full grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((s) => (
                    <div key={s.label} className="stat-card p-2 text-center">
                      <div className="stat-value text-3xl font-extrabold" data-target={s.value}>
                        {s.value.toLocaleString()}
                      </div>
                      <div className="stat-label text-sm text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="w-full grid grid-cols-2 gap-4 mt-4">
                  {stats.slice(2).map((s) => (
                    <div key={s.label} className="stat-card p-2 text-center">
                      <div className="stat-value text-2xl font-extrabold" data-target={s.value}>
                        {s.value.toLocaleString()}
                      </div>
                      <div className="stat-label text-sm text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline (Motion-based) */}
      <Timeline data={timelineData} />

      {/* QUOTE */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-r from-primary/10 to-accent/6 shadow-lg">
            <blockquote className="text-xl md:text-2xl italic font-semibold text-foreground/90 max-w-4xl mx-auto text-center">
              “Prosperity is not about what we take from society, but what we give back to it.”
            </blockquote>
          
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Collaborate with Dr. Priya</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Partner on community programs, invite for workshops, or support educational initiatives.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="rounded-2xl gradient-primary px-6 py-3 text-white">Get in touch</a>
            {cvFile ? (
              <a href={cvFile} download className="rounded-2xl px-6 py-3 glass">Download full CV</a>
            ) : (
              <button disabled className="rounded-2xl px-6 py-3 glass opacity-60 cursor-not-allowed">Download full CV</button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutFounder;
