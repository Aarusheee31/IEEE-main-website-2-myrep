import { useEffect, useRef, useState } from 'react'
import './Footer.css'

const LINKEDIN_URL = 'https://www.linkedin.com/company/ieee-igdtuw/'
const INSTAGRAM_URL = 'https://www.instagram.com/ieeeigdtuw'
const CONTACT_EMAIL = 'igdtuwieee@gmail.com'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const LinkedInIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M8 10.5V16M12 16v-3a2.2 2.2 0 0 1 4.4 0V16M12 10.5V16" />
    <circle cx="8" cy="7.6" r="0.6" fill="currentColor" />
  </svg>
)

const InstagramIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.7" fill="currentColor" />
  </svg>
)

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7.5 8 6 8-6" />
  </svg>
)

const socials = [
  { label: 'LinkedIn', href: LINKEDIN_URL, Icon: LinkedInIcon, external: true },
  { label: 'Instagram', href: INSTAGRAM_URL, Icon: InstagramIcon, external: true },
  { label: 'Email', href: `mailto:${CONTACT_EMAIL}`, Icon: MailIcon, external: false },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const footerRef = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = footerRef.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

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
        className="relative overflow-hidden bg-accent text-[#f8f5ec]"
      >
        {/* Decorative circle */}
        <div className="pointer-events-none absolute -right-32 -top-72 h-[450px] w-[450px] rounded-full border border-white/25 sm:-right-24 sm:-top-80 sm:h-[600px] sm:w-[600px]" />

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

                <span className="block bg-accent text-ink">
                  under
                </span>

                <span className="block bg-accent text-ink">
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

      {/* FOOTER */}
      <footer
        ref={footerRef}
        className={`ieee-footer${revealed ? ' is-visible' : ''}`}
      >
        <div className="ieee-footer__inner">

          <div className="ieee-footer__grid">

            {/* Brand + tagline */}
            <div className="ieee-footer__col ieee-footer__brand">
              <a
                href="#home"
                className="ieee-footer__logo"
                aria-label="IEEE IGDTUW home"
              >
                {/* Logo PNG used as a mask so it can take the footer's colour */}
                <span
                  className="ieee-footer__logo-mark"
                  aria-hidden="true"
                  style={{
                    '--logo-url': `url(${import.meta.env.BASE_URL}ieee-logo.png)`,
                  }}
                />
              </a>

              <p className="ieee-footer__tagline">
                Advancing technology for humanity, powered by women who
                engineer the future.
              </p>
            </div>

            {/* Contact */}
            <div className="ieee-footer__col ieee-footer__contact">
              <h3 className="ieee-footer__label">Contact us</h3>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="ieee-footer__mail"
              >
                {CONTACT_EMAIL}
                <span className="ieee-footer__arrow" aria-hidden="true">↗</span>
              </a>

              <address className="ieee-footer__address">
                Kashmere Gate,
                <br />
                Delhi 110006
              </address>
            </div>

            {/* Social */}
            <div className="ieee-footer__col ieee-footer__social">
              <h3 className="ieee-footer__label">Follow us</h3>

              <ul className="ieee-footer__tube">
                {socials.map(({ label, href, Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      title={label}
                      className="ieee-footer__icon"
                      {...(external
                        ? { target: '_blank', rel: 'noreferrer noopener' }
                        : {})}
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ieee-footer__rule" />

          {/* Copyright */}
          <div className="ieee-footer__legal">
            <p>© {new Date().getFullYear()} IEEE IGDTUW</p>
            <span aria-hidden="true">·</span>
            <p>Made with intent</p>

            <a href="#home" className="ieee-footer__top">
              BACK TO TOP
              <span className="ieee-footer__arrow" aria-hidden="true">↑</span>
            </a>
          </div>

        </div>
      </footer>
    </>
  )
}