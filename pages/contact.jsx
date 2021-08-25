import { useState } from 'react'
import Head from "next/head";
import * as gtag from '../lib/gtag'
import { BLOG_NAME } from "../lib/constants";
import Layout from "../components/Layout/Layout";
import Container from "../components/Layout/Container";
import ContactPage from "../components/Utils/ContactForm/ContactPage";
import PageHeading from "../components/PageHeading";

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
        <PageHeading>
          Let's connect.
        </PageHeading>
        <ContactPage />
      </Container>
    </Layout>
  )
}