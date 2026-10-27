import { useEffect, useState } from 'react'

const events = [
  {
    id: 1,
    day: '08',
    month: 'FEB',
    year: '2025',
    title: 'WIEmpower 5.0',
    category: 'WOMEN IN TECH LEADERSHIP',
    description:
      'An inspiring gathering celebrating women in technology, leadership, and innovation. Connect with fellow engineers, learn from industry leaders, and discover new opportunities.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85',
    status: 'PAST EVENT',
    type: 'Conference',
  },
  {
    id: 2,
    day: '11',
    month: 'SEP',
    year: '2024',
    title: 'NASA to CEO',
    category: 'INNOVATION & ENTREPRENEURSHIP',
    description:
      'Explore the journey from groundbreaking scientific ideas to real-world impact. An event designed to inspire students to think beyond boundaries and turn ambitious ideas into meaningful solutions.',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85',
    status: 'PAST EVENT',
    type: 'Workshop',
  },
  {
    id: 3,
    day: '08',
    month: 'FEB',
    year: '2024',
    title: 'Quadcopter',
    category: 'HANDS-ON DRONE WORKSHOP',
    description:
      'Hands-on Drone Workshop · 2024. Join the IEEE IGDTUW community for the next edition and stay close to the signal.',
    image:
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=85',
    status: 'PAST EVENT',
    type: 'Technical Workshop',
  },
]

function EventModal({ event, onClose }) {
  useEffect(() => {
    if (!event) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [event, onClose])

  if (!event) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:p-8"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
        className="relative grid w-full max-w-5xl overflow-hidden bg-surface text-fg shadow-2xl md:min-h-[500px] md:grid-cols-2"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close event details"
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-3xl text-white transition hover:rotate-90 hover:bg-accent md:bg-black/35"
        >
          ×
        </button>

        {/* Modal image */}
        <div className="relative h-64 overflow-hidden sm:h-80 md:h-full">
          <img
            src={event.image}
            alt={event.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-xs font-semibold tracking-[0.2em]">
              IEEE IGDTUW
            </p>
            <p className="mt-2 text-sm text-white/80">{event.year}</p>
          </div>
        </div>

        {/* Modal content */}
        <div className="flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-14 md:px-12">
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-widest text-accent-text">
            <span>▦</span>
            {event.status}
          </p>

          <h3
            id="event-modal-title"
            className="text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl"
          >
            {event.title}
          </h3>

          <p className="mt-3 text-xs font-semibold tracking-wider text-black/45">
            {event.category}
          </p>

          <p className="mt-6 text-base leading-7 text-black/60">
            {event.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-black/50">
            <span className="border border-black/15 px-3 py-2">
              {event.type}
            </span>
            <span className="border border-black/15 px-3 py-2">
              {event.day} {event.month} {event.year}
            </span>
          </div>

          <a
            href="#join"
            onClick={onClose}
            className="group mt-8 inline-flex min-h-16 w-fit items-center gap-5 bg-accent px-6 text-sm font-semibold tracking-wide text-white transition hover:bg-accent-hover"
          >
            REGISTER INTEREST
            <span className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>

          <p className="mt-4 text-xs leading-5 text-black/40">
            This event has concluded. Follow IEEE IGDTUW for future events.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <>
      <section
        id="events"
        className="bg-bg-alt text-fg"
      >
        <div className="mx-auto max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

          {/* Section heading */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

            <div className="lg:col-span-3">
              <p className="pt-2 text-xs font-semibold tracking-[0.22em] text-black/50">
                <span className="text-accent-text">02</span>
                WHAT'S HAPPENING
              </p>
            </div>

            <div className="lg:col-span-6">
              <h2 className="text-[clamp(3.5rem,8vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.07em]">
                Make your
                <span className="block text-accent-text">
                  next move.
                </span>
              </h2>
            </div>

            <div className="flex items-start justify-between gap-5 lg:col-span-3 lg:pt-16">
              <p className="max-w-[240px] text-base leading-[1.8] text-black/55 sm:text-lg">
                Workshops, conversations, and hands-on chaos for the curious.
                Find your next room.
              </p>

              <a
                href="#event-list"
                aria-label="Explore events"
                className="mt-3 flex h-12 w-10 shrink-0 items-center justify-center rounded-full border border-black/40 text-2xl transition hover:border-accent hover:bg-accent hover:text-white"
              >
                ↗
              </a>
            </div>
          </div>

          {/* Event cards */}
          <div
            id="event-list"
            className="mt-16 grid grid-cols-1 gap-5 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
          >
            {events.map((event) => (
              <article
                key={event.id}
                className="group relative min-h-[440px] overflow-hidden bg-black sm:min-h-[500px]"
              >
                {/* Event image */}
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Card overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/95" />

                {/* Date */}
                <div className="absolute left-7 top-7 z-10 text-white">
                  <p className="text-5xl font-bold leading-none tracking-[-0.06em] sm:text-6xl">
                    {event.day}
                  </p>

                  <p className="mt-3 text-xs font-medium tracking-widest">
                    {event.month}
                  </p>
                </div>

                {/* Event information */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white sm:p-8">
                  <p className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-white/55">
                    {event.category}
                  </p>

                  <h3 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                    {event.title}
                  </h3>

                  <button
                    type="button"
                    onClick={() => setSelectedEvent(event)}
                    className="group/button mt-8 inline-flex items-center gap-4 border-b border-white/50 pb-3 text-xs font-medium tracking-widest transition hover:border-accent hover:text-accent-text"
                  >
                    VIEW EVENT
                    <span className="text-xl transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-1">
                      ↗
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom caption */}
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-black/15 pt-5 text-xs tracking-wider text-black/45 sm:flex-row">
            <p>IEEE STUDENT BRANCH · IGDTUW</p>
            <p>PAST EVENTS / 2024–2025</p>
          </div>
        </div>
      </section>

      {/* Event details popup */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  )
}