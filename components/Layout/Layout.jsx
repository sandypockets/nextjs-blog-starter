import Banner from './Banner'
import Footer from './Footer'
import Meta from './Meta'
import CustomFooter from "../CustomFooter";
import Nav from "./Nav";
import {useEffect, useState} from "react";

export default function Layout({ preview, children }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
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
      <div className="min-h-screen dark:text-white dark:bg-black">
        {/*<Banner preview={preview} />*/}
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>{children}</main>
      <CustomFooter />
      </div>
      {/*<Footer />*/}
    </>
  )
}
