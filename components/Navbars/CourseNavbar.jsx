import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { getCurrentCourse } from '../../store/courses/selectors'
import { useTranslation } from 'next-i18next'

const CourseNavbar = () => {
  const { t } = useTranslation('navbar')

  const router = useRouter()
  const currentCourse = useSelector(getCurrentCourse)

  const fieldCreator = (textLink, routePath, iconClass) => {
    return (
      <Link href={routePath}>
        <a className={'profile-button-link d-flex'} style={{ color: router.route.includes(routePath) && '#0070f3' }}>
          <i className={iconClass + ' profile-button-illustration'}/>
          <p className="profile-button-text">{textLink}</p>
        </a>
      </Link>
    )
  }

  const profileNavbarData = [
    {
      routePath: "/profile",
      iconClass: "fab fa-flipboard",
      textLink: t("dashboard"),
    },
    {
      routePath: "/teaching",
      iconClass: "fas fa-book",
      textLink: t("teaching"),
    },
    {
      routePath: "/settings",
      iconClass: "fas fa-cog",
      textLink: t("settings"),
    },
  ];

  const navbarMenu = profileNavbarData.map(
    ({ routePath, iconClass, textLink }) => {
      return (
        <div key={textLink} className="profile-button d-flex mb-4">
          <Link href={routePath}>
            <a
              className={"profile-button-link d-flex"}
              style={{ color: router.route.includes(routePath) && "#0070f3" }}
            >
              <i className={iconClass + " profile-button-illustration"} />
              <p className="profile-button-text"> {textLink} </p>
            </a>
          </Link>
        </div>
      );
    }
  );

  const upgradePlan = (
    <div className="profile-upgrade-block mt-5">
      <img className="profile-upgrade-img" src="/6.png" alt="upgrade" />
      <p className="profile-upgrade-text">{t("upToPro")}</p>
      <Link href={`/plans`}>
        <a style={{ textDecoration: "none" }}>
          <button className="profile-upgrade-button">{t("upgrade")}</button>
        </a>
      </Link>
    </div>
  );

  return (
    <div className="profile-mobile" style={{ justifyContent: 'space-around' }}>
      <div className="profile-button mb-4">
        <div className="profile-button d-flex mb-3">
          <p className="profile-button-text" style={{ fontSize: '16px' }}>{t('course')}</p>
        </div>
        <div className="profile-button d-flex mb-4">
          {fieldCreator(t('description'), `/editor/${currentCourse?._id}`, 'fas fa-align-left')}
        </div>
        <div className="profile-button d-flex mb-4">
          {fieldCreator(t('content'), `/courseplan/${currentCourse?._id}`, 'fas fa-th-large')}
        </div>
        <div className="profile-button d-flex mb-4">
          {fieldCreator(t('scoreTable'), `/scoretable/${currentCourse?._id}`, 'fas fa-table')}
        </div>
        <hr className="separator-mobile"/>
      </div>
      {navbarMenu}
      {upgradePlan}
    </div>

  )
}

export default CourseNavbar
