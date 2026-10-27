import Navbar from './Navbar';
import CrystalizedBall from './CrystalizedBall';

export default function Hero() {
  return (
      <section
          id="home"
          className="relative isolate min-h-screen overflow-hidden bg-bg text-fg"
      >
        {/* Background gradient using IEEE brand palette */}
        <div
            className="pointer-events-none absolute inset-0 -z-30"
            style={{
              background: `
            radial-gradient(
              ellipse at 78% 42%,
              var(--palette-queen-blue) 0%,
              var(--bg-alt) 38%,
              var(--bg) 78%
            )
          `,
            }}
        />

        {/* Decorative grid */}
        <div
            className="pointer-events-none absolute inset-0 -z-20 opacity-[0.16]"
            style={{
              backgroundImage: `
            linear-gradient(to right, var(--palette-sage) 1px, transparent 1px),
            linear-gradient(to bottom, var(--palette-sage) 1px, transparent 1px)
          `,
              backgroundSize: '72px 72px',
              maskImage:
                  'linear-gradient(to right, transparent, black 35%, black 100%)',
              WebkitMaskImage:
                  'linear-gradient(to right, transparent, black 35%, black 100%)',
            }}
        />

        {/* Ambient brand-colour glow */}
        <div
            className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full opacity-20 blur-[100px]"
            style={{ backgroundColor: 'var(--palette-papaya)' }}
        />

        {/* Navbar */}
        <Navbar />

        {/* Crystalized Ball */}
        <div
            className="pointer-events-auto absolute right-[-16%] top-[16%] -z-10
                   h-[440px] w-[440px]
                   sm:right-[-8%] sm:top-[12%] sm:h-[580px] sm:w-[580px]
                   lg:right-[1%] lg:top-1/2 lg:h-[min(76vh,760px)] lg:w-[min(76vh,760px)]
                   lg:-translate-y-1/2"
            aria-hidden="true"
        >
          <div className="h-full w-full">
            <CrystalizedBall
                preset="abyss"
                color="#E4D076"
                theme="dark"
                size={0.72}
                strands={5}
                crackle={0.65}
                flares={0.6}
                glow={0.9}
                sparks={0.5}
                particleCount={12000}
                fill={0.55}
                motion="orbit"
                particleShape="round"
                depth={0.7}
                sway={0.6}
                twinkle={0.55}
                haze={0.6}
                speed={0.8}
                dustSpeed={0.8}
                interactive
                hoverStrength={0.7}
                intro
            />
          </div>
        </div>

        {/* Hero content */}
        <div className="mx-auto flex min-h-screen max-w-[1800px] flex-col justify-center px-6 pb-28 pt-36 sm:px-10 lg:px-16">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-4">
          <span
              className="h-3 w-3 shrink-0 rounded-full"
              style={{
                backgroundColor: 'var(--highlight)',
                boxShadow: '0 0 22px var(--glow)',
              }}
          />

            <p className="text-xs font-semibold tracking-[0.22em] text-fg-muted sm:text-sm">
              IEEE STUDENT BRANCH
              <span className="mx-2">·</span>
              IGDTUW
            </p>
          </div>

          {/* Main heading */}
          <h1 className="relative z-10 max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-black leading-[0.88] tracking-[-0.065em]">
            Build what
            <br />
            comes{' '}
            <span className="relative inline-block">
            <span className="relative z-10 text-highlight">next.</span>

            <span
                className="absolute bottom-[2%] left-0 -z-0 h-[16%] w-full opacity-50"
                style={{ backgroundColor: 'var(--secondary)' }}
            />
          </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-base leading-8 text-fg-muted sm:text-lg sm:leading-9">
            A community of women engineers turning curiosity into capability,
            one experiment, one conversation, and one brave idea at a time.
          </p>

          {/* Call-to-action buttons */}
          <div className="relative z-20 mt-9 flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
            <a
                href="#events"
                className="group inline-flex min-h-[60px] items-center gap-5 rounded-full px-7 text-sm font-bold tracking-wide shadow-lg transition duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'var(--accent-text)',
                  boxShadow: '0 8px 28px var(--glow)',
                }}
            >
              EXPLORE EVENTS

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
            </a>

            {/* Secondary CTA */}
            <a
                href="#about"
                className="group inline-flex min-h-[60px] items-center gap-5 rounded-full border px-7 text-sm font-bold tracking-wide transition duration-300 hover:-translate-y-1"
                style={{
                  borderColor: 'var(--border)',
                  backgroundColor: 'var(--surface)',
                  color: 'var(--fg)',
                }}
            >
              OUR STORY

              <span className="text-lg transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
            </a>
          </div>

          {/* Brand statement */}
          <div className="mt-12 flex items-center gap-3">
          <span
              className="h-px w-12"
              style={{ backgroundColor: 'var(--secondary)' }}
          />

            <p className="text-[10px] font-semibold tracking-[0.2em] text-fg-muted sm:text-xs">
              INNOVATE
              <span className="mx-2 text-highlight">/</span>
              COLLABORATE
              <span className="mx-2 text-highlight">/</span>
              INSPIRE
            </p>
          </div>
        </div>

        {/* Bottom-right indicator */}
        <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-8 text-xs font-semibold text-fg-muted md:flex lg:right-16">
        <span className="tracking-widest">
          <span className="text-highlight">01</span> / 04
        </span>

          <p className="max-w-40 text-right leading-5">
            THE NEXT GENERATION
            <br />
            OF ENGINEERS
          </p>
        </div>

        {/* Bottom accent line */}
        <div
            className="absolute bottom-0 left-0 h-1.5 w-1/3"
            style={{ backgroundColor: 'var(--highlight)' }}
        />
      </section>
  );
}