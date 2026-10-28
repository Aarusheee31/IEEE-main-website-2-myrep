
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

  const colors = {
    logoBackground: '#043473',
    logoText: '#D7D6AE',
    accent: '#476998',
    activeBackground: isDark ? '#043473' : '#D7D6AE',
    activeText: isDark ? '#D7D6AE' : '#043473',
    hoverColors: ['#476998', '#28518A', '#043473'],
  };

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
          {/* Actual IEEE Logo */}
          <img
            src={`${import.meta.env.BASE_URL}ieee-logo.png`}
            alt="IEEE Logo"
            className="h-12 w-auto shrink-0 object-contain sm:h-14"
          />

          {/* Chapter Name */}
          <span
            className="text-xl font-bold tracking-tight transition-colors duration-300 sm:text-2xl"
            style={{ color: 'var(--fg)' }}
          >
            IGDTUW
            <span style={{ color: colors.accent }}>.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <GooeyNav
            items={navLinks}
            initialActiveIndex={0}
            theme={theme}
            color={colors.activeBackground}
            activeTextColor={colors.activeText}
            colors={colors.hoverColors}
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
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition-all duration-300 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-4"
            style={{
              color: 'var(--fg)',
              borderColor: 'var(--border)',
              backgroundColor: 'var(--surface)',
              outlineColor: colors.accent,
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
            className="rounded-md border px-3 py-2 text-sm font-semibold transition-all duration-300 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
            style={{
              color: 'var(--fg)',
              borderColor: 'var(--border)',
              backgroundColor: 'var(--surface)',
              outlineColor: colors.accent,
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
            {navLinks.map((link, index) => {
              const isFirstLink = index === 0;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:translate-x-1"
                  style={{
                    color: 'var(--fg)',
                    borderLeft: `3px solid ${
    isFirstLink ? colors.accent : 'transparent'
}`,
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
