// People.jsx — IEEE IGDTUW Senior Execom 2026–2027

const BASE = `${import.meta.env.BASE_URL}IEEE Senior Execomm 2026-2027/`;

// ─── Team data ───────────────────────────────────────────────────────────────
// Leadership cluster is shown first and larger; the rest in a uniform grid.
const leadership = [
  {
    id: '01',
    name: 'Himani Gupta',
    role: 'IEEE Chairperson',
    image: `${BASE}HimaniGupta_IEEEChairperson.jpg.jpeg`,
    heicFallback: false,
    initials: 'HG',
  },
  {
    id: '02',
    name: 'Gunjan Aggarwal',
    role: 'IEEE Vice-Chairperson',
    image: `${BASE}Gunjan Aggarwal_IEEE Vice-chairperson.JPG`,
    heicFallback: false,
    initials: 'GA',
  },
  {
    id: '03',
    name: 'Jessica Malik',
    role: 'IEEE General Secretary',
    image: `${BASE}Jessica Malik_IEEE GenSec.jpg`,
    heicFallback: false,
    initials: 'JM',
  },
  {
    id: '04',
    name: 'Anushree Jain',
    role: 'WIE Chairperson',
    image: `${BASE}Anushree Jain_WIE_Chairperson.jpeg`,
    heicFallback: false,
    initials: 'AJ',
  },
  {
    id: '05',
    name: 'Sneha Yadav',
    role: 'WIE Vice-Chairperson',
    image: `${BASE}Sneha Yadav _WIE Vice Chairperson_.jpg`,
    heicFallback: false,
    initials: 'SY',
  },
  {
    id: '06',
    name: 'Muskan Goel',
    role: 'WIE General Secretary',
    image: `${BASE}Muskan Goel_WIE GenSec.jpg.jpeg`,
    heicFallback: false,
    initials: 'MG',
  },
  {
    id: '07',
    name: 'Saanvi Singh',
    role: 'Treasurer',
    image: `${BASE}Saanvi_Singh_Treasurer.jpg`,
    heicFallback: false,
    initials: 'SS',
  },
];

