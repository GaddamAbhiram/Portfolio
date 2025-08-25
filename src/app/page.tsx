"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Server,
  Database,
  Cloud,
  Code2,
  ExternalLink,
  Shield,
  Rocket,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";


/* ---------------------------------------------------------------------------
   Abhiram Gaddam – SDE Portfolio
   - Dark-only palette: Amber × Emerald
   - Hero: Bonjour + SDE summary + Email/LinkedIn/Resume
   - Portrait: 2 close rings; pulse on load (no image motion) + subtle parallax
   - Projects: recruiter-style bullets
   - Experience: chronological (oldest → newest) per your preference
   - Skills: equal-height cards
   - Publications: uniform View Article width
   - Floating socials pinned bottom-right
--------------------------------------------------------------------------- */

export default function Portfolio() {
  return (
    <div className="min-h-screen font-sans bg-[#0b1220] text-slate-100 selection:bg-amber-200/40 selection:text-amber-950">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] rounded-lg bg-emerald-600 text-white px-3 py-2"
      >
        Skip to main content
      </a>

      <BackgroundFX />

      {/* Top nav (only place your name appears) */}
      <nav
        aria-label="Primary"
        className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/5"
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-sm tracking-wider font-semibold uppercase text-amber-300">
            Abhiram Gaddam
          </span>
          <div className="flex items-center gap-1 sm:gap-2">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#publications">Publications</NavLink>
            <NavLink href="#education">Education</NavLink>
          </div>
        </div>
      </nav>

      <ScrollProgressBar />

      {/* HERO */}
      <header className="relative max-w-6xl mx-auto px-6 pt-10 md:pt-16">
        <section className="min-h-[82vh] grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-amber-300"
            >
              Bonjour!
            </motion.h1>

            <p className="mt-6 text-lg text-slate-200/90 max-w-2xl">
              I’m an SDE who ships features end-to-end—clean APIs, simple UIs,
              and the tooling to keep them fast. I write readable code with
              tests, measure what I build, and iterate from data. Goal: features
              that are easy to maintain and hard to break.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <ContactPill
                icon={<Mail className="h-4 w-4" />}
                text="agaddam2@student.gsu.edu"
                href="mailto:agaddam2@student.gsu.edu"
              />

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 shadow-sm hover:shadow-md transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                aria-label="Download résumé PDF"
              >
                <Shield className="h-4 w-4" aria-hidden /> Download Résumé
              </a>
            </div>
          </div>

          <PhotoWithRings />
        </section>
      </header>

      <main id="main">
        {/* ------------------------------- Projects ------------------------------- */}
        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <ProjectCard
              title="SprintLite — Kanban Issue Tracker"
              summary="Jira-style board for planning sprints and tracking bugs/features."
              bullets={[
                "Designed clean REST API and normalized PostgreSQL schema (indexed lists, search, pagination).",
                "Built drag-and-drop boards with optimistic updates; RBAC with JWT; server filters keep UX snappy at scale.",
                "Added CI (GitHub Actions) and tests (JUnit/Mockito) for core flows; Docker Compose for one-command local dev & deploy.",
              ]}
              tech="Next.js • React • Spring Boot • PostgreSQL • JUnit/Mockito • Docker • GitHub Actions"
            />

            <ProjectCard
              title="Trade-in — Smart Cryptocurrency Assistant"
              summary="Realtime market data, secure actions, resilient microservices."
              bullets={[
                "Implemented WebSocket streams for live prices; React + Redux for predictable state management.",
                "Hardened services with JWT auth, AES encryption, Redis caching; tuned PostgreSQL queries and indexes.",
                "Containerized and shipped via Jenkins CI/CD; reproducible builds and rollbacks.",
              ]}
              tech="React • Redux • Spring Boot • PostgreSQL • Redis • JWT • Docker • Jenkins"
            />

            <ProjectCard
              title="Student Social Responsibility Platform"
              summary="Community platform showcasing 140+ initiatives."
              bullets={[
                "Next.js + Django REST APIs; SSR and caching kept pages responsive under peak traffic.",
                "Structured SQL patterns; lazy loading & async API calls reduced over-fetching.",
                "Delivered in an Agile team; recognized as Best Innovative Project of the Year.",
              ]}
              tech="Next.js • Django • SQL • JWT • Docker • CI/CD"
            />

            <ProjectCard
              title="Telugu Handwritten OCR — CNN + YOLOv8n"
              summary="Applied CV model for high-accuracy handwritten recognition."
              bullets={[
                "Trained CNN with cosine-similarity embeddings achieving 97.3% accuracy on the dataset.",
                "Integrated YOLOv8n detection; Optuna tuning reduced trial time and improved stability.",
                "Published in ICAN 2024; journal article with Springer Nature Computer Science.",
              ]}
              tech="Python • CNN • YOLOv8n • Optuna"
            />
          </div>
        </Section>

        {/* ------------------------------ Experience ------------------------------ */}
        <Section id="experience" title="Experience" subtitle="Impact-focused highlights (chronological).">
          {/* Chronological (oldest → newest) per your preference */}
          <div className="grid gap-6 items-stretch">
            <RoleCard
              org="Amrita Vishwa Vidyapeetham"
              title="Java Developer"
              time="Aug 2022 – Dec 2023"
              points={[
                "Delivered Spring Boot/MVC services with Hibernate/JPA to support peak-term registration traffic.",
                "Tuned MySQL (indexes, joins) and Tomcat/JVM settings; improved throughput and reduced response times under load.",
                "Introduced async REST patterns; cut bottlenecks and smoothed spikes.",
                "Set up Dockerized environments and Jenkins CI/CD; repeatable builds and quick rollback.",
                "Optimized Angular client (state reuse, lighter payloads); ~30% faster registration UX for 5,000+ users.",
              ]}
            />
            <RoleCard
              org="Amrita Vishwa Vidyapeetham"
              title="Research Assistant — Computer Vision"
              time="Jan 2024 – Jul 2024"
              points={[
                "Built CNN with cosine-similarity embeddings for Telugu handwriting; reached 97.3% accuracy (beat baselines).",
                "Integrated YOLOv8n detection; Optuna tuning improved training efficiency by ~25%.",
                "Published findings (ICAN 2024; SN Computer Science, Springer Nature).",
              ]}
            />
            <RoleCard
              org="Georgia State University"
              title="Graduate Teaching Assistant — Algorithms"
              time="Aug 2024 – Present"
              points={[
                "Led 15+ lectures and 10+ labs on recursion, OOP, DP and greedy strategies; clarified problem-solving patterns.",
                "Designed practical exercises and live code reviews; increased lab participation by ~20%.",
              ]}
            />
          </div>
        </Section>

        {/* ------------------------------- Skills -------------------------------- */}
        <Section id="skills" title="Skills" subtitle="Production-ready tools I use to ship software.">
          <div className="grid md:grid-cols-4 gap-4 items-stretch">
            <SkillCard
              icon={<Code2 className="h-5 w-5" aria-hidden />}
              title="Languages"
              items={["Java", "C++", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]}
            />
            <SkillCard
              icon={<Server className="h-5 w-5" aria-hidden />}
              title="Frameworks"
              items={["Spring Boot/MVC", "Hibernate","JPA", "React", "Next.js", "Angular", "Django", "Redux", "REST APIs"]}
            />
            <SkillCard
              icon={<Database className="h-5 w-5" aria-hidden />}
              title="Databases"
              items={["MySQL", "PostgreSQL", "MongoDB", "Redis"]}
            />
            <SkillCard
              icon={<Cloud className="h-5 w-5" aria-hidden />}
              title="Cloud & Tools"
              items={["AWS (EC2, RDS, S3)", "Docker", "Git/GitHub", "Jenkins", "JUnit/Mockito", "JMeter"]}
            />
          </div>
        </Section>

        {/* ---------------------------- Publications ----------------------------- */}
        <Section id="publications" title="Publications" subtitle="Peer-reviewed & journal articles.">
          <div className="grid gap-4 md:grid-cols-2 items-stretch">
            <PublicationCard
              title="TeluguScriptify: A Custom Deep Learning Model for Handwritten Telugu Text Recognition and Tool Development"
              venue="SN Computer Science Journal, Springer Nature"
              date="Aug ’24"
              href="https://link.springer.com/article/10.1007/s42979-025-03677-z"
            />
            <PublicationCard
              title="Efficient Fraud Detection in Financial Transactions Using Gradient Boosting and XGBoost Algorithms"
              venue="International Journal of All Research Education and Scientific Methods"
              date="Sep ’23"
              href="https://www.ijaresm.com/efficient-fraud-detection-in-financial-transactions-using-gradient-boosting-and-xgboost-algorithms"
            />
          </div>
        </Section>

        {/* ------------------------------ Education ------------------------------- */}
        <Section id="education" title="Education & Recognition" subtitle="Academic performance and honors.">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold">Georgia State University — M.S. Computer Science</h3>
              <p className="text-sm opacity-80 mt-1">GPA: 4.0 • Expected Dec 2025</p>
              <div className="mt-3 inline-flex items-center gap-2">
                <Award className="h-5 w-5" aria-hidden />
                <span>Presidential Scholar Awardee</span>
              </div>
            </GlassCard>
            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold">Amrita Vishwa Vidyapeetham — B.Tech Computer Science</h3>
              <p className="text-sm opacity-80 mt-1">GPA: 3.71 • Graduated Jul 2024</p>
              <div className="mt-3 inline-flex items-center gap-2">
                              <Award className="h-5 w-5" aria-hidden />
                              <span>Innovative Project Award</span>
                            </div>
              <div className="mt-3 space-y-2">
                <div className="inline-flex items-center gap-2">
                  <BookOpen className="h-5 w-5" aria-hidden />
                  <span>Best Research Paper Award</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </Section>
      </main>

      {/* Footer contact */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <GlassCard className="h-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Contact</h3>

            </div>
            <div className="flex flex-wrap gap-3">
              <ContactPill icon={<Mail className="h-4 w-4" />} text="agaddam2@student.gsu.edu" href="mailto:agaddam2@student.gsu.edu" />
              <ContactPill icon={<Phone className="h-4 w-4" />} text="804-944-3653" />
              <ContactPill icon={<MapPin className="h-4 w-4" />} text="Atlanta, GA" />
            </div>
          </div>
        </GlassCard>
      </section>

      <footer className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-sm opacity-80 flex items-center gap-2">
          <Rocket className="h-4 w-4" aria-hidden />
          <span>Built with Next.js + Tailwind • A11y-enhanced</span>
        </div>
      </footer>

      {/* Floating socials pinned bottom-right */}
      <FloatingSocials />
    </div>
  );
}

