
import ScrollFloat from './ScrollFloat';
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
            <ScrollFloat
                effect="float"
                splitBy="chars"
                direction="up"
                order="start"
                fromColor="currentColor"
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
                distance={120}
                stretch={2.3}
                smoothing={0}
                textClassName="technology-heading-text"
            >
              Technology is better together.
            </ScrollFloat>
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
              href="#people"
              style={{ color: 'var(--heading)', borderColor: 'var(--heading)' }}
              className="group mt-10 inline-flex items-center gap-5 border-b pb-3 text-sm font-medium tracking-wide !text-[var(--heading)] transition hover:opacity-70"
            >
              MEET THE COMMUNITY
              <span className="text-xl !text-[var(--heading)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
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

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}