import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { getCurrentCourse } from '../../store/courses/selectors';
import { useTranslation } from 'next-i18next';
import { Menu, Tooltip, Drawer } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';

const NewCourseNavbar = ({ isCollapsed }) => {
  const { t } = useTranslation('navbar');
  const [isSiderDrawerVisible, setIsSiderDrawerVisible] = useState(false);

  const currentCourse = useSelector(getCurrentCourse);

  const showSiderDrawer = () => {
    setIsSiderDrawerVisible(true);
  };

  const onSiderDrawerClose = () => {
    setIsSiderDrawerVisible(false);
  };

  const profileNavbarData = [
    {
      routePath: '/profile',
      iconClass: 'fab fa-flipboard',
      textLink: t('dashboard'),
    },
    {
      routePath: '/teaching',
      iconClass: 'fas fa-book',
      textLink: t('teaching'),
    },
    {
      routePath: '/settings',
      iconClass: 'fas fa-cog',
      textLink: t('settings'),
    },
  ];

  const profileCourseNavbarData = [
    {
      routePath: `/editor/${currentCourse?._id}`,
      iconClass: 'fas fa-align-left',
      textLink: t('description'),
    },
    {
      routePath: `/courseplan/${currentCourse?._id}`,
      iconClass: 'fas fa-th-large',
      textLink: t('content'),
    },
    {
      routePath: `/scoretable/${currentCourse?._id}`,
      iconClass: 'fas fa-table',
      textLink: t('scoreTable'),
    },
  ];

  const upgtadePlanBtn = (
    <Link href={`/plans`}>
      <a style={{ textDecoration: 'none' }}>
        <Tooltip placement='bottom' title={t('upgrade')}>
          <button className='profile-upgrade-button'>
            <i class='fas fa-arrow-alt-circle-up' />
          </button>
        </Tooltip>
      </a>
    </Link>
  );

  const upgradePlan = isCollapsed ? (
    <>{upgtadePlanBtn}</>
  ) : (
    <>
      <div className='profile-upgrade-block my-3'>
        <img className='profile-upgrade-img' src='/6.png' alt='upgrade' />
        <p className='profile-upgrade-text'>{t('upToPro')}</p>
        <Link href={`/plans`}>
          <a style={{ textDecoration: 'none' }}>
            <button className='profile-upgrade-button'>{t('upgrade')}</button>
          </a>
        </Link>
      </div>
    </>
  );

  const NavbarMenu = ({ dataSource }) => {
    return dataSource.map(({ routePath, iconClass, textLink }) => {
      return (
        <Menu.Item icon={<i className={iconClass} />}>
          <Link href={routePath}>
            <a style={{ textDecoration: 'none', textOverflow: 'clip' }}>
              {textLink}
            </a>
          </Link>
        </Menu.Item>
      );
    });
  };

  const CourseNavbar = (
    <>
      <h3 className='profile-button-text d-flex justify-content-center'>
        {t('course')}
      </h3>
      <Menu mode='vertical' selectable={false} theme='light'>
        <NavbarMenu dataSource={profileCourseNavbarData} />
        <Menu.Divider />
        <NavbarMenu dataSource={profileNavbarData} />
        <Menu.Divider />
      </Menu>
      {upgradePlan}
    </>
  );

  const openSiderDrawerBtn = (
    <button onClick={showSiderDrawer} className='d-flex d-md-none mb-3 btn align-items-center'>
      {React.createElement(MenuUnfoldOutlined)}
      <p className='ml-3 my-0'>{t('openCourseNavigationMenu')}</p>
    </button>
  );

  const siderDrawer = (
    <Drawer placement='left' width={250} onClose={onSiderDrawerClose} visible={isSiderDrawerVisible}>
      {CourseNavbar}
    </Drawer>
  );

  return (
    <>
      <div className='d-none d-md-block'>{CourseNavbar}</div>
      {siderDrawer}
      {openSiderDrawerBtn}
    </>
  );
};

export default NewCourseNavbar;
