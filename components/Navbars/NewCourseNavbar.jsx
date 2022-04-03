import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { getCurrentCourse } from '../../store/courses/selectors';
import { useTranslation } from 'next-i18next';
import { Menu, Tooltip } from 'antd';

const NewCourseNavbar = ({ isCollapsed }) => {
  const { t } = useTranslation('navbar');

  const currentCourse = useSelector(getCurrentCourse);
  console.log("currentCourse: ", currentCourse)

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

  const upgradePlan = isCollapsed ? (
    <Link href={`/plans`}>
      <a style={{ textDecoration: 'none' }}>
        <Tooltip placement='bottom' title={t('upgrade')}>
          <button className='profile-upgrade-button'>
            <i class='fas fa-arrow-alt-circle-up' />
          </button>
        </Tooltip>
      </a>
    </Link>
  ) : (
    <div className='profile-upgrade-block m-2'>
      <img className='profile-upgrade-img' src='/6.png' alt='upgrade' />
      <p className='profile-upgrade-text'>{t('upToPro')}</p>
      <Link href={`/plans`}>
        <a style={{ textDecoration: 'none' }}>
          <button className='profile-upgrade-button'>{t('upgrade')}</button>
        </a>
      </Link>
    </div>
  );

  const NavbarMenu = ({ dataSource }) => {
    return dataSource.map(({ routePath, iconClass, textLink }) => {
      return (
        <Link href={routePath}>
          <a style={{ textDecoration: 'none', textOverflow: 'clip' }}>
            <Menu.Item icon={<i className={iconClass} />}>{textLink}</Menu.Item>
          </a>
        </Link>
      );
    });
  };

  return (
    <>
      <p className='profile-button-text' style={{ fontSize: '16px' }}>
        {t('course')}
      </p>
      <Menu mode='inline' selectable={false} theme='light'>
        <NavbarMenu dataSource={profileCourseNavbarData} />
        <Menu.Divider />
        <NavbarMenu dataSource={profileNavbarData} />
        <Menu.Divider />
      </Menu>
      {upgradePlan}
    </>
  );
};

export default NewCourseNavbar;
