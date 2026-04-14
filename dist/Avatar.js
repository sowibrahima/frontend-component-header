import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import { PersonOutline } from '@openedx/paragon/icons';
var Avatar = function Avatar(_ref) {
  var size = _ref.size,
    src = _ref.src,
    alt = _ref.alt,
    className = _ref.className;
  var avatar = src ? /*#__PURE__*/React.createElement("img", {
    className: "block w-full h-full object-cover",
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement(Icon, {
    src: PersonOutline,
    className: "site-header-avatar__icon w-5 h-5 text-neutral-500"
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      height: size,
      width: size
    },
    className: "site-header-avatar inline-flex items-center justify-center overflow-hidden rounded-full bg-neutral-100 border border-neutral-200 ".concat(className || '')
  }, avatar);
};
Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string
};
Avatar.defaultProps = {
  src: null,
  size: '2rem',
  alt: null,
  className: null
};
export default Avatar;
//# sourceMappingURL=Avatar.js.map