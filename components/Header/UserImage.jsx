import React from 'react'
import { getUserData } from '../../store/auth-reducer/auth-selector'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../store/auth-reducer/auth-thunks'

const UserImage = () => {
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
        <ul>
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
            <a href={`/profile`}>
              <i className="fab fa-flipboard" style={{ marginRight: '10px' }}/>
              Dashboard</a>
          </li>
          <li>
            <a href={`/myprof`}>
              <i className="fab fa-elementor" style={{ marginRight: '10px' }}/>
              Editor</a>
          </li>
          <li>
            <a href={`/settings`}>
              <i className="fas fa-cog" style={{ marginRight: '10px' }}/>
              Settings</a>
          </li>
          <div className="dropdown-divider"/>
          <li>
            <a onClick={onLogout} style={{ cursor: 'pointer' }}>
              <i className="fas fa-power-off" style={{ marginRight: '10px' }}/>
              Exit</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserImage
