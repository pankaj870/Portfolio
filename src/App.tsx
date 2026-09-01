import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  ExternalLink,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { ErrorBoundary } from "@/components/error-boundary";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Route, Switch, useLocation, Router as WouterRouter } from "wouter";
import GhostCursor from "@/components/GhostCursor";

const queryClient = new QueryClient();

const navItems = [
  { label: "Approach", href: "#approach", id: "approach" },
  { label: "Selected work", href: "#work", id: "work" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const skills = [
  "JavaScript (ES6+)",
  "Data Structures & Algorithms",
  "Node.js",
  "Express.js",
  "Next.js",
  "React.js",
  "MERN Stack",
  "TypeScript",
  "RESTful APIs",
  "Microservices",
  "RAG",
  "MongoDB",
  "MySQL",
  "Redis",
  "AWS",
  "Docker",
  "Firebase",
  "n8n",
  "Antigravity",
  "Cursor",
  "VS Code",
  "Postman",
  "Strapi CMS",
  "Python",
  "Java",
  "Git / GitHub",
];

function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    requestAnimationFrame(() => {
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92)
          node.classList.add("is-visible");
      });
    });
    return () => observer.disconnect();
  }, []);
}

function useScrollProgress() {
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const progress = Math.min(
        window.scrollY / Math.max(window.innerHeight, 1),
        1,
      );
      document.documentElement.style.setProperty(
        "--scroll-progress",
        progress.toString(),
      );
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}

function magneticMove(event: MouseEvent<HTMLElement>) {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();
  const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
  const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
  element.style.transform = `translate(${x}px, ${y}px)`;
}

function magneticReset(event: MouseEvent<HTMLElement>) {
  event.currentTarget.style.transform = "translate(0, 0)";
}

