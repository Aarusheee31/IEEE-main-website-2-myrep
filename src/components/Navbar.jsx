//Navbar.jsx
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

  const accent = '#476998';

  return (
      <header
          className="ieee-navbar fixed inset-x-0 top-0 z-[100]"
          style={{
            backgroundColor: 'transparent',
            borderBottom: 'none',
            boxShadow: 'none',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            color: 'var(--fg)',
          }}
      >
      <nav
        className="
          mx-auto grid min-h-[76px] max-w-[1800px]
          grid-cols-[1fr_auto_1fr] items-center gap-4
          px-5 sm:px-8 lg:min-h-[88px] lg:px-12
        "
      >
        {/* LEFT: IEEE Logo */}
        <a
          href="#home"
          aria-label="IEEE IGDTUW Home"
          className="flex items-center justify-self-start"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={`${import.meta.env.BASE_URL}${
  isDark ? 'ieee-logo.png' : 'ieee-logo-dark.png'
}`}
            alt="IEEE Logo"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </a>

        {/* CENTER: Gooey Navigation */}
        <div className="hidden items-center justify-self-center md:flex">
          <GooeyNav
              items={navLinks}
              initialActiveIndex={0}
              theme={theme}
              color={isDark ? '#043473' : '#D7D6AE'}
              activeTextColor={isDark ? '#D7D6AE' : '#043473'}
              colors={['#476998', '#28518A', '#043473']}
              size="md"
              frame={false}
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

        {/* RIGHT: Theme Toggle and Mobile Menu */}
        <div className="flex items-center justify-self-end gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="
              inline-flex items-center justify-center gap-2
              rounded-full border px-3 py-2
              text-xs font-semibold tracking-wide
              transition-colors duration-300
              hover:opacity-80
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2
              sm:px-4 sm:py-2.5
            "
            style={{
              color: 'var(--fg)',
              borderColor: isDark
                ? 'rgba(215, 214, 174, 0.28)'
                : 'rgba(4, 52, 115, 0.24)',
              backgroundColor: isDark
                ? 'rgba(71, 105, 152, 0.24)'
                : 'rgba(255, 255, 255, 0.18)',
              outlineColor: accent,
            }}
          >
            <span aria-hidden="true" className="text-base sm:text-lg">
              {isDark ? '☀️' : '🌙'}
            </span>

            <span className="hidden sm:inline">
              {isDark ? 'LIGHT MODE' : 'DARK MODE'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            className="rounded-lg border px-3 py-2 text-xs font-semibold md:hidden"
            style={{
              color: 'var(--fg)',
              borderColor: 'var(--border)',
              backgroundColor: isDark
                ? 'rgba(71, 105, 152, 0.24)'
                : 'rgba(255, 255, 255, 0.18)',
            }}
          >
            {menuOpen ? 'CLOSE ×' : 'MENU ☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          className="border-t px-5 py-4 shadow-lg md:hidden"
          style={{
            backgroundColor: isDark
              ? 'rgba(4, 52, 115, 0.88)'
              : 'rgba(215, 214, 174, 0.88)',
            borderColor: 'var(--border)',
            backdropFilter: 'blur(22px)',
            WebkitBackdropFilter: 'blur(22px)',
          }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold tracking-wide transition-transform duration-200 hover:translate-x-1"
                style={{
                  color: 'var(--fg)',
                  borderLeft: `3px solid ${
  index === 0 ? accent : 'transparent'
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
