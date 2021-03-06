import React from 'react'
import Header from '../components/Header/Header'
import CoursePage from '../components/CoursePage/CoursePage'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Programs = () => {
  return (
    <div>
      <Head>
        <title>Programs | Lem platform</title>
        <meta name="description" content="Generated by create next app"/>
        {/* <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin/>*/}
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header />
      <CoursePage />
    </div>
  )
}

export default Programs

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['programs', 'header', 'auth', 'forbidden']),
    },
  }
}
