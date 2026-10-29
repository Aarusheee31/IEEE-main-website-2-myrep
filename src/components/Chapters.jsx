import { useState } from 'react'

const chapters = [
  {
    id: '01',
    acronym: 'WIE',
    name: 'Women in Engineering',
    description:
      'A room for bold ideas, brave questions, and the next generation of women leaders.',
    link: 'https://wie.ieee.org/',
  },
  {
    id: '02',
    acronym: 'CS',
    name: 'Computer Society',
    description:
      'Building the systems, communities, and open-source futures we want to see.',
    link: 'https://www.computer.org/',
  },
  {
    id: '03',
    acronym: 'RAS',
    name: 'Robotics & Automation',
    description:
      'From first prototype to flight-ready thinking. Make something move.',
    link: 'https://www.ieee-ras.org/',
  },
  {
    id: '04',
    acronym: 'IAS',
    name: 'Industry Applications',
    description:
      'Bringing engineering out of the lab and into the world around us.',
    link: 'https://ias.ieee.org/',
  },
]

export default function Chapters() {
  const [activeChapter, setActiveChapter] = useState(null)

  return (
    <section id="chapters" className="scroll-mt-24 bg-bg text-fg">
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

        {/* Top label */}
        <div
          className="flex items-center justify-between border-b pb-9"
          style={{ borderColor: 'var(--chapter-line)' }}
        >
          <span
            className="text-xs font-bold tracking-[0.2em]"
            style={{ color: 'var(--heading)' }}
          >
            03
          </span>

          <span
            className="text-[10px] font-semibold tracking-[0.2em] sm:text-xs"
            style={{ color: 'var(--chapter-muted)' }}
          >
            FIND YOUR FREQUENCY
          </span>
        </div>

        {/* Heading and description */}
        <div className="grid grid-cols-1 gap-8 py-16 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-24">
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
              Your curiosity
              <span className="block" style={{ color: 'var(--heading)' }}>
                has a chapter.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-4">
            <p
              className="max-w-md text-base leading-7 sm:text-lg sm:leading-8"
              style={{ color: 'var(--chapter-muted)' }}
            >
              Different disciplines. Same energy. Plug into the part of IEEE
              that makes you want to stay late.
            </p>
          </div>
        </div>

        {/* Chapter list */}
        <div className="border-t" style={{ borderColor: 'var(--chapter-line)' }}>
          {chapters.map((chapter) => {
            const isActive = activeChapter === chapter.id
            const toneStyle = {
              color: isActive ? 'var(--chapter-hover)' : 'var(--fg)',
            }
            const rowStyle = {
            borderColor: 'var(--chapter-line)',
            backgroundColor: isActive ? 'var(--chapter-hover-bg)' : 'transparent',
           }

            return (
              <a
                key={chapter.id}
                href={chapter.link}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setActiveChapter(chapter.id)}
                onMouseLeave={() => setActiveChapter(null)}
                onFocus={() => setActiveChapter(chapter.id)}
                onBlur={() => setActiveChapter(null)}
                style={rowStyle}
                className="group grid grid-cols-[40px_70px_1fr_35px] items-center gap-x-3 border-b py-7 transition-all duration-300 sm:grid-cols-[70px_100px_1fr_1.2fr_45px] sm:gap-x-5 sm:py-9 lg:grid-cols-[100px_160px_1fr_1.3fr_55px] lg:gap-x-8 lg:py-10"
              >
                {/* Number */}
                <span
                  className="text-xs font-medium tracking-wider"
                  style={{ color: 'var(--chapter-muted)' }}
                >
                  {chapter.id}
                </span>

                {/* Acronym */}
                <span
                  className="text-2xl font-bold tracking-[-0.07em] transition-colors duration-300 sm:text-4xl lg:text-5xl"
                  style={toneStyle}
                >
                  {chapter.acronym}
                </span>

                {/* Name */}
                <span
                  className="text-sm font-semibold transition-colors duration-300 sm:text-base lg:text-lg"
                  style={toneStyle}
                >
                  {chapter.name}
                </span>

                {/* Description */}
                <span
                  className="hidden max-w-md text-sm leading-6 sm:block lg:text-base lg:leading-7"
                  style={{ color: 'var(--chapter-muted)' }}
                >
                  {chapter.description}
                </span>

                {/* Arrow */}
                <span
                  aria-hidden="true"
                  className="justify-self-end text-2xl transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={toneStyle}
                >
                  ↗
                </span>
              </a>
            )
          })}
        </div>

        {/* Footer */}
        <div
          className="mt-8 flex flex-col justify-between gap-3 text-[10px] tracking-[0.15em] sm:flex-row sm:text-xs"
          style={{ color: 'var(--chapter-muted)' }}
        >
          <span>IEEE STUDENT BRANCH · IGDTUW</span>
          <span>EXPLORE · CONNECT · BUILD</span>
        </div>
      </div>
    </section>
  )
}