import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/header.css'
import '../styles/mainPage.css'
import '../styles/form.css'
import '../styles/programs.css'
import '../styles/coursecard.css'
import '../styles/carouselPage.css'
import '../styles/contacts.css'
import '../styles/profileMain.css'
import '../styles/pricePage.css'
import '../styles/profileSettings.css'
import '../styles/userImage.css'
import '../styles/coursePreview.css'
import '../styles/editorPage.css'
import '../styles/lesson.css'
import '../styles/loader.css'
import React, { useEffect } from 'react'
import { wrapper } from '../store/store'
import App from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
// import { getCookie } from '../components/utils/cookieFunctions'
import { authUser } from '../store/auth/auth.thunks'
import { appWithTranslation } from 'next-i18next'

function MyComponent({ children }) {
  const dispatch = useDispatch()
  useEffect(() => {
    // if (getCookie('authToken')) {
    dispatch(authUser())
    // }
  }, [dispatch])

  return <>{children}</>
}

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
      <MyComponent>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="theme-color" content="#000000"/>
          <title>Platform LEM</title>
        </Head>
        <NextNprogress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height="3"
        />
        <Component {...pageProps} />
      </MyComponent>
    )
  }
}

export default wrapper.withRedux(appWithTranslation(MyApp))
