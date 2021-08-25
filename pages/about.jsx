import Head from "next/head";
import Container from "../components/Layout/Container";
import Layout from "../components/Layout/Layout";
import { BLOG_NAME } from "../lib/constants";
import PageHeading from "../components/PageHeading";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | {BLOG_NAME}</title>
      </Head>
      <Container>
        <PageHeading>
          Nice to meet you.
        </PageHeading>
        <section className="max-w-3xl mx-auto py-8 md:py-16 lg:py-24">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
      </Container>
    </Layout>
  )
}