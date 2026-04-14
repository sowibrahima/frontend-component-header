import React from 'react';
import PropTypes from 'prop-types';

const LearningHeaderCourseInfo = ({
  courseOrg,
  courseNumber,
  courseTitle,
}) => (
  <div className="min-w-0">
    <span className="block text-xs text-neutral-500 truncate">{courseOrg} {courseNumber}</span>
    <span className="block text-sm font-semibold text-neutral-900 truncate">{courseTitle}</span>
  </div>
);

export const courseInfoDataShape = {
  courseOrg: PropTypes.string,
  courseNumber: PropTypes.string,
  courseTitle: PropTypes.string,
};

LearningHeaderCourseInfo.propTypes = courseInfoDataShape;

export default LearningHeaderCourseInfo;
