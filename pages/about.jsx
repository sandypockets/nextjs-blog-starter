import Head from "next/head";
import Container from "../components/Layout/Container";
import Intro from "../components/Home/Intro";
import Layout from "../components/Layout/Layout";
import { BLOG_NAME } from "../lib/constants";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | {BLOG_NAME}</title>
      </Head>
      <Container>
        <Intro />
        <h1>This is the About page</h1>
      </Container>
    </Layout>
  )
}