import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { getCurrentCourse } from '../../store/courses/selectors';
import { useTranslation } from 'next-i18next';
import { Menu } from 'antd';

const CourseNavbar = () => {
  const { t } = useTranslation('navbar');

  const router = useRouter();
  const currentCourse = useSelector(getCurrentCourse);

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

  const NavbarMenuItem = ({ textLink, routePath, iconClass }) => {
    return (
      <div key={textLink} className='profile-button d-flex mb-4'>
        <Link href={routePath}>
          <a
            className={'profile-button-link d-flex'}
            style={{ color: router.route.includes(routePath) && '#0070f3' }}
          >
            <i className={iconClass + ' profile-button-illustration'} />
            <p className='profile-button-text'> {textLink} </p>
          </a>
        </Link>
      </div>
    );
  };

  const NavbarMenu = ({ dataSource }) => {
    return dataSource.map(({ routePath, iconClass, textLink }) => {
      return (
        <NavbarMenuItem
          textLink={textLink}
          routePath={routePath}
          iconClass={iconClass}
        />
      );
    });
  };

  const upgradePlan = (
    <div className='profile-upgrade-block mt-5'>
      <img className='profile-upgrade-img' src='/6.png' alt='upgrade' />
      <p className='profile-upgrade-text'>{t('upToPro')}</p>
      <Link href={`/plans`}>
        <a style={{ textDecoration: 'none' }}>
          <button className='profile-upgrade-button'>{t('upgrade')}</button>
        </a>
      </Link>
    </div>
  );

  return (
    <div className='profile-mobile justify-content-around'>
      <div className='profile-button mb-4'>
        <div className='profile-button d-flex mb-3'>
          <p className='profile-button-text' style={{ fontSize: '16px' }}>
            {t('course')}
          </p>
        </div>
        <NavbarMenu dataSource={profileCourseNavbarData} />
        <hr className='separator-mobile' />
      </div>
      <NavbarMenu dataSource={profileNavbarData} />
      {upgradePlan}
    </div>
  );
};

export default CourseNavbar;
