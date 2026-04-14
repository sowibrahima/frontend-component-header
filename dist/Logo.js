var _excluded = ["href", "src", "alt"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';
import PropTypes from 'prop-types';
var Logo = function Logo(_ref) {
  var href = _ref.href,
    src = _ref.src,
    alt = _ref.alt,
    attributes = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: "flex items-center shrink-0 mr-6 gap-2 no-underline"
  }, attributes), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '32px',
      height: '32px',
      borderRadius: '8px',
      backgroundColor: '#590D22',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FFFFFF',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 800,
      fontSize: '16px',
      lineHeight: 1,
      letterSpacing: '-0.5px'
    }
  }, "W")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
      fontSize: '15px',
      color: '#111827',
      letterSpacing: '-0.3px'
    }
  }, "WutiSkill"));
};
export var logoDataShape = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
Logo.propTypes = logoDataShape;
export default Logo;
//# sourceMappingURL=Logo.js.map