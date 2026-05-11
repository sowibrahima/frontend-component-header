import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import { BookOpen, BarChart, CalendarToday, Article, School, Layers, Email, Forum, PieChart, People } from '@openedx/paragon/icons';
import '../injectStyles';
var iconMap = {
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
  lti_live: School
};
var CourseTabsNavigation = function CourseTabsNavigation(_ref) {
  var activeTabSlug = _ref.activeTabSlug,
    ariaLabel = _ref.ariaLabel,
    className = _ref.className,
    tabs = _ref.tabs;
  var navRef = useRef(null);
  useEffect(function () {
    if (!activeTabSlug) {
      return undefined;
    }
    var scrollActiveTabIntoView = function scrollActiveTabIntoView() {
      var _navRef$current;
      var activeLink = (_navRef$current = navRef.current) === null || _navRef$current === void 0 ? void 0 : _navRef$current.querySelector('[aria-current="page"]');
      if (!(activeLink !== null && activeLink !== void 0 && activeLink.scrollIntoView)) {
        return;
      }
      activeLink.scrollIntoView({
        block: 'nearest',
        inline: 'center'
      });
    };
    var raf = window.requestAnimationFrame || function (callback) {
      return window.setTimeout(callback, 0);
    };
    var cancelRaf = window.cancelAnimationFrame || window.clearTimeout;
    var nestedFrameId;
    var frameId = raf(function () {
      nestedFrameId = raf(scrollActiveTabIntoView);
    });
    return function () {
      cancelRaf(frameId);
      if (nestedFrameId) {
        cancelRaf(nestedFrameId);
      }
    };
  }, [activeTabSlug, tabs]);
  return /*#__PURE__*/React.createElement("nav", {
    ref: navRef,
    className: "wuti-shared-course-tabs ".concat(className || '').trim(),
    "aria-label": ariaLabel
  }, tabs.map(function (_ref2) {
    var url = _ref2.url,
      title = _ref2.title,
      slug = _ref2.slug;
    var isActive = slug === activeTabSlug;
    var iconSrc = iconMap[slug] || BookOpen;
    return /*#__PURE__*/React.createElement("a", {
      key: slug,
      href: url,
      "aria-current": isActive ? 'page' : undefined,
      className: isActive ? 'is-active' : undefined
    }, /*#__PURE__*/React.createElement(Icon, {
      src: iconSrc,
      className: "wuti-shared-course-tab-icon",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("span", {
      className: "wuti-shared-course-tab-label"
    }, title), /*#__PURE__*/React.createElement("span", {
      className: "wuti-shared-course-tab-underline",
      "aria-hidden": "true"
    }));
  }));
};
CourseTabsNavigation.propTypes = {
  activeTabSlug: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};
CourseTabsNavigation.defaultProps = {
  activeTabSlug: undefined,
  className: null
};
export default CourseTabsNavigation;
//# sourceMappingURL=CourseTabsNavigation.js.map