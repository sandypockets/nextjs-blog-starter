import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Toggle from "../Toggle";
import Highlight from "../Highlight";

const navigation = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Contact",
    href: "/contact"
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav({ darkMode, setDarkMode }) {
  return (
    <Disclosure as="nav" className="bg-white shadow dark:bg-black dark:text-white">
      {({ open }) => (
        <>
          <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-black dark:text-white">
            <div className="flex justify-between h-20 dark:bg-black dark:text-white">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Highlight>
                    <Link href={'/'}>
                      <a>
                        SANDYPOCKETS
                      </a>
                    </Link>
                  </Highlight>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navigation.map((item, index) => (
                    <Link key={index} href={item.href}>
                      <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">{item.name}</a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {navigation.map((item, index) => (
                <Link key={index} href={item.href}>
                  <a className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}