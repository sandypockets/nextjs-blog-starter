import { Component } from 'react'

import * as gtag from '../lib/gtag'
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Container from "../components/Layout/Container";
import Intro from "../components/Home/Intro";

export default class Contact extends Component {
  state = { message: '' }

  handleInput = (e) => {
    this.setState({ message: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    gtag.event({
      action: 'submit_form',
      category: 'Contact',
      label: this.state.message,
    })

    this.setState({ message: '' })
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Contact</title>
        </Head>
        <Container>
          <Intro />
          <h1>This is the Contact page</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <span>Message:</span>
              <textarea onChange={this.handleInput} value={this.state.message} />
            </label>
            <button type="submit">submit</button>
          </form>
        </Container>
      </Layout>
    )
  }
}