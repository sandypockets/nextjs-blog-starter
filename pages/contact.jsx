import { useState } from 'react'
import Head from "next/head";
import * as gtag from '../lib/gtag'
import { BLOG_NAME } from "../lib/constants";
import Layout from "../components/Layout/Layout";
import Container from "../components/Layout/Container";
import Intro from "../components/Home/Intro";
import ContactPage from "../components/Utils/ContactForm/ContactPage";

export default function Contact() {
  const [message, setMessage] = useState('')

  const handleInput = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    gtag.event({
      action: 'submit_form',
      category: 'Contact',
      label: message,
      value: message
    })
    setMessage('')
  }

  return (
    <Layout>
      <Head>
        <title>Contact | {BLOG_NAME}</title>
      </Head>
      <Container>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight md:pr-8">
            Let's connect.
          </h1>
        </section>

        {/*<h1>This is the Contact page</h1>*/}
        {/*<form onSubmit={handleSubmit}>*/}
        {/*  <label>*/}
        {/*    <span>Message:</span>*/}
        {/*    <textarea onChange={handleInput} value={message} />*/}
        {/*  </label>*/}
        {/*  <button type="submit">submit</button>*/}
        {/*</form>*/}

        <ContactPage />

      </Container>
    </Layout>
  )
}