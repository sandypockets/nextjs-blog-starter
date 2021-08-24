import { useEffect, useState } from "react";
import CustomFooter from "../CustomFooter";
import Meta from './Meta'
import Nav from "./Nav";

export default function Layout({ preview, children }) {
  const [darkMode, setDarkMode] = useState()

  useEffect(() => {
    console.log("localStorage Theme - Layout: ", localStorage.theme)
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, [darkMode])

  return (
    <>
      <Meta />
      <div className="min-h-screen dark:text-white dark:bg-black font-inter">
        {/*<Banner preview={preview} />*/}
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>{children}</main>
        <CustomFooter />
      </div>
    </>
  )
}
