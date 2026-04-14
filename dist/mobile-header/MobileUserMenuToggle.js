import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import { ExpandMore } from '@openedx/paragon/icons';
import Avatar from '../Avatar';
var MobileUserMenuToggle = function MobileUserMenuToggle(_ref) {
  var avatar = _ref.avatar,
    variant = _ref.variant;
  return /*#__PURE__*/React.createElement("div", {
    className: "site-header-mobile__user-toggle ".concat(variant === 'studio' ? 'site-header-mobile__user-toggle--studio' : '')
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: variant === 'studio' ? '2rem' : '1.75rem',
    src: avatar,
    alt: "",
    className: "site-header-mobile__avatar"
  }), /*#__PURE__*/React.createElement(Icon, {
    src: ExpandMore,
    className: "site-header-mobile__user-caret"
  }));
};
export var MobileUserMenuTogglePropTypes = {
  avatar: PropTypes.string,
  label: PropTypes.string,
  secondaryLabel: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'studio'])
};
MobileUserMenuToggle.propTypes = MobileUserMenuTogglePropTypes;
MobileUserMenuToggle.defaultProps = {
  label: null,
  secondaryLabel: null,
  variant: 'default'
};
export default MobileUserMenuToggle;
//# sourceMappingURL=MobileUserMenuToggle.js.map
