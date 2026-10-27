import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import GooeyNav from './GooeyNav';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EVENTS', href: '#events' },
  { label: 'CHAPTERS', href: '#chapters' },
  { label: 'PEOPLE', href: '#team' },
  { label: 'JOIN US', href: '#join' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const isDark = theme === 'dark';

  return (
      <header
          className="absolute inset-x-0 top-0 z-50 border-b transition-colors duration-300"
          style={{
            backgroundColor: 'var(--bg)',
            borderColor: 'var(--border)',
          }}
      >
        <nav className="mx-auto flex min-h-[88px] max-w-[1800px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">

          {/* IEEE Branding */}
          <a
              href="#home"
              className="flex shrink-0 items-center gap-3"
              aria-label="IEEE IGDTUW Home"
          >
          <span
              className="rounded-sm px-2.5 py-2 text-xs font-bold tracking-wider"
              style={{
                backgroundColor: '#35369C',
                color: '#C8C793',
              }}
          >
            IEEE
          </span>

            <span
                className="text-xl font-bold tracking-tight sm:text-2xl"
                style={{ color: 'var(--fg)' }}
            >
            IGDTUW
            <span style={{ color: '#7C679E' }}>.</span>
          </span>
          </a>

          {/* Desktop Gooey Navigation */}
          <div className="hidden md:block">
            <GooeyNav
                items={navLinks}
                initialActiveIndex={0}
                theme={theme}
                color="#35369C"
                activeTextColor="#C8C793"
                colors={['#7C679E', '#3F2548', '#35369C']}
                size="md"
                frame
                animationTime={600}
                particleCount={15}
                timeVariance={300}
                spread={56}
                gooeyness={0.5}
                wobble={0.5}
                hoverEffect
                className="ieee-gooey-nav"
            />
          </div>

          {/* Right Side Controls */}
          <div className="flex shrink-0 items-center gap-3">

            {/* Theme Toggle */}
            <button
                type="button"
                onClick={toggle}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                className="flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition-all duration-300 hover:opacity-80"
                style={{
                  color: 'var(--fg)',
                  borderColor: 'var(--border)',
                  backgroundColor: 'var(--surface)',
                }}
            >
            <span className="text-lg" aria-hidden="true">
              {isDark ? '☀️' : '🌙'}
            </span>

              <span className="hidden sm:inline">
              {isDark ? 'LIGHT MODE' : 'DARK MODE'}
            </span>
            </button>

            {/* Mobile Menu Button */}
            <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                className="rounded-md border px-3 py-2 text-sm font-medium transition-colors md:hidden"
                style={{
                  color: 'var(--fg)',
                  borderColor: 'var(--border)',
                  backgroundColor: 'var(--surface)',
                }}
            >
              {menuOpen ? 'CLOSE ×' : 'MENU ☰'}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
            <div
                className="border-t p-5 shadow-lg md:hidden"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                    <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-md px-3 py-3 text-sm font-medium tracking-wide transition-all duration-200 hover:translate-x-1"
                        style={{
                          color: 'var(--fg)',
                          borderLeft: `3px solid ${
                              index === 0 ? '#35369C' : 'transparent'
                          }`,
                        }}
                    >
                      {link.label}
                    </a>
                ))}
              </div>
            </div>
        )}
      </header>
  );
}