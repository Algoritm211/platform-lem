import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CreateCourseModal from '../EditorPage/CreateCourseModal/CreateCourseModal';
import { useTranslation } from 'next-i18next';

const ProfileNavbar = () => {
  const router = useRouter();
  const [createCourseModalShow, setCreateCourseModalShow] = useState(false);
  const { t } = useTranslation('navbar');

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

  const navbarMenu = profileNavbarData.map(
    ({ routePath, iconClass, textLink }) => {
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
    }
  );

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
    <div className='profile-mobile'>
      <div
        className='profile-create-course d-flex mb-5 align-items-center'
        onClick={() => setCreateCourseModalShow(true)}
      >
        <h3 className='profile-create-course-text pr-2'>{t('createCourse')}</h3>
        <i className='fas fa-plus-circle profile-create-course-illustration' />
      </div>
      {navbarMenu}
      {upgradePlan}
      <CreateCourseModal
        show={createCourseModalShow}
        onHide={() => setCreateCourseModalShow(false)}
      />
    </div>
  );
};

export default ProfileNavbar;
