import React from 'react'
import Header from '../components/Header/Header'
import ContactUs from '../components/ContactUs/ContactUs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Contacts = () => {
  return (
    <div>
      <Header />
      <ContactUs />
    </div>
  )
}

export default Contacts

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['contacts', 'header', 'auth']),
    },
  }
}


