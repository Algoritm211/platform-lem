import Head from 'next/head'
import Header from '../components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from '../components/MainPage/MainPage'
import React from 'react'

export default function Home() {
  return (
    <div /* className={styles.container}*/>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header/>
      <MainPage/>
    </div>
  )
}
