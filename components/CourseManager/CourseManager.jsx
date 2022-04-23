import React, { useEffect, useState } from 'react';
import NewCourseNavbar from '../Navbars/NewCourseNavbar';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCurrentCourse,
  setCurrentCourse,
} from '../../store/courses/reducer';
import { clearLessons, setLessons } from '../../store/lesson/reducer';
import { getLessons } from '../../store/lesson/selectors';
import { getCurrentCourse } from '../../store/courses/selectors';
import LessonCard from '../LessonPage/LessonCard';
import LessonAPI from '../../api/api.lesson';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Layout } from 'antd';
const { Sider, Content } = Layout;

const CourseManager = ({ course, lessons }) => {
  const { t } = useTranslation('navbar');
  const dispatch = useDispatch();
  const router = useRouter();
  const currentLessons = useSelector(getLessons);
  const currentCourse = useSelector(getCurrentCourse);
  const [loading, setIsLoading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    dispatch(setCurrentCourse(course));
    dispatch(setLessons(lessons));
    return () => {
      dispatch(clearCurrentCourse());
      dispatch(clearLessons());
    };
  }, []);

  const onCollapse = (currentState) => {
    setIsCollapsed(!currentState);
  };

  const onCreateLesson = async () => {
    if (currentCourse) {
      setIsLoading(true);
      const data = await LessonAPI.create(currentCourse._id);
      await router.push(`/editlesson/${data.lesson._id}`);
    }
  };

  const lessonBlock = currentLessons.map((lesson, index) => {
    return <LessonCard lesson={lesson} key={lesson._id} lessonIndex={index} />;
  });
  return (
    <div>
      <div className='container py-5'>
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
              <div
                className='col-12 сol-sm-6 profile-welcome'
                style={{ backgroundColor: 'rgb(240, 196, 215)' }}
              >
                <div className='mr-0 mr-sm-3'>
                  <h3 className='profile-welcome-title'>{course.title}</h3>
                  <p className='profile-welcome-subtitle'>
                    {t('teachSubtitle')}
                  </p>
                </div>
                <img
                  className='profile-welcome-course-img'
                  src={course.coursePreview.url}
                  alt='upgrade'
                />
              </div>
              <div className='profile-courses'>
                <h3 className='profile-courses-title'>
                  {t('content')}({currentLessons.length})
                </h3>
                {lessonBlock}
                <a style={{ textDecoration: 'none' }}>
                  <div
                    className='profile-courses-one justify-content-center d-flex my-3'
                    style={{ alignItems: 'center' }}
                  >
                    <div className='mr-3'>
                      <button
                        disabled={loading}
                        className='lesson-btn d-flex'
                        onClick={onCreateLesson}
                      >
                        <i className='fas fa-plus' />
                      </button>
                    </div>
                    <h3 className='profile-courses-one-title m-0'>
                      {t('createLesson')}
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    </div>
  );
};

export default CourseManager;
