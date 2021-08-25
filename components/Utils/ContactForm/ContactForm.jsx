import { useState } from "react";
import * as gtag from "../../../lib/gtag";
import axios from 'axios'

export default function ContactForm() {
  const [formContents, setFormContents] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleName = e => {setFormContents(prev => ({ ...prev, name: e.target.value }))}
  const handleEmail = e => {setFormContents(prev => ({ ...prev, email: e.target.value }))}
  const handlePhone = e => {setFormContents(prev => ({ ...prev, phone: e.target.value }))}
  const handleMessage = e => {setFormContents(prev => ({ ...prev, message: e.target.value }))}

  const handleSubmit = e => {
    console.log("19 - formContents: ", formContents)
    e.preventDefault()
    gtag.event({
      action: 'submit_form',
      category: 'Contact',
      label: `Contact: ${formContents.email}`,
      value: formContents.message
    })

    const msg = {
      subject: `New message from ${formContents.name} 👋`,
      text: `${formContents.name}, ${formContents.email} - ${formContents.message}`,
    }

    axios.post('/api/email', {
      msg,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setFormContents({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  return (
    <div className="bg-white dark:bg-black py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="full-name" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              autoComplete="name"
              className="block w-full shadow-xs py-3 rounded-md
                          px-4placeholder-gray-300
                          focus:ring-gray-500 focus:border-gray-500
                          border-gray-300
                          dark:bg-black"
              placeholder="Full name"
              onChange={(e) => handleName(e)}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full shadow-xs py-3 px-4 rounded-md
                         placeholder-gray-300
                         focus:ring-gray-500 focus:border-gray-500
                         border-gray-300
                         dark:bg-black"
              placeholder="Email"
              onChange={(e) => handleEmail(e)}
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="block w-full shadow-xs py-3 px-4 rounded-md
                        placeholder-gray-300
                        focus:ring-gray-500 focus:border-gray-500
                        border-gray-300
                        dark:bg-black"
              placeholder="Phone"
              onChange={(e) => handlePhone(e)}
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full shadow-xs py-3 px-4
                        rounded-md placeholder-gray-300
                        focus:ring-gray-500 focus:border-gray-500
                        border border-gray-300
                        dark:bg-black"
              placeholder="Message"
              defaultValue={''}
              onChange={(e) => handleMessage(e)}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full inline-flex justify-center
                        py-3 px-6
                        border border-transparent shadow-xs
                        text-base font-medium rounded-md text-white bg-black
                        hover:bg-white hover:text-black hover:border-black hover:border-3
                        dark:bg-black dark:border-white dark:hover:bg-white dark:hover:text-black
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={(e) => {handleSubmit(e)}}
              onSubmit={(e) => e.preventDefault()}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}