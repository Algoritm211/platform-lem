import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/header.css'
import '../styles/mainPage.css'
import '../styles/form.css'
import '../styles/programs.css'
import '../styles/coursecard.css'
import '../styles/carouselPage.css'
import React from 'react'
import { wrapper } from '../store/store'
import App from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import Head from 'next/head'


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
      <React.Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <title>Platform LEM</title>
        </Head>
        <NextNprogress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height="3"
        />
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default wrapper.withRedux(MyApp)
