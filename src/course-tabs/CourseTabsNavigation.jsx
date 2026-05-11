import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import {
  BookOpen,
  BarChart,
  CalendarToday,
  Article,
  School,
  Layers,
  Email,
  Forum,
  PieChart,
  People,
} from '@openedx/paragon/icons';
import '../injectStyles';

const iconMap = {
  outline: BookOpen,
  courseware: Layers,
  course: BookOpen,
  progress: BarChart,
  dates: CalendarToday,
  teams: People,
  discussion: Forum,
  'course-administration': School,
  'course-stats': PieChart,
  'course-users': People,
  'course-email': Email,
  'course-reports': Article,
  wiki: Article,
  'live-sessions': School,
  lti_live: School,
};

const CourseTabsNavigation = ({
  activeTabSlug,
  ariaLabel,
  className,
  tabs,
}) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (!activeTabSlug) {
      return undefined;
    }

    const scrollActiveTabIntoView = () => {
      const activeLink = navRef.current?.querySelector('[aria-current="page"]');

      if (!activeLink?.scrollIntoView) {
        return;
      }

      activeLink.scrollIntoView({
        block: 'nearest',
        inline: 'center',
      });
    };

    const raf = window.requestAnimationFrame || ((callback) => window.setTimeout(callback, 0));
    const cancelRaf = window.cancelAnimationFrame || window.clearTimeout;
    let nestedFrameId;
    const frameId = raf(() => {
      nestedFrameId = raf(scrollActiveTabIntoView);
    });

    return () => {
      cancelRaf(frameId);
      if (nestedFrameId) {
        cancelRaf(nestedFrameId);
      }
    };
  }, [activeTabSlug, tabs]);

  return (
    <nav
      ref={navRef}
      className={`wuti-shared-course-tabs ${className || ''}`.trim()}
      aria-label={ariaLabel}
    >
      {tabs.map(({ url, title, slug }) => {
        const isActive = slug === activeTabSlug;
        const iconSrc = iconMap[slug] || BookOpen;

        return (
          <a
            key={slug}
            href={url}
            aria-current={isActive ? 'page' : undefined}
            className={isActive ? 'is-active' : undefined}
          >
            <Icon src={iconSrc} className="wuti-shared-course-tab-icon" aria-hidden="true" />
            <span className="wuti-shared-course-tab-label">{title}</span>
            <span className="wuti-shared-course-tab-underline" aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
};

CourseTabsNavigation.propTypes = {
  activeTabSlug: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

CourseTabsNavigation.defaultProps = {
  activeTabSlug: undefined,
  className: null,
};

export default CourseTabsNavigation;
