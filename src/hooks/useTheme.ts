import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

function readInitial(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitial)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* storage can be unavailable; the theme still changes for this visit */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