/* ---------------------------- Decorative Background ---------------------------- */
function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-1/2 top-[-10%] h-[50rem] w-[50rem] -translate-x-1/2 rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(closest-side, rgba(16,185,129,0.35), rgba(11,18,32,0.0))" }}
      />
      <motion.div
        className="absolute right-[-10%] top-1/3 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "#10b98140" }}
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[-8%] bottom-1/4 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "#f59e0b40" }}
        animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* -------------------------------- Scroll progress -------------------------------- */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 h-0.5 origin-left bg-amber-400/80 z-[60]" />;
}

/* ---- Portrait + 2 close rings: load pulse (photo stays still) ---- */

function PhotoWithRings() {
  const { scrollYProgress } = useScroll();
  const yRings = useSpring(useTransform(scrollYProgress, [0, 1], [0, -12]), {
    stiffness: 60,
    damping: 20,
  });

  return (
    <div aria-hidden className="relative h-[460px] md:h-[560px] grid place-items-center">
      {/* Soft glow behind rings — MERGED style prop */}
      <motion.div
        className="absolute w-[460px] h-[460px] md:w-[520px] md:h-[520px] rounded-full blur-3xl"
        initial={{ opacity: 0.25, scale: 0.96 }}
        animate={{ opacity: 0.4, scale: [0.98, 1.06, 1] }}
        transition={{ duration: 1.9, ease: "easeInOut" }}
        style={{
          y: yRings,
          background:
            "radial-gradient(circle, rgba(245,158,11,0.22), rgba(16,185,129,0.10) 60%, transparent 70%)",
        }}
      />

      {/* Outer ring — close to photo */}
      <motion.div
        className="absolute w-[420px] h-[420px] md:w-[480px] md:h-[480px] rounded-full border-2 border-amber-400/70"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        style={{ y: yRings }}
      />
      {/* Inner ring — just inside outer ring */}
      <motion.div
        className="absolute w-[380px] h-[380px] md:w-[440px] md:h-[440px] rounded-full border border-emerald-400/70"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.12 }}
        style={{ y: yRings }}
      />

      {/* Photo — bigger, fixed */}
      <div className="w-[360px] h-[360px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden ring-2 ring-amber-400/40 shadow-[0_0_80px_-20px_rgba(245,158,11,0.6)]">
        <Image src="/profile.jpg" alt="Abhiram Gaddam" width={800} height={800} className="h-full w-full object-cover" priority />
      </div>
    </div>
  );
}


