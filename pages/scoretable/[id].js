import React from 'react';
import Header from '../../components/Header/Header';
import CourseAPI from '../../api/api.course';
import withEditProtect from '../../components/HOC/withEditProtect';
import { wrapper } from '../../store/store';
import ScoreTable from '../../components/ScoreTable/ScoreTable';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const MarksTable = ({ course, marks }) => {
  return (
    <React.Fragment>
      <Header />
      <ScoreTable course={course} marks={marks} />
    </React.Fragment>
  );
};

export default withEditProtect(MarksTable);

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const { id } = ctx.params;
  const data = await CourseAPI.getCourseMarks(id);
  const dataCourse = await CourseAPI.one(id);
  return {
    props: {
      course: dataCourse.course,
      marks: data,
      ...(await serverSideTranslations(ctx.locale, ['navbar', 'header'])),
    },
  };
});
