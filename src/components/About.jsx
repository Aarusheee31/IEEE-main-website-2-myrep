
const stats = [
  { value: '200', suffix: '+', label: 'ACTIVE MEMBERS' },
  { value: '20', suffix: '', label: 'YEARS OF MAKING' },
  { value: '05', suffix: '', label: 'STUDENT CHAPTERS' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-bg text-fg"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

        {/* Top divider */}
        <div className="mb-16 h-px w-full bg-white/20 sm:mb-20" />

        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">

          {/* Left: Heading */}
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.88] tracking-[-0.065em]">
              Technology is
              <span className="block 	text-accent-text">better</span>
              <span className="block 	text-accent-text">together.</span>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-4 lg:pt-4">
            <p className="max-w-lg text-base leading-8 text-white/65 sm:text-lg sm:leading-[2.2rem]">
              IEEE IGDTUW is where ambitious women engineers find their people,
              their practice, and their permission to take up space.
            </p>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/65 sm:text-lg sm:leading-[2.2rem]">
              Since 2004, we've grown from 33 members into a thriving community
              of 200+ active changemakers, united by a belief that engineering
              should move humanity forward.
            </p>

            <a
              href="#team"
              className="group mt-10 inline-flex items-center gap-5 border-b border-white/60 pb-3 text-sm font-medium tracking-wide transition hover:border-accent hover:	text-accent-text"
            >
              MEET THE COMMUNITY
              <span className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Bottom section: Statistics and image */}
        <div className="mt-20 grid grid-cols-1 gap-10 sm:mt-28 lg:grid-cols-12 lg:gap-8">

          {/* Statistics */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-8">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-white/25 pt-6">
                <p className="text-5xl font-medium tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                  {stat.value}
                  {stat.suffix && (
                    <span className="	text-accent-text">{stat.suffix}</span>
                  )}
                </p>

                <p className="mt-5 text-xs font-medium tracking-wider text-white/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="lg:col-span-4">
            <div className="h-52 overflow-hidden sm:h-64 lg:h-[194px]">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
                alt="Students collaborating around technology"
                className="h-full w-full object-cover grayscale-[20%] transition duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}