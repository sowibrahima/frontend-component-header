function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import { Dashboard, ExpandMore, Logout, PersonOutline, ReceiptLong, Search, Settings } from '@openedx/paragon/icons';
import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import Avatar from '../Avatar';
import LearningUserMenuSlot from '../plugin-slots/LearningUserMenuSlot';
import messages from './messages';
var AuthenticatedUserDropdown = function AuthenticatedUserDropdown(_ref) {
  var username = _ref.username,
    secondaryLabel = _ref.secondaryLabel,
    avatar = _ref.avatar;
  var intl = useIntl();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var dropdownRef = useRef(null);
  var dropdownItems = [{
    message: intl.formatMessage(messages.dashboard),
    href: "".concat(getConfig().LMS_BASE_URL, "/dashboard"),
    icon: Dashboard
  }, {
    message: intl.formatMessage(messages.profile),
    href: "".concat(getConfig().ACCOUNT_PROFILE_URL, "/u/").concat(username),
    icon: PersonOutline
  }, {
    message: intl.formatMessage(messages.account),
    href: getConfig().ACCOUNT_SETTINGS_URL,
    icon: Settings
  }].concat(_toConsumableArray(getConfig().ORDER_HISTORY_URL ? [{
    message: intl.formatMessage(messages.orderHistory),
    href: getConfig().ORDER_HISTORY_URL,
    icon: ReceiptLong
  }] : []), [{
    message: intl.formatMessage(messages.signOut),
    href: getConfig().LOGOUT_URL,
    icon: Logout
  }]);

  // Close dropdown when clicking outside
  useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      return document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "w-9 h-9 flex items-center justify-center rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors",
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement(Icon, {
    src: Search,
    className: "w-[18px] h-[18px]"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-px h-6 bg-neutral-200 mx-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative",
    ref: dropdownRef
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "site-header-desktop__user-toggle flex items-center gap-2 bg-transparent border-none cursor-pointer p-0",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    "aria-label": intl.formatMessage(messages.userOptionsDropdownLabel),
    "aria-expanded": isOpen
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: "2rem",
    src: avatar,
    alt: "",
    className: "site-header-desktop__avatar"
  }), /*#__PURE__*/React.createElement(Icon, {
    src: ExpandMore,
    className: "site-header-desktop__user-caret w-4 h-4 text-neutral-400 transition-transform ".concat(isOpen ? 'rotate-180' : '')
  })), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "site-header-desktop__user-menu-content site-header-desktop__user-menu-content--learning"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-header-desktop__user-menu-summary"
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: "2.6rem",
    src: avatar,
    alt: "",
    className: "site-header-desktop__avatar site-header-desktop__avatar--studio-menu"
  }), /*#__PURE__*/React.createElement("div", {
    className: "site-header-desktop__user-menu-summary-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "site-header-desktop__user-menu-summary-label"
  }, username), secondaryLabel ? /*#__PURE__*/React.createElement("span", {
    className: "site-header-desktop__user-menu-summary-secondary"
  }, secondaryLabel) : null)), /*#__PURE__*/React.createElement("div", {
    className: "site-header-desktop__user-menu-divider",
    role: "separator"
  }), /*#__PURE__*/React.createElement(LearningUserMenuSlot, {
    items: dropdownItems
  }))));
};
AuthenticatedUserDropdown.propTypes = {
  username: PropTypes.string.isRequired,
  secondaryLabel: PropTypes.string,
  avatar: PropTypes.string
};
AuthenticatedUserDropdown.defaultProps = {
  secondaryLabel: null,
  avatar: null
};
export default AuthenticatedUserDropdown;
//# sourceMappingURL=AuthenticatedUserDropdown.js.map