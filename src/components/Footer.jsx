import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setMessage('Please enter your email address.')
      return
    }

    setMessage(
      'Thanks for your interest! Subscription functionality will be available soon.'
    )
    setEmail('')
  }

  return (
    <>
      {/* JOIN / SUBSCRIBE SECTION */}
      <section
        id="join"
        className="relative overflow-hidden bg-[#D7D6AE] text-[#043473] dark:bg-[#476998] dark:text-[#E4D076]"
      >
        {/* Decorative circle */}
        <div className="pointer-events-none absolute -right-32 -top-72 h-[450px] w-[450px] rounded-full border border-[#B2B39D] dark:border-white/25 sm:-right-24 sm:-top-80 sm:h-[600px] sm:w-[600px]" />
        <div className="relative mx-auto max-w-[1800px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

          {/* Top label */}
          <div className="flex items-center justify-between border-b border-white/35 pb-8">
            <span className="text-xs font-bold tracking-[0.2em]">
              05
            </span>

            <span className="text-[10px] font-semibold tracking-[0.2em] sm:text-xs">
              STAY CURIOUS
            </span>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">

            {/* Heading */}
            <div className="lg:col-span-7">
              <h2 className="text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
                <span className="block">The future is</span>

                <span className="block text-ink">
                  under
                </span>

                <span className="block text-ink">
                  construction.
                </span>
              </h2>
            </div>

            {/* Subscription form */}
            <div className="flex flex-col justify-center lg:col-span-4 lg:col-start-9">
              <p className="max-w-sm text-base leading-7 sm:text-lg sm:leading-8">
                Get the signal when we announce what’s next.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="mt-10"
              >
                <div className="flex items-center gap-4 border-b border-white/75 pb-4">

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setMessage('')
                    }}
                    placeholder="your@email.com"
                    aria-label="Your email address"
                    required
                    className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/70 focus:placeholder:text-white/40"
                  />

                  <button
                    type="submit"
                    className="group flex shrink-0 items-center gap-3 text-xs font-semibold transition-opacity hover:opacity-70"
                  >
                    SUBSCRIBE

                    <span className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </button>
                </div>

                {message && (
                  <p
                    aria-live="polite"
                    className="mt-4 text-sm leading-6 text-white"
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BLACK FOOTER */}
      
        <footer className="bg-[#043473] text-[#D7D6AE] dark:bg-[#D7D6AE] dark:text-[#043473]">
        <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">

          {/* Main footer row */}
          <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:items-center lg:grid-cols-3 lg:py-16">

            {/* Brand */}
            <a
              href="#home"
              className="flex w-fit items-center gap-3"
              aria-label="IEEE IGDTUW home"
            >
              
             <span className="flex h-8 items-center bg-[#D7D6AE] px-2 text-xs font-bold text-[#043473] dark:bg-[#043473] dark:text-[#D7D6AE]">
              IEEE
             </span>

              
             <span className="text-2xl font-bold tracking-[-0.06em] text-[#D7D6AE] dark:text-[#043473] sm:text-3xl">
              IGDTUW.
             </span>

            </a>

            {/* Description */}
            <div className="text-sm leading-6 text-[#043473] dark:text-[#D7D6AE] lg:justify-self-center">
              <p>Advancing technology for humanity.</p>
              <p>New Delhi, India · Est. 2004</p>
            </div>


            {/* Social links */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold tracking-wider sm:justify-end">

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-[#D7D6AE] transition hover:text-[#E4D076] dark:text-[#043473] dark:hover:text-[#28518A]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-[#D7D6AE] transition hover:text-[#E4D076] dark:text-[#043473] dark:hover:text-[#28518A]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9.5h3.8V21H3.3V9.5Zm6.1 0H13v1.6h.1a4.1 4.1 0 0 1 3.7-2c4 0 4.8 2.5 4.8 5.8V21h-3.8v-5.4c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9.4V9.5Z" />
                </svg>
              </a>

              <a
                href="mailto:ieee@igdtuw.ac.in"
                className="group flex items-center gap-2 text-[#D7D6AE] transition hover:text-[#E4D076] dark:text-[#043473] dark:hover:text-[#28518A]"
              >
                EMAIL US
                <span className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col gap-3 border-t border-[#B2B39D] py-6 text-xs tracking-wide text-[#043473] dark:border-white/20 dark:text-[#D7D6AE] sm:flex-row sm:items-center">
            <span className="hidden sm:inline">·</span>
            <p>Made with intent</p>
          </div>

        </div>
      </footer>
    </>
  )
}