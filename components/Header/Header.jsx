import React, { useState } from "react";
import RegistrationModal from "../Form/Registration";
import LoginModal from "../Form/Login";
import { Nav, Navbar, Form } from "react-bootstrap";
import Link from "next/link";
import UserImage from "./UserImage";
import withPageSize from "../HOC/withPageSize";
import { getIsAuth } from "../../store/auth/selectors";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Drawer, Menu } from "antd";

const Header = ({ size }) => {
  const { t } = useTranslation("header");
  const router = useRouter();
  const [currentLocation, setCurrentLocation] = useState(router.locale);

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [registrationModalShow, setRegistrationModalShow] = useState(false);
  const isAuth = useSelector(getIsAuth);

  const switchModals = () => {
    setLoginModalShow((prev) => !prev);
    setRegistrationModalShow((prev) => !prev);
  };

  const onLanguageChange = (event) => {
    setCurrentLocation(event.target.value);
    router.push(router.asPath, router.asPath, { locale: event.target.value });
  };

  const menuFieldCreator = (textLink, routePath) => {
    const regex = new RegExp("^" + routePath + "$", "g");
    return (
      <Link href={routePath}>
        <Nav.Link
          style={{ color: router.route.match(regex) && "black" }}
          href={routePath}
          className={"navigation-li px-3"}
        >
          {textLink}
        </Nav.Link>
      </Link>
    );
  };

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onDrawerClose = () => {
    setIsDrawerVisible(false);
  };

  const appMenuData = [
    {
      title: t("main"),
      routePath: "/",
    },
    {
      title: t("courses"),
      routePath: "/programs",
    },
    {
      title: t("plans"),
      routePath: "/plans",
    },
    {
      title: t("contacts"),
      routePath: "/contacts",
    },
  ];

  const appMenuItems = appMenuData.map(({ title, routePath }) => {
    const regex = new RegExp("^" + routePath + "$", "g");

    return (
      <Menu.Item key={title}>
        <Link
          style={{ fontWeight: router.route.match(regex) && "black" }}
          href={routePath}
        >
          {title}
        </Link>
      </Menu.Item>
    );
  });

  const changeLanguageSelector = (
    <Form className="navigation-li">
      <Form.Group className="m-0" controlId="exampleForm.SelectCustomSizeSm">
        <Form.Control
          as="select"
          size="sm"
          custom
          value={currentLocation}
          onChange={onLanguageChange}
        >
          <option value={"ru"}>Русский</option>
          <option value={"en"}>English</option>
          <option value={"uk"}>Українська</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );

  const appMenu = (isDrawerOpen) => {
    return (
      <div className="d-flex align-items-center">
        <Menu
          style={{ border: "none", width: isDrawerOpen ? null : "520px" }}
          selectable={false}
          mode={isDrawerOpen ? "vertical" : "horizontal"}
        >
          {appMenuItems}
          <Menu.Item>{changeLanguageSelector}</Menu.Item>
        </Menu>
      </div>
    );
  };

  const menuDrawer = (
    <Drawer
      title={t("menu")}
      placement="right"
      onClose={onDrawerClose}
      visible={isDrawerVisible}
    >
      {appMenu(isDrawerVisible)}
    </Drawer>
  );

  return (
    <>
      <div className="container">
        <div className="py-2 d-flex align-items-center">
          <Link href={"/"}>
            <h4 style={{ cursor: "pointer" }} className="m-0">
              LEM
            </h4>
          </Link>
          <div className="d-flex ml-auto">
            <div className="d-none d-md-flex">
              {appMenu(isDrawerVisible)}
            </div>
            <button onClick={showDrawer} class="d-block d-md-none ml-auto btn">
              <i class="fas fa-bars"></i>
            </button>

            <div className="d-flex align-items-center">
              {isAuth ? (
                <UserImage />
              ) : (
                <div className={"navigation-li px-2"}>
                  <button
                    className="nav-link px-2 m-auto login-button navigation-li"
                    role="button"
                    onClick={() => setLoginModalShow(true)}
                  >
                    {t("start")}
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
  );
};

export default withPageSize(Header);