/* --------------------------------- Primitives --------------------------------- */
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="rounded-lg px-3 py-1.5 text-sm text-slate-200 hover:bg-white/5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
    >
      {children}
    </a>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative max-w-6xl mx-auto px-6 py-12">
      <Reveal>
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-amber-200">{title}</h2>
          {subtitle && <p className="mt-1 opacity-90 max-w-2xl text-slate-300">{subtitle}</p>}
        </div>
      </Reveal>
      <Reveal delay={0.05}>{children}</Reveal>
    </section>
  );
}

/* GlassCard accepts className so we can force equal heights where needed */
function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-sm hover:shadow-xl focus-within:shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

function ContactPill({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) {
  const classes =
    "inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 shadow-sm hover:shadow-md transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500";

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon}
        <span>{text}</span>
      </a>
    );
  }
  return (
    <div className={classes}>
      {icon}
      <span>{text}</span>
    </div>
  );
}


/* ------------------------- Cards with equal-height behavior ------------------------- */
function ProjectCard({
  title,
  summary,
  bullets,
  tech,
}: {
  title: string;
  summary: string;
  bullets: string[];
  tech: string;
}) {
  return (
    <GlassCard className="h-full flex flex-col">
      <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      <p className="mt-1 opacity-90 text-slate-300">{summary}</p>
      <ul className="mt-4 space-y-2 text-sm list-disc pl-5 text-slate-200 flex-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm italic text-slate-300">Tech: {tech}</p>
    </GlassCard>
  );
}

