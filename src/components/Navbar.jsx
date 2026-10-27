import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import GooeyNav from './GooeyNav'

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EVENTS', href: '#events' },
  { label: 'CHAPTERS', href: '#chapters' },
  { label: 'PEOPLE', href: '#team' },
  { label: 'JOIN US', href: '#join' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
      <header
          className="absolute inset-x-0 top-0 z-50 border-b"
          style={{
            backgroundColor: 'var(--bg)',
            borderColor: 'var(--secondary)',
          }}
      >
        <nav className="mx-auto flex min-h-[88px] max-w-[1800px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">

          {/* IEEE Branding */}
          <a
              href="#home"
              className="flex shrink-0 items-center gap-3"
          >
          <span
              className="px-2.5 py-2 text-xs font-bold"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--ink)',
              }}
          >
            IEEE
          </span>

            <span
                className="text-xl font-bold tracking-tight sm:text-2xl"
                style={{ color: 'var(--fg)' }}
            >
            IGDTUW
            <span style={{ color: 'var(--accent)' }}>.</span>
          </span>
          </a>

          {/* Desktop Gooey Navigation */}
          <div className="hidden md:block">
            <GooeyNav
                items={navLinks}
                initialActiveIndex={0}
                theme={theme}
                color="#93A052"
                activeTextColor="#372C41"
                colors={['#806172', '#2E3F28']}
                size="md"
                frame
                animationTime={600}
                particleCount={15}
                className="ieee-gooey-nav"
            />
          </div>

          {/* Right Side Controls */}
          <div className="flex shrink-0 items-center gap-3">

            {/* Theme Toggle */}
            <button
                type="button"
                onClick={toggle}
                aria-label="Toggle theme"
                className="flex items-center gap-2 text-xs font-medium transition-colors hover:opacity-75"
                style={{ color: 'var(--fg)' }}
            >
            <span className="text-lg">
              {theme === 'dark' ? '☼' : '☾'}
            </span>

              <span className="hidden sm:inline">
              {theme === 'dark' ? 'LIGHT' : 'DARK'}
            </span>
            </button>

            {/* Mobile Menu Button */}
            <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                className="text-sm font-medium md:hidden"
                style={{ color: 'var(--fg)' }}
            >
              {menuOpen ? 'CLOSE ×' : 'MENU ☰'}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
            <div
                className="border-t p-5 md:hidden"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--secondary)',
                }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="py-3 text-sm font-medium tracking-wide"
                        style={{ color: 'var(--fg)' }}
                    >
                      {link.label}
                    </a>
                ))}
              </div>
            </div>
        )}
      </header>
  )
}