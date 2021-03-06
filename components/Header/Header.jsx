import React, { useState } from 'react'
import RegistrationModal from '../Form/Registration'
import LoginModal from '../Form/Login'
import Link from 'next/link'
import UserImage from './UserImage'
import withPageSize from '../HOC/withPageSize'
import { getIsAuth } from '../../store/auth/selectors'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Drawer, Menu, Select } from 'antd'

const { Option } = Select

const Header = () => {
  const { t } = useTranslation('header')
  const router = useRouter()
  const [currentLocation, setCurrentLocation] = useState(router.locale)

  const [isDrawerVisible, setIsDrawerVisible] = useState(false)
  const [loginModalShow, setLoginModalShow] = useState(false)
  const [registrationModalShow, setRegistrationModalShow] = useState(false)
  const isAuth = useSelector(getIsAuth)

  const switchModals = () => {
    setLoginModalShow((prev) => !prev)
    setRegistrationModalShow((prev) => !prev)
  }

  const onLanguageChange = (value) => {
    setCurrentLocation(value)
    router.push(router.asPath, router.asPath, { locale: value })
  }

  const showDrawer = () => {
    setIsDrawerVisible(true)
  }

  const onDrawerClose = () => {
    setIsDrawerVisible(false)
  }

  const appMenuData = [
    {
      title: t('main'),
      routePath: '/',
    },
    {
      title: t('courses'),
      routePath: '/programs',
    },
    {
      title: t('plans'),
      routePath: '/plans',
    },
    {
      title: t('contacts'),
      routePath: '/contacts',
    },
  ]

  const appMenuItems = appMenuData.map(({ title, routePath }) => {
    const regex = new RegExp('^' + routePath + '$', 'g')
    return (
      <Menu.Item key={title} style={{ fontWeight: router.route.match(regex) && 'bold' }}>
        <Link href={routePath}>{title}</Link>
      </Menu.Item>
    )
  })

  const changeLanguageSelector = (
    <Select
      value={currentLocation}
      style={{ width: 120, borderRadius: '8px' }}
      onChange={onLanguageChange}
    >
      <Option value={'en'}>English</Option>
      <Option value={'uk'}>????????????????????</Option>
      <Option value={'ru'}>??????????????</Option>
    </Select>
  )

  const appMenu = (isDrawerOpen) => {
    return (
      <div className="d-flex align-items-center">
        <Menu
          className="justify-content-end"
          style={{ border: 'none', width: isDrawerOpen ? null : '550px' }}
          selectable={false}
          mode={isDrawerOpen ? 'vertical' : 'horizontal'}
        >
          {appMenuItems}
          <Menu.Item>{changeLanguageSelector}</Menu.Item>
        </Menu>
      </div>
    )
  }

  const menuDrawer = (
    <Drawer
      title={t('menu')}
      placement="right"
      width={300}
      onClose={onDrawerClose}
      visible={isDrawerVisible}
    >
      {appMenu(isDrawerVisible)}
    </Drawer>
  )

  return (
    <>
      <div className="container">
        <div className="py-2 d-flex align-items-center">
          <Link href={'/'}>
            <h4
              style={{
                cursor: 'pointer',
                fontFamily: 'Comfortaa',
                fontSize: '26px',
              }}
              className="m-0">
              marklass
            </h4>
          </Link>
          <div className="d-flex ml-auto">
            <div className="d-none d-md-flex">{appMenu(isDrawerVisible)}</div>
            <button onClick={showDrawer} className="d-block d-md-none ml-auto btn">
              <i className="fas fa-bars"></i>
            </button>

            <div className="d-flex align-items-center">
              {isAuth ? (
                <UserImage/>
              ) : (
                <div className={'navigation-li px-2'}>
                  <button
                    className="nav-link px-2 m-auto login-button navigation-li"
                    role="button"
                    onClick={() => setLoginModalShow(true)}
                  >
                    {t('start')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {menuDrawer}
      <RegistrationModal
        show={registrationModalShow}
        switchModals={() => switchModals()}
        onHide={() => setRegistrationModalShow(false)}
      />
      <LoginModal
        show={loginModalShow}
        switchModals={() => switchModals()}
        onHide={() => setLoginModalShow(false)}
      />
    </>
  )
}

export default withPageSize(Header)
