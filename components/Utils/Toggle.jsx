import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Toggle({ darkMode, setDarkMode }) {
  const [enabled, setEnabled] = useState(darkMode)
  useEffect(() => {
    if (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
      setEnabled(true)
    }
    if ('theme' in localStorage) {
      if (localStorage.theme === 'light') {
        setEnabled(false)
      } else {
        setEnabled(true)
      }
    }
  })

  const toggleTheme = () => {
    enabled ? setEnabled(false) : setEnabled(true)
    if (!enabled) {
      localStorage.theme = 'dark'
      setDarkMode(true)
    } else {
      localStorage.theme = 'light'
      setDarkMode(false)
    }
  }

  return (
    <Switch
      checked={enabled}
      onChange={toggleTheme}
      className={classNames(
        enabled ? 'bg-gray-600' : 'bg-gray-200',
        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
        )}
      />
    </Switch>
  )
}
