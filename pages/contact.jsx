import Head from 'next/head'
import { BLOG_NAME } from '../lib/constants'
import Layout from '../components/Layout/Layout'
import Container from '../components/Layout/Container'
import ContactPage from '../components/Utils/ContactForm/ContactPage'
import PageHeading from '../components/PageHeading'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{`Contact | ${BLOG_NAME}`}</title>
      </Head>
      <Container>
        <PageHeading>Let&apos;s connect.</PageHeading>
        <ContactPage />
      </Container>
    </Layout>
  )
}
