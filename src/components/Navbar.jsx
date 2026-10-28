// Navbar.jsx
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import GooeyNav from './GooeyNav';
import './Navbar.css';

const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EVENTS', href: '#events' },
    { label: 'CHAPTERS', href: '#chapters' },
    { label: 'PEOPLE', href: '#team' },
    { label: 'JOIN US', href: '#join' },
];

const SunIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
);

const MoonIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
);

function ThemeSwitch({ isDark, onClick }) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={isDark}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            data-dark={isDark}
            onClick={onClick}
            className="theme-switch"
        >
            <span className="theme-switch__thumb">{isDark ? <MoonIcon /> : <SunIcon />}</span>
        </button>
    );
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState(0);
    const clicking = useRef(false);
    const { theme, toggle } = useTheme();

    const isDark = theme === 'dark';
    const accent = '#476998';

    // Scroll-spy: scroll karne par active nav item badalta hai
    useEffect(() => {
        const ids = navLinks.map((l) => l.href.slice(1));
        let timer;

        const update = () => {
            const line = window.scrollY + window.innerHeight * 0.35;
            let idx = 0;
            ids.forEach((id, i) => {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top + window.scrollY <= line) idx = i;
            });
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
                idx = ids.length - 1;
            }
            setActive(idx);
        };

        const onScroll = () => {
            if (clicking.current) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    clicking.current = false;
                    update();
                }, 150);
                return;
            }
            update();
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', update);
        };
    }, []);

    return (
        <header
            className="ieee-navbar fixed inset-x-0 top-0 z-[100]"
            data-dark={isDark}
            style={{ color: 'var(--fg)' }}
        >
            <nav className="mx-auto grid max-w-[1800px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 pt-4 sm:px-8 lg:px-12">
                {/* TUBE 1: Logo */}
                <a
                    href="#home"
                    aria-label="IEEE IGDTUW Home"
                    className="ieee-tube ieee-tube--logo justify-self-start"
                    onClick={() => setMenuOpen(false)}
                >
                    <img
                        src={`${import.meta.env.BASE_URL}${isDark ? 'ieee-logo.png' : 'ieee-logo-dark.png'}`}
                        alt="IEEE Logo"
                        className="h-9 w-auto object-contain sm:h-10"
                    />
                </a>

                {/* TUBE 2: Nav links */}
                <div className="ieee-tube ieee-tube--nav hidden justify-self-center md:inline-flex">
                    <GooeyNav
                        items={navLinks}
                        activeIndex={active}
                        onChange={(i) => {
                            setActive(i);
                            clicking.current = true;
                            setTimeout(() => {
                                clicking.current = false;
                            }, 1500);
                        }}
                        theme={theme}
                        color={isDark ? '#D7D6AE' : '#043473'}
                        activeTextColor={isDark ? '#043473' : '#D7D6AE'}
                        colors={isDark ? ['#D7D6AE', '#C4C39B', '#E6E5C4'] : ['#043473', '#28518A', '#476998']}
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

                {/* TUBE 3: Theme switch + mobile menu */}
                <div className="ieee-tube ieee-tube--actions justify-self-end">
                    <ThemeSwitch isDark={isDark} onClick={toggle} />
                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={menuOpen}
                        className="ieee-menu-btn md:hidden"
                    >
                        {menuOpen ? 'CLOSE ×' : 'MENU ☰'}
                    </button>
                </div>
            </nav>

            {/* Mobile menu panel */}
            {menuOpen && (
                <div className="ieee-tube-panel md:hidden">
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="rounded-2xl px-4 py-3 text-sm font-semibold tracking-wide transition-transform duration-200 hover:translate-x-1"
                                style={{
                                    color: 'var(--fg)',
                                    borderLeft: `3px solid ${index === active ? accent : 'transparent'}`,
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