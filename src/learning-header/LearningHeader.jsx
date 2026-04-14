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

const getDisplayName = (user) => {
  if (!user) {
    return null;
  }

  return user.name || user.username || null;
};

const LearningHeader = ({
  courseOrg,
  courseNumber,
  courseTitle,
  showUserDropdown,
}) => {
  const intl = useIntl();
  const { authenticatedUser } = useContext(AppContext);

  const headerLogo = (
    <LogoSlot
      href={`${getConfig().LMS_BASE_URL}/dashboard`}
      src={getConfig().LOGO_URL}
      alt={getConfig().SITE_NAME}
    />
  );

  return (
    <header className="learning-header bg-white border-b border-neutral-100">
      <a className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-2 focus:bg-white focus:text-brand" href="#main-content">
        {intl.formatMessage(messages.skipNavLink)}
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-14">
        {headerLogo}
        <div className="flex-1 min-w-0 flex items-center" style={{ lineHeight: 1 }}>
          <CourseInfoSlot courseOrg={courseOrg} courseNumber={courseNumber} courseTitle={courseTitle} />
        </div>
        {showUserDropdown && authenticatedUser && (
          <>
            <LearningHelpSlot />
            <AuthenticatedUserDropdown
              username={getDisplayName(authenticatedUser)}
              secondaryLabel={authenticatedUser.email || authenticatedUser.username}
              avatar={authenticatedUser.avatar}
            />
          </>
        )}
        {showUserDropdown && !authenticatedUser && (
          <AnonymousUserMenu />
        )}
      </div>
    </header>
  );
};

LearningHeader.propTypes = {
  courseOrg: courseInfoDataShape.courseOrg,
  courseNumber: courseInfoDataShape.courseNumber,
  courseTitle: courseInfoDataShape.courseTitle,
  showUserDropdown: PropTypes.bool,
};

LearningHeader.defaultProps = {
  courseOrg: null,
  courseNumber: null,
  courseTitle: null,
  showUserDropdown: true,
};

export default LearningHeader;
