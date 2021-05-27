import React from 'react'
import { getUserData } from '../../store/auth/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../store/auth/auth.thunks'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const UserImage = () => {
  const { t } = useTranslation('header')

  const user = useSelector(getUserData)
  const dispatch = useDispatch()
  const noUserPhoto = '/no-avatar.png'

  const onLogout = () => {
    dispatch(logoutUser())
  }
  return (
    <div>
      <div className="dropdown">
        <img
          className="avatar-img"
          style={{ width: '24px', height: '24px' }}
          src={user?.avatar?.url ? user.avatar.url : noUserPhoto}
          alt="avatar"/>
        <ul /* style={{ opacity: isMenuOpen ? '1' : '0' }}*/>
          <div>
            <div className="d-flex accDropBlock">
              <img
                className="avatar-img" style={{ width: '40px', height: '40px' }}
                src={user.avatar?.url ? user.avatar.url : noUserPhoto}
                alt="avatar"/>
              <div className="ml-3 lh-1">
                <p className="mb-1 accDropTitle">
                  {user?.name}
                </p>
                <p className="mb-0 accDropMail">
                  {user?.email}
                </p>
              </div>
            </div>
            <div className="dropdown-divider"/>
          </div>
          <li>
            <Link href={`/profile`}>
              <a>
                <i className="fab fa-flipboard" style={{ marginRight: '10px' }}/>
                {t('dashboard')}
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/teaching`}>
              <a>
                <i className="fas fa-book" style={{ marginRight: '10px' }}/>
                {t('teaching')}
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/settings`}>
              <a>
                <i className="fas fa-cog" style={{ marginRight: '10px' }}/>
                {t('settings')}
              </a>
            </Link>
          </li>
          <div className="dropdown-divider"/>
          <li>
            <Link href={'/'}>
              <a onClick={onLogout} style={{ cursor: 'pointer' }}>
                <i className="fas fa-power-off" style={{ marginRight: '10px' }}/>
                {t('exit')}</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserImage
