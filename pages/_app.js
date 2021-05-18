import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/header.css'
import '../styles/mainPage.css'
import '../styles/form.css'
import '../styles/programs.css'
import '../styles/coursecard.css'
import React from 'react'
import { wrapper } from '../store/store'
import App from 'next/app'


class MyApp extends App {
  static async getServer({ Component, context }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(context)
      : {}
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Component {...pageProps} />
    )
  }
}

export default wrapper.withRedux(MyApp)
