import Navbar from './Navbar'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#171717] text-[#f7f4ec]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)',
          backgroundSize: '8.1vw 8.1vw',
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero content */}
      <div className="mx-auto flex min-h-screen max-w-[1800px] flex-col justify-center px-6 pb-24 pt-36 sm:px-10 lg:px-16">

        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.6)]" />

          <p className="text-xs font-semibold tracking-[0.22em] text-white/70 sm:text-sm">
            IEEE STUDENT BRANCH <span className="mx-2">·</span> IGDTUW
          </p>
        </div>

        {/* Main heading */}
        <h1 className="max-w-5xl text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.88] tracking-[-0.065em]">
          Build what
          <br />
          comes{' '}
          <span className="text-[#f47735]">next.</span>
        </h1>

        {/* Description */}
        <p className="mt-10 max-w-xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
          A community of women engineers turning curiosity
          <br className="hidden sm:block" />
          into capability, one experiment, one conversation,
          <br className="hidden sm:block" />
          one brave idea at a time.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#events"
            className="group inline-flex min-h-[64px] items-center gap-5 bg-[#f47735] px-7 text-sm font-semibold tracking-wide text-white transition hover:bg-[#ff8b4a]"
          >
            EXPLORE EVENTS
            <span className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>

          <a
            href="#about"
            className="group inline-flex min-h-[64px] items-center gap-5 border border-white/50 bg-black/10 px-7 text-sm font-semibold tracking-wide text-white transition hover:border-white hover:bg-white/10"
          >
            OUR STORY
            <span className="text-lg transition-transform group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </div>
      </div>

      {/* Bottom-right slide indicator */}
      <div className="absolute bottom-8 right-6 hidden items-center gap-10 text-xs font-medium text-white/80 md:flex lg:right-16">
        <span className="tracking-widest">
          <span className="text-white">01</span> / 04
        </span>

        <p className="max-w-40 text-right leading-5">
          THE NEXT GENERATION
          <br />
          OF ENGINEERS
        </p>
      </div>

      {/* Bottom-left decorative line */}
      <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#f47735]" />
    </section>
  )
}