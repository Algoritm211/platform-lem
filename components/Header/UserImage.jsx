import React from 'react'

const UserImage = () => {
  return (
    <div>
      <div className="dropdown">
        {/*{user?.avatar ? (*/}
        <img className="avatar-img"
             style={{ width: '24px', height: '24px' }}
          // src={user.avatar ? `${process.env.REACT_APP_URL}/${user.avatar}` : noUserPhoto}
             src="https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png"
             alt="avatar"/>
        {/*) : (*/}
        {/*  <i className="fas fa-user-circle personIcon"/>*/}
        {/*)}*/}
        <ul>
          {/*{isAuth &&*/}
          <div>
            <div className="d-flex accDropBlock">
              {/* {user?.avatar ? (*/}
              <img className="avatar-img" style={{ width: '40px', height: '40px' }}
                // src={user.avatar ? `${process.env.REACT_APP_URL}/${user.avatar}` : noUserPhoto}
                   src="https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png" alt="avatar"/>
              {/* ) : (*/}
              {/*  <i className="fas fa-user-circle accDropIcon"/>*/}
              {/* )}*/}
              <div className="ml-3 lh-1">
                <p className="mb-1 accDropTitle">
                  aboba
                  {/*{user?.name}*/}
                </p>
                <p className="mb-0 accDropMail">
                  aboba@avova.com
                  {/*{user?.email}*/}
                </p>
              </div>
            </div>
            <div className="dropdown-divider"/>
          </div>
          {/*}*/}

          {/*{!isAuth ? (*/}
          {/*  <a href="/login">*/}
          {/*    <i className="far fa-user-circle" style={{ marginRight: '10px' }}/>*/}
          {/*    Вхід</a>*/}
          {/*) : (*/}
          <li>
            <a href={`/account`}>
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
          {/*<a onClick={() => setIsModalOpen(true)}>*/}
          <li>
            <a href="#">
              <i className="fas fa-power-off" style={{ marginRight: '10px' }}/>
              Exit</a>
            {/*)}*/}
          </li>

        </ul>
      </div>
    </div>
  )
}

export default UserImage