function Topbar() {
  const [activeSection, setActiveSection] = useState("approach");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection((visible.target as HTMLElement).id);
      },
      {
        threshold: [0.15, 0.3, 0.5, 0.7],
        rootMargin: "-25% 0px -55% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const isActive = (id: string) => activeSection === id;

  return (
    <header
      className={`topbar-shell fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "topbar-scrolled" : ""
      }`}
    >
      <div className="topbar-inner mx-auto flex h-[4.8rem] max-w-[1500px] items-center gap-4 px-[var(--page-pad)]">
        {/* Brand */}
        <a
          href="#top"
          className="topbar-brand group flex min-w-0 items-center gap-3"
          onClick={closeMenu}
          data-testid="link-home"
        >
          <span className="topbar-brand-mark relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-foreground/10 bg-card/75 text-[.68rem] font-bold tracking-[.18em] text-foreground shadow-[0_10px_30px_rgba(18,37,43,.06)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-[0_14px_35px_rgba(18,37,43,.12)]">
            PM
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/.12)]" />
          </span>

          <span className="hidden min-w-0 flex-col leading-none sm:flex">
            <span className="display truncate text-[1.08rem] font-semibold tracking-[-0.045em] text-foreground lg:text-[1.18rem]">
              Pankaj Mahajan
            </span>
            <span className="mono mt-1 text-[.52rem] uppercase tracking-[.16em] text-muted-foreground">
              full stack developer
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden flex-1 justify-center md:flex">
          <nav
            className="topbar-nav rounded-full border border-foreground/10 bg-card/60 p-1.5 shadow-[0_12px_40px_rgba(18,37,43,.06)] backdrop-blur-2xl"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const active = isActive(item.id);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`topbar-nav-link group relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[.78rem] font-medium tracking-[-.01em] transition-all duration-300 lg:px-5 ${
                    active
                      ? "topbar-nav-link-active text-background"
                      : "text-muted-foreground hover:bg-background/75 hover:text-foreground"
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                >
                  {active && (
                    <span className="absolute inset-0 -z-0 rounded-full bg-foreground shadow-[0_8px_22px_rgba(18,37,43,.14)]" />
                  )}
                  <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Desktop actions */}
        <div className="ml-auto hidden items-center gap-2 md:flex">
          <a
            href="#contact"
            className="topbar-talk inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[.78rem] font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-card/70 hover:text-foreground"
            data-testid="link-email-top"
          >
            <Mail size={14} />
            Let&apos;s talk
          </a>
          <a
            href="/Pankaj_Mahajan_Resume.docx"
            download
            className="topbar-resume group inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-4 py-2.5 text-[.78rem] font-semibold text-background shadow-[0_12px_30px_rgba(18,37,43,.14)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-background"
            data-testid="link-resume-nav"
          >
            Resume
            <Download
              className="transition-transform duration-300 group-hover:translate-y-0.5"
              size={14}
              strokeWidth={2.2}
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="topbar-menu-button ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-card/80 text-foreground shadow-[0_12px_30px_rgba(18,37,43,.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          data-testid="button-menu"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <Menu
              className={`absolute transition-all duration-300 ${menuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
              size={19}
            />
            <X
              className={`absolute transition-all duration-300 ${menuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
              size={19}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`topbar-mobile-panel mx-auto max-w-[1500px] overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto max-h-[32rem] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
        }`}
      >
        <div className="px-[var(--page-pad)] pb-5 pt-2">
          <div className="rounded-[1.75rem] border border-foreground/10 bg-card/95 p-2 shadow-[0_24px_60px_rgba(18,37,43,.12)] backdrop-blur-2xl">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navItems.map((item, index) => {
                const active = isActive(item.id);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={`mobile-nav-item group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all duration-300 ${
                      active
                        ? "bg-foreground text-background shadow-[0_10px_25px_rgba(18,37,43,.12)]"
                        : "text-muted-foreground hover:bg-background hover:text-foreground"
                    }`}
                    style={{
                      transitionDelay: menuOpen ? `${index * 35}ms` : "0ms",
                    }}
                    data-testid={`link-mobile-nav-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`mono text-[.6rem] ${active ? "text-primary" : "text-muted-foreground"}`}
                      >
                        0{index + 1}
                      </span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </span>
                    <ArrowUpRight
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      size={16}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border/60 p-2 pt-3">
              <a
                href="#contact"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-all hover:bg-background hover:text-foreground"
                data-testid="link-mobile-talk"
              >
                <Mail size={14} />
                Let&apos;s talk
              </a>
              <a
                href="/Pankaj_Mahajan_Resume.docx"
                download
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-3 py-3 text-sm font-semibold text-background transition-all hover:bg-primary"
                data-testid="link-mobile-resume"
              >
                Resume <Download size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      data-cursor-theme="hero"
      className="hero-shell relative overflow-hidden border-b border-foreground/15 px-[var(--page-pad)] pb-24 pt-32 md:min-h-[900px] md:pb-28 md:pt-44"
    >
        <GhostCursor
          color="#B497CF"
          brightness={2}
          edgeIntensity={0}
          trailLength={50}
          inertia={0.5}
          grainIntensity={0.05}
          bloomStrength={0.1}
          bloomRadius={1}
          bloomThreshold={0.025}
          fadeDelayMs={1000}
          fadeDurationMs={1500}
          mixBlendMode="normal"
        />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-left" aria-hidden="true" />
      <div className="hero-glow hero-glow-right" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1080px] lg:min-h-[700px] flex flex-col items-center text-center">
        <div className="relative z-10 pb-10 lg:pb-16 flex flex-col items-center">
          <div className="reveal mono mb-8 inline-flex items-center justify-center gap-3 rounded-full border border-border/75 bg-background/70 px-4 py-2 text-[.66rem] text-primary shadow-[0_10px_30px_rgba(18,37,43,0.04)] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            Indore, Madhya Pradesh / available for select builds
          </div>
          <h1 className="display reveal reveal-delay-1 max-w-5xl text-[clamp(3.65rem,10vw,9.25rem)] font-semibold leading-[.86] text-foreground">
            Full-stack
            <br />
            <span className="text-primary">developer.</span>
            <br />
            Built to scale.
          </h1>
          <div className="hero-copy reveal reveal-delay-2 mt-9 flex max-w-2xl flex-col items-center gap-6">
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Performance-driven Full Stack Developer with over 1 year of
              experience building scalable RESTful APIs, microservices, and
              modern frontends using Node.js, Express.js, and Next.js. Focused
              on secure authentication, Redis performance, AWS deployments, and
              AI-assisted workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#work"
                className="magnetic inline-flex items-center gap-3 bg-foreground px-5 py-4 text-sm font-bold text-background shadow-[0_18px_40px_rgba(18,37,43,0.12)] transition-transform hover:-translate-y-0.5"
                onMouseMove={magneticMove}
                onMouseLeave={magneticReset}
                data-testid="link-hero-work"
              >
                See the work <ArrowDownRight size={17} />
              </a>
              <a
                href="/Pankaj_Mahajan_Resume.docx"
                download
                className="magnetic inline-flex items-center gap-3 border border-border bg-background/75 px-5 py-4 text-sm font-bold text-foreground backdrop-blur-sm transition-transform hover:-translate-y-0.5"
                onMouseMove={magneticMove}
                onMouseLeave={magneticReset}
                data-testid="link-hero-resume"
              >
                Download résumé <Download size={17} />
              </a>
            </div>
          </div>
          <div className="hero-metrics reveal reveal-delay-3 mt-10 grid gap-4 border-t border-border/70 pt-6 sm:grid-cols-3 text-left">
            <div>
              <p className="mono mb-2 text-[.58rem] text-primary">
                01 / Experience
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                1+ year shipping production software across backend and frontend
                layers.
              </p>
            </div>
            <div>
              <p className="mono mb-2 text-[.58rem] text-primary">
                02 / Strength
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                RESTful APIs, microservices, authentication, caching, and cloud
                deployment.
              </p>
            </div>
            <div>
              <p className="mono mb-2 text-[.58rem] text-primary">03 / Focus</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                AI-assisted development, workflow automation, and reliable
                product delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 left-[var(--page-pad)] right-[var(--page-pad)] flex items-center justify-between gap-4 text-muted-foreground">
        <span className="mono text-[.62rem]">
          available for select freelance and product work
        </span>
        <span className="h-px flex-1 bg-border/70" />
        <span className="mono text-[.62rem]">01 / 07</span>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section
      id="approach"
      data-cursor-theme="approach"
      className="section-pad mx-auto grid max-w-[1440px] gap-16 md:grid-cols-[.72fr_1.28fr] md:gap-24"
    >
      <div className="reveal">
        <p className="mono mb-5 text-[.66rem] text-primary">02 / Approach</p>
        <h2 className="display max-w-md text-5xl font-semibold leading-[.95] sm:text-7xl">
          Build the system.
        </h2>
      </div>
      <div className="grid gap-12 sm:grid-cols-2">
        <div className="reveal reveal-delay-1">
          <p className="system-line display mb-5 text-3xl font-semibold">
            Start from the backend.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Scalable APIs, microservices, Firebase and JWT authentication, and
            Redis caching are handled early so the product stays fast later.
          </p>
        </div>
        <div className="reveal reveal-delay-2">
          <p className="system-line display mb-5 text-3xl font-semibold">
            End with the workflow.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            n8n automations, AWS deployments, and AI-assisted development reduce
            manual work and keep delivery steady.
          </p>
        </div>
        <div className="reveal reveal-delay-3 border-t border-border pt-8 sm:col-span-2">
          <p className="display max-w-3xl text-3xl leading-tight text-secondary sm:text-5xl">
            “I like the hard middle: where product ideas become reliable enough
            to earn trust.”
          </p>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section
      id="work"
      data-cursor-theme="work"
      className="bg-foreground px-[var(--page-pad)] py-[clamp(5.5rem,12vw,10rem)] text-background"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="reveal mb-16 flex items-end justify-between gap-6">
          <div>
            <p className="mono mb-5 text-[.66rem] text-accent">
              03 / Selected work
            </p>
            <h2 className="display text-5xl font-semibold leading-none sm:text-8xl">
              Built for
              <br />
              <span className="text-primary">real load.</span>
            </h2>
          </div>
          <span className="mono hidden text-[.62rem] text-background/50 sm:block">
            two systems / one standard
          </span>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <a
            href="https://visualible.com"
            target="_blank"
            rel="noreferrer"
            className="reveal reveal-delay-1 group relative flex min-h-[510px] flex-col justify-between overflow-hidden border border-background/20 bg-secondary p-7 text-background sm:p-10"
            data-testid="link-project-visualible"
          >
            <div className="absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-full border border-background/35 text-accent transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={22} />
            </div>
            <div>
              <p className="mono mb-5 text-[.65rem] text-background/65">
                01 / AI product platform
              </p>
              <h3 className="project-name display">Visualible</h3>
              <p className="project-type">AI eBook platform · visualible.com</p>
            </div>
            <div className="flex flex-col gap-5 border-t border-background/25 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md leading-relaxed text-background/75">
                Built microservices for an AI-driven eBook platform that
                extracts citations, maps them to Wikipedia sources, and powers a
                RAG pipeline for context-aware Q&A.
              </p>
              <span className="mono shrink-0 text-[.62rem] text-accent">
                RAG / Redis / Next.js
              </span>
            </div>
          </a>
          <a
            href="https://syntra.co.in"
            target="_blank"
            rel="noreferrer"
            className="project-card reveal reveal-delay-2 group flex min-h-[510px] flex-col justify-between border border-background/20 bg-background p-7 text-foreground sm:p-10"
            data-testid="link-project-syntra"
          >
            <div className="flex items-start justify-between">
              <p className="mono text-[.65rem] text-primary">
                02 / Consumer application
              </p>
              <ExternalLink className="project-arrow text-primary" size={20} />
            </div>
            <div>
              <h3 className="project-name display">Syntra</h3>
              <p className="project-type">Dating application · syntra.co.in</p>
              <p className="mt-7 max-w-md leading-relaxed text-muted-foreground">
                Core backend infrastructure for matching algorithms, profile
                management, high-volume MongoDB schemas, and Strapi-powered
                subscription content.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 border-t border-border pt-6">
              {["Node.js", "MongoDB", "Strapi CMS"].map((tag) => (
                <span
                  key={tag}
                  className="mono border border-border px-3 py-2 text-[.58rem] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function SystemManifesto() {
  return (
    <section
      data-cursor-theme="manifesto"
      className="section-pad mx-auto grid max-w-[1440px] gap-14 md:grid-cols-[.4fr_1.6fr]"
    >
      <div className="reveal">
        <p className="mono text-[.66rem] text-primary">04 / In the system</p>
      </div>
      <div className="reveal reveal-delay-1">
        <p className="display max-w-5xl text-[clamp(2.8rem,6.5vw,7.4rem)] font-semibold leading-[.9]">
          From <span className="text-secondary">API contracts</span> to the last
          button, every layer should tell the same story.
        </p>
        <div className="mt-14 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
          <div>
            <p className="mono mb-3 text-[.62rem] text-primary">01 / Model</p>
            <p className="text-muted-foreground">Make the data honest.</p>
          </div>
          <div>
            <p className="mono mb-3 text-[.62rem] text-primary">02 / Scale</p>
            <p className="text-muted-foreground">
              Cache what repeats. Queue what waits.
            </p>
          </div>
          <div>
            <p className="mono mb-3 text-[.62rem] text-primary">03 / Ship</p>
            <p className="text-muted-foreground">
              Deploy with enough visibility to sleep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      data-cursor-theme="experience"
      className="border-t border-border bg-muted/45 px-[var(--page-pad)] py-[clamp(5.5rem,12vw,10rem)]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="reveal mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mono mb-5 text-[.66rem] text-primary">
              05 / Experience
            </p>
            <h2 className="display text-5xl font-semibold leading-none sm:text-8xl">
              A short
              <br />
              timeline.
            </h2>
          </div>
          <a
            href="/Pankaj_Mahajan_Resume.docx"
            download
            className="magnetic inline-flex w-fit items-center gap-3 border-b border-primary pb-2 text-sm font-bold"
            onMouseMove={magneticMove}
            onMouseLeave={magneticReset}
            data-testid="link-resume-download"
          >
            <Download size={17} /> Download résumé
          </a>
        </div>
        <div className="border-t border-border">
          <article className="reveal grid gap-6 border-b border-border py-8 md:grid-cols-[.25fr_1fr_.6fr] md:gap-12">
            <p className="mono text-[.62rem] text-primary">Apr 2025 — now</p>
            <div>
              <h3 className="display text-3xl font-semibold">
                Software Developer
              </h3>
              <p className="mt-1 text-muted-foreground">Ideal IT Techno</p>
            </div>
            <ul className="list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
              <li>
                Architected and maintained scalable Node.js RESTful APIs and
                microservices powering core product features.
              </li>
              <li>
                Engineered workflow automations with n8n and Antigravity to
                reduce manual intervention and improve integration reliability.
              </li>
              <li>
                Strengthened backend security and performance with Firebase/JWT
                authentication and Redis caching.
              </li>
              <li>
                Owned production deployments on AWS and partnered on AI-driven
                data extraction pipelines and unit testing.
              </li>
            </ul>
          </article>
          <article className="reveal reveal-delay-1 grid gap-6 border-b border-border py-8 md:grid-cols-[.25fr_1fr_.6fr] md:gap-12">
            <p className="mono text-[.62rem] text-primary">Sep — Dec 2024</p>
            <div>
              <h3 className="display text-3xl font-semibold">
                Data Science Trainee
              </h3>
              <p className="mt-1 text-muted-foreground">
                Grow Tech · Dr. Reddy's Foundation
              </p>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Applied Python-based statistical analysis and machine learning
              fundamentals to improve data-informed decisions.
            </p>
          </article>
          <article className="reveal reveal-delay-2 grid gap-6 border-b border-border py-8 md:grid-cols-[.25fr_1fr_.6fr] md:gap-12">
            <p className="mono text-[.62rem] text-primary">2020 — 2024</p>
            <div>
              <h3 className="display text-3xl font-semibold">
                B.Tech, Computer Science
              </h3>
              <p className="mt-1 text-muted-foreground">
                Sushila Devi Bansal College · Indore
              </p>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Graduated with a 7.5 CGPA. The foundation underneath the shipping
              instinct.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section
      data-cursor-theme="toolkit"
      className="section-pad mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[.7fr_1.3fr]"
    >
      <div className="reveal">
        <p className="mono mb-5 text-[.66rem] text-primary">06 / Toolkit</p>
        <h2 className="display text-5xl font-semibold leading-[.92] sm:text-7xl">
          The right tool for the real constraint.
        </h2>
      </div>
      <div className="reveal reveal-delay-1 flex flex-wrap content-start gap-3">
        {skills.map((skill) => (
          <span
            className="skill-pill text-sm text-foreground"
            key={skill}
            data-testid={`skill-${skill.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      data-cursor-theme="contact"
      className="bg-primary px-[var(--page-pad)] py-[clamp(5.5rem,12vw,10rem)] text-primary-foreground"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="reveal flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="mono mb-6 text-[.66rem] text-primary-foreground/70">
              07 / Make something sturdy
            </p>
            <h2 className="display max-w-4xl text-[clamp(4rem,10vw,10rem)] font-semibold leading-[.83]">
              Let's make
              <br />
              <span className="text-accent">the hard part</span>
              <br />
              simple.
            </h2>
          </div>
          <div className="max-w-xs md:pb-2">
            <p className="mb-7 text-lg leading-relaxed text-primary-foreground/80">
              Have a product with a lot going on underneath? That is usually
              where the good work starts.
            </p>
            <a
              href="mailto:mahajanpankaj615@gmail.com"
              className="magnetic inline-flex items-center gap-3 bg-foreground px-5 py-4 text-sm font-bold text-background"
              onMouseMove={magneticMove}
              onMouseLeave={magneticReset}
              data-testid="button-contact-email"
            >
              Email Pankaj <Mail size={17} />
            </a>
          </div>
        </div>
        <div className="mt-24 flex flex-col justify-between gap-5 border-t border-primary-foreground/25 pt-6 text-sm text-primary-foreground/75 sm:flex-row">
          <p>mahajanpankaj615@gmail.com · +91 6263545855</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/pankaj-mahajan-26a369223"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-primary-foreground transition-colors hover:text-accent"
              data-testid="link-linkedin"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-2 font-semibold text-primary-foreground transition-colors hover:text-accent"
              data-testid="link-back-top"
            >
              Back to top <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  useReveal();
  useScrollProgress();
  return (
    <main className="portfolio-page">
      <Topbar />
      <Hero />
      <Approach />
      <Work />
      <SystemManifesto />
      <Experience />
      <Toolkit />
      <Contact />
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
