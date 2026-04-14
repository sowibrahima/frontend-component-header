import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
var LearningHeaderUserMenuItems = function LearningHeaderUserMenuItems(_ref) {
  var items = _ref.items;
  return items.map(function (item) {
    return /*#__PURE__*/React.createElement("a", {
      key: item.href,
      href: item.href,
      className: "site-header-desktop__user-menu-item site-header-desktop__user-menu-item--learning"
    }, item.icon ? /*#__PURE__*/React.createElement("span", {
      className: "site-header-desktop__user-menu-item-icon",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement(Icon, {
      src: item.icon
    })) : null, /*#__PURE__*/React.createElement("span", {
      className: "site-header-desktop__user-menu-item-label"
    }, item.message));
  });
};
export var learningHeaderUserMenuDataShape = {
  items: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }))
};
LearningHeaderUserMenuItems.propTypes = learningHeaderUserMenuDataShape;
export default LearningHeaderUserMenuItems;
//# sourceMappingURL=LearningHeaderUserMenuItems.js.map