function RoleCard({ org, title, time, points }: { org: string; title: string; time: string; points: string[] }) {
  return (
    <GlassCard className="h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <h3 className="text-lg font-semibold">{org}</h3>
        <span className="text-sm text-slate-300">{time}</span>
      </div>
      <p className="opacity-90 font-medium">{title}</p>
      <ul className="mt-3 space-y-2 text-sm list-disc pl-5 text-slate-200 flex-1">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </GlassCard>
  );
}

function SkillCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <GlassCard className="h-full min-h-[220px] flex flex-col">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-300">{items.join(" • ")}</p>
      <div className="flex-1" />
    </GlassCard>
  );
}

function PublicationCard({ title, venue, date, href }: { title: string; venue: string; date: string; href: string }) {
  return (
    <GlassCard className="h-full flex flex-col justify-between">
      <div>
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-80 mt-1">
          {venue} • {date}
        </p>
      </div>
      <div className="mt-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-amber-400/10 px-3 py-1.5 text-sm text-amber-200 hover:bg-amber-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 w-40"
          aria-label={`Open publication: ${title}`}
        >
          <ExternalLink className="h-4 w-4" aria-hidden /> View Article
        </a>
      </div>
    </GlassCard>
  );
}

/* ------------------------------ Reveal-on-scroll ------------------------------ */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------- Tiny round icon (floating bar) ----------------------- */
function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  );
}

/* --------------------- Floating socials pinned bottom-right -------------------- */
function FloatingSocials() {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex gap-2">
      <SocialIcon href="https://www.linkedin.com/in/abhiram08/" label="LinkedIn">
        <Linkedin className="h-4 w-4" />
      </SocialIcon>
      <SocialIcon href="https://github.com/GaddamAbhiram" label="GitHub">
        <Github className="h-4 w-4" />
      </SocialIcon>
      <SocialIcon href="https://www.instagram.com/__abhi__08/" label="Instagram">
        <Instagram className="h-4 w-4" />
      </SocialIcon>
    </div>
  );
}
