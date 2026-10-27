
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EVENTS', href: '#events' },
  { label: 'CHAPTERS', href: '#chapters' },
  { label: 'PEOPLE', href: '#team' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10">
      <nav className="mx-auto flex min-h-[88px] max-w-[1800px] items-center justify-between px-6 sm:px-10 lg:px-16">

        {/* IEEE Branding */}
        <a href="#home" className="flex shrink-0 items-center gap-3">
          <span className="bg-[#f7f4ec] px-2.5 py-2 text-xs font-bold text-black">
            IEEE
          </span>

          <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            IGDTUW<span className="text-accent">.</span>
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="text-sm font-medium text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? 'CLOSE ×' : 'MENU ☰'}
        </button>

        {/* Navigation links */}
        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-black/95 p-6 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm font-medium tracking-wide text-white/75 transition hover:text-white md:py-2"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#join"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3 border-b border-accent py-3 text-sm font-medium tracking-wide text-white transition hover:text-accent md:py-2"
          >
            JOIN US
            <span className="text-lg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        {/* Theme toggle */}
        <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex items-center gap-2 text-xs text-white/70 transition hover:text-white"
        >
          <span className="text-lg">{theme === 'dark' ? '☼' : '☾'}</span>
          <span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
        </button>
      </nav>
    </header>
  )
}