const heads = [
  // Event Management Heads
  {
    id: '08',
    name: 'Aakanksha Jha',
    role: 'Event Management Head',
    image: `${BASE}Aakanksha Jha _ EM Head.jpeg`,
    heicFallback: false,
    initials: 'AJ',
  },
  {
    id: '09',
    name: 'Eshita Nagaria',
    role: 'Event Management Head',
    image: `${BASE}EshitaNagaria_EMHead.jpg`,
    heicFallback: false,
    initials: 'EN',
  },
  {
    id: '10',
    name: 'Likhila Vydana',
    role: 'Event Management Head',
    image: `${BASE}LikhilaVydana_EMHead.jpg`,
    heicFallback: false,
    initials: 'LV',
  },
  // Technical Heads
  {
    id: '11',
    name: 'Aashi Garg',
    role: 'Technical Head',
    image: `${BASE}Aashi Garg_Tech Head.jpg`,
    heicFallback: false,
    initials: 'AG',
  },
  {
    id: '12',
    name: 'Parvati',
    role: 'Technical Head',
    image: `${BASE}PARVATI_TECH HEAD.png`,
    heicFallback: false,
    initials: 'P',
  },
  // Membership Heads
  {
    id: '13',
    name: 'Anushka Goyal',
    role: 'Membership Head',
    image: `${BASE}Anushka Goyal_MEMBERSHIP HEAD.jpg`,
    heicFallback: false,
    initials: 'AG',
  },
  {
    id: '14',
    name: 'Nikita',
    role: 'Membership Head',
    image: `${BASE}Nikita_Membership Head.jpg`,
    heicFallback: false,
    initials: 'N',
  },
  {
    id: '15',
    name: 'Tanishka Sharma',
    role: 'Membership Head',
    image: `${BASE}Tanishka_Sharma_Membership_Head.jpg`,
    heicFallback: false,
    initials: 'TS',
  },
  // Creative Heads
  {
    id: '16',
    name: 'Sanchita Yadav',
    role: 'Creative Head',
    image: `${BASE}Sanchita Yadav_Creative Head.jpg`,
    heicFallback: false,
    initials: 'SY',
  },
  {
    id: '17',
    name: 'Ria Saraswat',
    role: 'Creative Head',
    image: `${BASE}Ria_Saraswat_CreativeHead.png`,
    heicFallback: false,
    initials: 'RS',
  },
  // Media Heads
  {
    id: '18',
    name: 'Ekta Yadav',
    role: 'Media Head',
    image: `${BASE}EktaYadav_MediaHead.jpg`,
    heicFallback: false,
    initials: 'EY',
  },
  {
    id: '19',
    name: 'Tanisha Choudhary',
    role: 'Media Head',
    image: `${BASE}Tanisha Choudhary_Media Head.jpg`,
    heicFallback: false,
    initials: 'TC',
  },
  // PR Heads
  {
    id: '20',
    name: 'Hiti Panghal',
    role: 'PR Head',
    image: `${BASE}Hiti Panghal_PR Head.jpg`,
    heicFallback: false,
    initials: 'HP',
  },
  {
    id: '21',
    name: 'Mehak Taneja',
    role: 'PR Head',
    image: `${BASE}Mehak Taneja_PR Head.jpg`,
    heicFallback: false,
    initials: 'MT',
  },
  {
    id: '22',
    name: 'Vaishnavi Shukla',
    role: 'PR Head',
    image: `${BASE}VAISHNAVI SHUKLA_PR HEAD.jpg`,
    heicFallback: false,
    initials: 'VS',
  },
  // HR Heads
  {
    id: '23',
    name: 'Manya Gupta',
    role: 'HR Head',
    image: `${BASE}Manya Gupta_HR head.jpg`,
    heicFallback: false,
    initials: 'MG',
  },
  {
    id: '24',
    name: 'Unnati',
    role: 'HR Head',
    image: `${BASE}Unnati_HR Head.jpg`,
    heicFallback: false,
    initials: 'U',
  },
  // Sponsorship Heads
  {
    id: '25',
    name: 'Arushi',
    role: 'Sponsorship Head',
    image: `${BASE}Arushi_Sponsorship_Head.jpg.jpeg`,
    heicFallback: false,
    initials: 'A',
  },
  {
    id: '26',
    name: 'Iti Jain',
    role: 'Sponsorship Head',
    image: `${BASE}Iti_Jain_Sponsorship_Head.jpg`,
    heicFallback: false,
    initials: 'IJ',
  },
  // Content Heads
  {
    id: '27',
    name: 'Prisha',
    role: 'Content Head',
    image: `${BASE}Prisha_Content Head.jpg`,
    heicFallback: false,
    initials: 'P',
  },
  {
    id: '28',
    name: 'Eti Jain',
    role: 'Content Head',
    image: `${BASE}Eti_Jain_Content Head.jpg`,
    heicFallback: false,
    initials: 'EJ',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function InitialsAvatar({ initials, large = false }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center ${large ? 'text-4xl' : 'text-2xl'} font-black tracking-tight`}
      style={{
        background:
          'linear-gradient(135deg, var(--palette-queen-blue) 0%, var(--palette-konjo) 100%)',
        color: 'var(--palette-papaya)',
      }}
    >
      {initials}
    </div>
  );
}

function LeaderCard({ member }) {
  return (
    <article className="group min-w-0">
      {/* Portrait */}
      <div className="relative aspect-[3/4] overflow-hidden" style={{ backgroundColor: 'var(--bg-alt)' }}>
        {member.heicFallback || !member.image ? (
          <InitialsAvatar initials={member.initials} large />
        ) : (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="h-full w-full object-cover object-top grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
          />
        )}

        {/* Number badge */}
        <span className="absolute left-4 top-4 text-xs font-semibold tracking-wider text-white drop-shadow-md">
          {member.id}
        </span>

        {/* Bottom gradient overlay on hover */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'linear-gradient(to top, rgba(4,52,115,0.55) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Name and role */}
      <div className="pt-5">
        <h3 className="text-xl font-semibold tracking-[-0.045em] sm:text-2xl">
          {member.name}
        </h3>
        <p
          className="mt-1.5 text-sm font-medium leading-6 sm:text-base"
          style={{ color: 'var(--fg-muted)' }}
        >
          {member.role}
        </p>
        {member.heicFallback && (
          <p className="mt-1 text-[10px] tracking-wider" style={{ color: 'var(--highlight)' }}>
            ⚠ Photo pending conversion
          </p>
        )}
      </div>
    </article>
  );
}

function HeadCard({ member }) {
  return (
    <article className="group min-w-0">
      {/* Portrait */}
      <div
        className="relative aspect-square overflow-hidden"
        style={{ backgroundColor: 'var(--bg-alt)' }}
      >
        {member.heicFallback || !member.image ? (
          <InitialsAvatar initials={member.initials} />
        ) : (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="h-full w-full object-cover object-top grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
          />
        )}

        {/* Bottom gradient on hover */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'linear-gradient(to top, rgba(4,52,115,0.5) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Name and role */}
      <div className="pt-4">
        <h3 className="text-base font-semibold tracking-[-0.04em] sm:text-lg">
          {member.name}
        </h3>
        <p
          className="mt-1 text-xs font-medium leading-5 sm:text-sm"
          style={{ color: 'var(--fg-muted)' }}
        >
          {member.role}
        </p>
      </div>
    </article>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function People() {
  return (
    <section
      id="team"
      className="overflow-hidden bg-[#B2B39D] text-[#043473] dark:bg-[#28518A] dark:text-[#E4D076]"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

        {/* ── Section header ── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">

          {/* Label */}
          <div className="lg:col-span-3">
            <p className="pt-2 text-xs font-semibold tracking-[0.2em]" style={{ color: 'var(--fg-muted)' }}>
              <span style={{ color: 'var(--highlight)' }}>04&nbsp;</span>
              THE PEOPLE
            </p>
          </div>

          {/* Main heading */}
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              <span className="block text-[#043473] dark:text-[#E4D076]">
                Good ideas
              </span>

              <span className="block text-[#043473] dark:text-[#E4D076]">
                need
              </span>

              <span className="block text-[#28518A] dark:text-[#D7D6AE]">
                good
              </span>

              <span className="block text-[#28518A] dark:text-[#D7D6AE]">
                company.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="flex items-end lg:col-span-3 lg:pb-3">
            <div>
              <p
                className="max-w-[290px] text-base leading-7 sm:text-lg sm:leading-8"
                style={{ color: 'var(--fg-muted)' }}
              >
                Meet the Senior Execom team making space for possibility — one
                chapter at a time.
              </p>
              <p className="mt-3 text-xs font-bold tracking-[0.16em] text-[#28518A] dark:text-[#E4D076]">
                2026–2027
              </p>
            </div>
          </div>
        </div>

        {/* ── Leadership grid (3/4 portrait aspect) ── */}
        <div className="mt-16 sm:mt-20">
          <div
            className="mb-6 flex items-center gap-3 border-t pt-6"
            style={{ borderColor: 'var(--border)' }}
          >
            <span
              className="h-px w-6"
              style={{ backgroundColor: 'var(--secondary)' }}
            />
            <p className="text-[10px] font-semibold tracking-[0.2em]" style={{ color: 'var(--fg-muted)' }}>
              LEADERSHIP
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {leadership.map((member) => (
              <LeaderCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* ── Department heads grid (square aspect) ── */}
        <div className="mt-20 sm:mt-24">
          <div
            className="mb-6 flex items-center gap-3 border-t pt-6"
            style={{ borderColor: 'var(--border)' }}
          >
            <span
              className="h-px w-6"
              style={{ backgroundColor: 'var(--secondary)' }}
            />
            <p className="text-[10px] font-semibold tracking-[0.2em]" style={{ color: 'var(--fg-muted)' }}>
              DEPARTMENT HEADS
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
            {heads.map((member) => (
              <HeadCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* ── Bottom caption ── */}
        <div
          className="mt-16 flex flex-col justify-between gap-3 border-t pt-5 text-[10px] font-medium tracking-[0.15em] sm:mt-20 sm:flex-row sm:text-xs"
          style={{
            borderColor: 'var(--border)',
            color: 'var(--fg-muted)',
          }}
        >
          <p>IEEE STUDENT BRANCH · IGDTUW</p>
          <p>THE PEOPLE BEHIND THE PROGRESS · 2026–2027</p>
        </div>

      </div>
    </section>
  );
}