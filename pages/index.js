import Head from 'next/head'
import Header from '../components/Header/Header'
import MainPage from '../components/MainPage/MainPage'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export default function Home() {
  return (
    <div>
      <Head>

        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        {/* <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin/>*/}
      </Head>
      <Header/>
      <MainPage/>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['header']),
    },
  }
}

