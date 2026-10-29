import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ------------------------------------------------------------------
   1. EDIT THIS: your questions and answers.
   The answers are general placeholder text. Replace them with your
   branch's real details (links, fees, social handles, etc.).
------------------------------------------------------------------- */
const FAQS = [
  {
    q: "What benefits do I get as a student member of IEEE?",
    a: "Technical communities, workshops and competitions, plus networking, learning resources and career-building opportunities.",
  },
  {
    q: "How can I stay updated on upcoming IEEE events?",
    a: "Follow our social media handles, check the Events section of this website, and join the branch community groups.",
  },
  {
    q: "Are IEEE events free for members?",
    a: "Many branch events are free or discounted for members. Larger conferences may charge a registration fee, and each event page lists the details.",
  },
  {
    q: "What types of conferences and events does IEEE host?",
    a: "Conferences, hackathons, workshops, webinars, expert talks and competitions across engineering and computing.",
  },
  {
    q: "How can I obtain IEEE research papers and publications?",
    a: "Through IEEE Xplore, via your IEEE membership or your institution's library subscription.",
  },
];

/* ------------------------------------------------------------------
   2. EDIT THIS: colours for each theme.
   These are matched by eye to your site's screenshots, so tweak any
   hex value here if a colour looks slightly off.
   Light theme: cream background, navy text.
   Dark theme:  blue background, gold text.
   Cards flip to the opposite look on the back.
------------------------------------------------------------------- */
const THEMES = {
  light: {
    bg: "#d4d3a6",
    heading: "#0a3a85",
    sub: "#2c5aa0",
    frontBg: "#e4e2ba",
    frontBorder: "rgba(10,58,133,0.28)",
    frontText: "#0a3a85",
    hint: "#4a6aa5",
    icon: "#0a3a85",
    notch: "rgba(10,58,133,0.3)",
    backBg: "#0a3a85",
    backBorder: "#0a3a85",
    backText: "#EBCE5D",
    backNotch: "#EBCE5D",
    focus: "#0a3a85",
  },
  dark: {
    bg: "#0b3a80",
    heading: "#E8D27A",
    sub: "#c8d6ea",
    frontBg: "#08306d",
    frontBorder: "rgba(232,210,122,0.35)",
    frontText: "#E8D27A",
    hint: "#a9c6db",
    icon: "#E8D27A",
    notch: "rgba(232,210,122,0.35)",
    backBg: "#e3dca4",
    backBorder: "#e3dca4",
    backText: "#0a3a85",
    backNotch: "#0a3a85",
    focus: "#E8D27A",
  },
};

/* ------------------------------------------------------------------
   3. Theme detection.
   Watches the page for a "dark" class or a data-theme / data-mode
   attribute on <html> or <body> and updates when your toggle changes it.
   If the FAQ doesn't switch when you press the toggle, tell me how your
   ThemeProvider stores the theme and I'll connect to it directly.
------------------------------------------------------------------- */
const ATTRS = ["class", "data-theme", "data-mode", "data-color-scheme", "theme"];

function readIsDark() {
  const els = [document.documentElement, document.body];
  for (const el of els) {
    if (!el) continue;
    const cls = el.className || "";
    if (typeof cls === "string") {
      if (/\bdark\b/i.test(cls)) return true;
      if (/\blight\b/i.test(cls)) return false;
    }
    for (const a of ATTRS.slice(1)) {
      const v = el.getAttribute(a);
      if (v) return v.toLowerCase().includes("dark");
    }
    const cs = el.style && el.style.colorScheme;
    if (cs) return cs.includes("dark");
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function useIsDark() {
  const [isDark, setIsDark] = useState(() =>
    typeof document === "undefined" ? false : readIsDark()
  );

  useEffect(() => {
    const update = () => setIsDark(readIsDark());
    update();
    const obs = new MutationObserver(update);
    [document.documentElement, document.body].forEach((el) =>
      obs.observe(el, { attributes: true, attributeFilter: ATTRS })
    );
    return () => obs.disconnect();
  }, []);

  return isDark;
}

function ChipIcon({ color }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </svg>
  );
}

function FlipCard({ item, reduce, t }) {
  const [flipped, setFlipped] = useState(false);

  const face = {
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transition: reduce
      ? "none"
      : "background-color .3s, border-color .3s, color .3s",
  };

  return (
    <div
      className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]"
      style={{ perspective: 900 }}
    >
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={item.q}
        className="relative block h-56 w-full rounded-xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{ outlineColor: t.focus }}
      >
        <motion.span
          className="absolute inset-0 block"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={
            reduce
              ? { duration: 0 }
              : { type: "spring", stiffness: 140, damping: 18 }
          }
        >
          {/* FRONT: the question */}
          <span
            aria-hidden={flipped}
            className="absolute inset-0 flex flex-col rounded-xl border p-5"
            style={{
              ...face,
              background: t.frontBg,
              borderColor: t.frontBorder,
            }}
          >
            <span
              className="mx-auto mb-4 block h-1.5 w-10 rounded-full"
              style={{ background: t.notch }}
            />
            <ChipIcon color={t.icon} />
            <span
              className="mt-3 block text-base font-semibold leading-snug"
              style={{ color: t.frontText }}
            >
              {item.q}
            </span>
            <span className="mt-auto block text-xs" style={{ color: t.hint }}>
              Flip for the answer
            </span>
          </span>

          {/* BACK: the answer */}
          <span
            aria-hidden={!flipped}
            className="absolute inset-0 flex flex-col rounded-xl border p-5"
            style={{
              ...face,
              background: t.backBg,
              borderColor: t.backBorder,
              transform: "rotateY(180deg)",
            }}
          >
            <span
              className="mx-auto mb-4 block h-1.5 w-10 rounded-full"
              style={{ background: t.backNotch }}
            />
            <span
              className="block text-sm leading-relaxed sm:text-base"
              style={{ color: t.backText }}
            >
              {item.a}
            </span>
          </span>
        </motion.span>
      </button>
    </div>
  );
}

export default function FAQ() {
  const reduce = useReducedMotion();
  const isDark = useIsDark();
  const t = isDark ? THEMES.dark : THEMES.light;

  return (
    <section
      id="faq"
      className="px-4 py-16 sm:px-6 sm:py-24"
      style={{
        background: t.bg,
        transition: reduce ? "none" : "background-color .3s",
      }}
    >
      <div className="mx-auto max-w-5xl">
        <h2
          className="text-center text-3xl font-bold sm:text-4xl"
          style={{ color: t.heading }}
        >
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-center" style={{ color: t.sub }}>
          Tap a card to flip it.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {FAQS.map((item) => (
            <FlipCard key={item.q} item={item} reduce={reduce} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}