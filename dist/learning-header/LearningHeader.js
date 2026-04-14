import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import AnonymousUserMenu from './AnonymousUserMenu';
import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';
import LogoSlot from '../plugin-slots/LogoSlot';
import CourseInfoSlot from '../plugin-slots/CourseInfoSlot';
import { courseInfoDataShape } from './LearningHeaderCourseInfo';
import messages from './messages';
import LearningHelpSlot from '../plugin-slots/LearningHelpSlot';
var getDisplayName = function getDisplayName(user) {
  if (!user) {
    return null;
  }
  return user.name || user.username || null;
};
var LearningHeader = function LearningHeader(_ref) {
  var courseOrg = _ref.courseOrg,
    courseNumber = _ref.courseNumber,
    courseTitle = _ref.courseTitle,
    showUserDropdown = _ref.showUserDropdown;
  var intl = useIntl();
  var _useContext = useContext(AppContext),
    authenticatedUser = _useContext.authenticatedUser;
  var headerLogo = /*#__PURE__*/React.createElement(LogoSlot, {
    href: "".concat(getConfig().LMS_BASE_URL, "/dashboard"),
    src: getConfig().LOGO_URL,
    alt: getConfig().SITE_NAME
  });
  return /*#__PURE__*/React.createElement("header", {
    className: "learning-header bg-white border-b border-neutral-100"
  }, /*#__PURE__*/React.createElement("a", {
    className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-2 focus:bg-white focus:text-brand",
    href: "#main-content"
  }, intl.formatMessage(messages.skipNavLink)), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-14"
  }, headerLogo, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0 flex items-center",
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement(CourseInfoSlot, {
    courseOrg: courseOrg,
    courseNumber: courseNumber,
    courseTitle: courseTitle
  })), showUserDropdown && authenticatedUser && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LearningHelpSlot, null), /*#__PURE__*/React.createElement(AuthenticatedUserDropdown, {
    username: getDisplayName(authenticatedUser),
    secondaryLabel: authenticatedUser.email || authenticatedUser.username,
    avatar: authenticatedUser.avatar
  })), showUserDropdown && !authenticatedUser && /*#__PURE__*/React.createElement(AnonymousUserMenu, null)));
};
LearningHeader.propTypes = {
  courseOrg: courseInfoDataShape.courseOrg,
  courseNumber: courseInfoDataShape.courseNumber,
  courseTitle: courseInfoDataShape.courseTitle,
  showUserDropdown: PropTypes.bool
};
LearningHeader.defaultProps = {
  courseOrg: null,
  courseNumber: null,
  courseTitle: null,
  showUserDropdown: true
};
export default LearningHeader;
//# sourceMappingURL=LearningHeader.js.map