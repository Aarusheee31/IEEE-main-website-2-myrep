import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })
export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() =>
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    )

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        try { localStorage.setItem('theme', theme) } catch {}
    }, [theme])

    const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

    return <ThemeContext value={{ theme, toggle }}>{children}</ThemeContext>
}