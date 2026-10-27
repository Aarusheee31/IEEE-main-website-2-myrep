const teamMembers = [
  {
    id: '01',
    name: 'Anamika Kumari',
    role: 'IEEE Chairperson',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: '02',
    name: 'Rijja Jain',
    role: 'WIE Chairperson',
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: '03',
    name: 'Khushi Kankheria',
    role: 'IEEE Vice Chairperson',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: '04',
    name: 'Sakshi Bhushan',
    role: 'WIE Vice Chairperson',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85',
  },
]

export default function People() {
  return (
    <section
      id="people"
      className="overflow-hidden bg-bg-alt text-fg"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

        {/* Section heading */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">

          {/* Section label */}
          <div className="lg:col-span-3">
            <p className="pt-2 text-xs font-semibold tracking-[0.2em] text-black/50">
              <span className="text-accent-text">04</span>
              THE PEOPLE
            </p>
          </div>

          {/* Main heading */}
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Good ideas
              <span className="block">need</span>
              <span className="block text-accent-text">
                good
              </span>
              <span className="block text-accent-text">
                company.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="flex items-end lg:col-span-3 lg:pb-3">
            <p className="max-w-[290px] text-base leading-7 text-black/50 sm:text-lg sm:leading-8">
              Meet the people making space for possibility, one chapter at a
              time.
            </p>
          </div>
        </div>

        {/* Team member cards */}
        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">

          {teamMembers.map((member) => (
            <article key={member.id} className="group min-w-0">

              {/* Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#d7d4ca]">

                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Number */}
                <span className="absolute left-5 top-5 text-xs font-semibold tracking-wider text-white drop-shadow-md">
                  {member.id}
                </span>

                {/* Bottom gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Name and role */}
              <div className="pt-5">
                <h3 className="text-xl font-semibold tracking-[-0.045em] sm:text-2xl">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-black/45 sm:text-base">
                  {member.role}
                </p>
              </div>

            </article>
          ))}

        </div>

        {/* Bottom caption */}
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-black/15 pt-5 text-[10px] font-medium tracking-[0.15em] text-black/40 sm:mt-20 sm:flex-row sm:text-xs">
          <p>IEEE STUDENT BRANCH · IGDTUW</p>
          <p>THE PEOPLE BEHIND THE PROGRESS</p>
        </div>

      </div>
    </section>
  )
}