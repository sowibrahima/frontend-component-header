import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import { ExpandMore } from '@openedx/paragon/icons';
import Avatar from '../Avatar';
var DesktopUserMenuToggle = function DesktopUserMenuToggle(_ref) {
  var avatar = _ref.avatar,
    variant = _ref.variant;
  return /*#__PURE__*/React.createElement("div", {
    className: "site-header-desktop__user-toggle ".concat(variant === 'studio' ? 'site-header-desktop__user-toggle--studio' : '', " flex items-center gap-2")
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: variant === 'studio' ? '2rem' : '1.9rem',
    src: avatar,
    alt: "",
    className: "site-header-desktop__avatar ".concat(variant === 'studio' ? 'site-header-desktop__avatar--studio' : '')
  }), /*#__PURE__*/React.createElement(Icon, {
    src: ExpandMore,
    className: "site-header-desktop__user-caret ".concat(variant === 'studio' ? 'site-header-desktop__user-caret--studio' : '', " w-4 h-4 text-neutral-400")
  }));
};
export var DesktopUserMenuTogglePropTypes = {
  avatar: PropTypes.string,
  label: PropTypes.string,
  secondaryLabel: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'studio'])
};
DesktopUserMenuToggle.propTypes = DesktopUserMenuTogglePropTypes;
DesktopUserMenuToggle.defaultProps = {
  secondaryLabel: null,
  variant: 'default'
};
export default DesktopUserMenuToggle;
//# sourceMappingURL=DesktopUserMenuToggle.js.map
