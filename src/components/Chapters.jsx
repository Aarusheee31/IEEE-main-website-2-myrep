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
  const [activeChapter, setActiveChapter] = useState('01')

  return (
    <section
      id="chapters"
      className="bg-bg text-fg"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

        {/* Top label */}
        <div className="flex items-center justify-between border-b border-white/20 pb-9">
          <span className="text-xs font-bold tracking-[0.2em] text-accent-text">
            03
          </span>

          <span className="text-[10px] font-semibold tracking-[0.2em] text-white/55 sm:text-xs">
            FIND YOUR FREQUENCY
          </span>
        </div>

        {/* Heading and description */}
        <div className="grid grid-cols-1 gap-8 py-16 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-24">
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
              Your curiosity
              <span className="block text-accent-text">
                has a chapter.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-4">
            <p className="max-w-md text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Different disciplines. Same energy. Plug into the part of IEEE
              that makes you want to stay late.
            </p>
          </div>
        </div>

        {/* Chapter list */}
        <div className="border-t border-white/20">
          {chapters.map((chapter) => {
            const isActive = activeChapter === chapter.id

            return (
              <a
                key={chapter.id}
                href={chapter.link}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setActiveChapter(chapter.id)}
                onFocus={() => setActiveChapter(chapter.id)}
                className="group grid grid-cols-[40px_70px_1fr_35px] items-center gap-x-3 border-b border-white/20 py-7 transition-colors duration-300 hover:bg-white/[0.025] sm:grid-cols-[70px_100px_1fr_1.2fr_45px] sm:gap-x-5 sm:py-9 lg:grid-cols-[100px_160px_1fr_1.3fr_55px] lg:gap-x-8 lg:py-10"
              >
                {/* Number */}
                <span className="text-xs font-medium tracking-wider text-white/50">
                  {chapter.id}
                </span>

                {/* Acronym */}
                <span
                  className={`text-2xl font-bold tracking-[-0.07em] transition-colors duration-300 sm:text-4xl lg:text-5xl ${
                    isActive
                      ? 'text-accent-text'
                      : 'text-[#f5f2e9]'
                  }`}
                >
                  {chapter.acronym}
                </span>

                {/* Name */}
                <span
                  className={`text-sm font-semibold transition-colors duration-300 sm:text-base lg:text-lg ${
                    isActive
                      ? 'text-accent-text'
                      : 'text-[#f5f2e9]'
                  }`}
                >
                  {chapter.name}
                </span>

                {/* Description: hidden on narrow screens */}
                <span className="hidden max-w-md text-sm leading-6 text-white/55 sm:block lg:text-base lg:leading-7">
                  {chapter.description}
                </span>

                {/* Arrow */}
                <span
                  aria-hidden="true"
                  className={`justify-self-end text-2xl transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                    isActive
                      ? 'text-accent-text'
                      : 'text-[#f5f2e9]'
                  }`}
                >
                  ↗
                </span>
              </a>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col justify-between gap-3 text-[10px] tracking-[0.15em] text-white/40 sm:flex-row sm:text-xs">
          <span>IEEE STUDENT BRANCH · IGDTUW</span>
          <span>EXPLORE · CONNECT · BUILD</span>
        </div>
      </div>
    </section>
  )
}