import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthorCourses } from '../../store/courses/selectors';
import { loadUserCourses } from '../../store/courses/thunks';
import ProfileCourseCard from '../ProfileMain/ProfileCourseCard';
import withAuthRequired from '../HOC/withAuthRequired';
import { useTranslation } from 'next-i18next';
import CreateCourseModal from '../EditorPage/CreateCourseModal/CreateCourseModal';
import Loader from '../Loader/Loader';
import { Layout } from 'antd';
const { Sider, Content } = Layout;
import NewCourseNavbar from '../Navbars/NewCourseNavbar';

const ProfileTeaching = () => {
  const { t } = useTranslation('teaching');
  const [createCourseModalShow, setCreateCourseModalShow] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const dispatch = useDispatch();
  const coursesUserAuthor = useSelector(getUserAuthorCourses);

  useEffect(() => {
    dispatch(loadUserCourses());
  }, []);

  if (!coursesUserAuthor) {
    return <Loader />;
  }

  const onCollapse = (currentState) => {
    setIsCollapsed(!currentState);
  };

  console.log(coursesUserAuthor);
  const courseCreatedBlock = coursesUserAuthor.map((course) => {
    return <ProfileCourseCard course={course} key={course._id} />;
  });
  return (
    <div>
      <div className='container my-5'>
        <Layout>
          <div className='d-none d-md-block'>
            <Sider
              theme={'light'}
              collapsible
              width={150}
              collapsed={isCollapsed}
              onCollapse={() => onCollapse(isCollapsed)}
            >
              <NewCourseNavbar isCollapsed={isCollapsed} />
            </Sider>
          </div>
          <Content>
            <div className='d-block d-md-none'>
              <NewCourseNavbar isCollapsed={isCollapsed} />
            </div>
            <div className='container'>
              <div className='col-12 сol-sm-6 profile-welcome profile-welcome-height'>
                <div className='col-12 col-sm-6'>
                  <img
                    className='profile-welcome-img'
                    src='/10.png'
                    alt='upgrade'
                  />
                </div>
                <div className='profile-welcome-block'>
                  <h3 className='profile-welcome-title'>{t('title')}</h3>
                  <p className='profile-welcome-subtitle'>{t('subtitle')}</p>
                </div>
              </div>
              <div className='profile-courses'>
                <h3 className='profile-courses-title'>{t('teaching')}</h3>
                {courseCreatedBlock.length !== 0 ? (
                  courseCreatedBlock
                ) : (
                  <div className='profile-courses-one d-flex my-3'>
                    <img
                      className='profile-courses-nocourses-img'
                      src='/9.png'
                      alt='preview-course-photo'
                    />
                    <div className='profile-courses-one-content'>
                      <h3
                        className='profile-courses-one-title'
                        style={{ fontSize: '18px' }}
                      >
                        {t('ohUh')}
                      </h3>
                      <p className='profile-courses-one-text'>
                        {t('noCourse')}
                      </p>
                      <Link
                        href={'#'}
                        onClick={() => setCreateCourseModalShow(true)}
                      >
                        <a className='profile-courses-nocourse-a'>
                          <p
                            className='profile-courses-one-text mt-2'
                            style={{ fontWeight: '600' }}
                            onClick={() => setCreateCourseModalShow(true)}
                          >
                            {t('createCourse')}
                          </p>
                        </a>
                      </Link>
                    </div>
                  </div>
                )}
                <CreateCourseModal
                  show={createCourseModalShow}
                  onHide={() => setCreateCourseModalShow(false)}
                />
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    </div>
  );
};

export default withAuthRequired(ProfileTeaching);
