function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import React, { useContext } from 'react';
import Responsive from 'react-responsive';
import { useIntl } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { APP_CONFIG_INITIALIZED, ensureConfig, mergeConfig, getConfig, subscribe } from '@edx/frontend-platform';
import PropTypes from 'prop-types';
import { Dashboard, Home, Logout, PersonOutline, ReceiptLong, Settings } from '@openedx/paragon/icons';
import DesktopHeaderSlot from './plugin-slots/DesktopHeaderSlot';
import MobileHeaderSlot from './plugin-slots/MobileHeaderSlot';
import messages from './Header.messages';
ensureConfig(['LMS_BASE_URL', 'LOGOUT_URL', 'LOGIN_URL', 'SITE_NAME', 'LOGO_URL', 'ORDER_HISTORY_URL', 'STUDIO_BASE_URL'], 'Header component');
subscribe(APP_CONFIG_INITIALIZED, function () {
  mergeConfig({
    AUTHN_MINIMAL_HEADER: !!process.env.AUTHN_MINIMAL_HEADER
  }, 'Header additional config');
});

/**
 * Header component for the application.
 * Displays a header with the provided main menu, secondary menu, and user menu when the user is authenticated.
 * If any of the props (mainMenuItems, secondaryMenuItems, userMenuItems) are not provided, default
 * items are displayed.
 * For more details on how to use this component, please refer to this document:
 * https://github.com/openedx/frontend-component-header/blob/master/docs/using_custom_header.rst
 *
 * @param {list} mainMenuItems - The list of main menu items to display.
 * See the documentation for the structure of main menu item.
 * @param {list} secondaryMenuItems - The list of secondary menu items to display.
 * See the documentation for the structure of secondary menu item.
 * @param {list} userMenuItems - The list of user menu items to display.
 * See the documentation for the structure of user menu item.
 */
var Header = function Header(_ref) {
  var mainMenuItems = _ref.mainMenuItems,
    secondaryMenuItems = _ref.secondaryMenuItems,
    userMenuItems = _ref.userMenuItems,
    desktopBrandSupplement = _ref.desktopBrandSupplement,
    logoDestination = _ref.logoDestination,
    showStudioLinkInUserMenu = _ref.showStudioLinkInUserMenu,
    userMenuVariant = _ref.userMenuVariant;
  var _useContext = useContext(AppContext),
    authenticatedUser = _useContext.authenticatedUser,
    config = _useContext.config;
  var intl = useIntl();
  var defaultMainMenu = [{
    type: 'item',
    href: "".concat(config.CATALOG_BASE_URL || config.LMS_BASE_URL, "/courses"),
    content: intl.formatMessage(messages['header.links.explore'])
  }, {
    type: 'item',
    href: "".concat(config.LMS_BASE_URL, "/dashboard"),
    content: intl.formatMessage(messages['header.links.my.courses'])
  }];

  // Derive a readable display name: "First L." from full name, fallback to username
  var getDisplayName = function getDisplayName(user) {
    if (!user) {
      return null;
    }
    var fullName = user.name || '';
    var parts = fullName.trim().split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return "".concat(parts[0], " ").concat(parts[parts.length - 1][0], ".");
    }
    if (parts.length === 1) {
      return parts[0];
    }
    return user.username;
  };
  var studioHomeMenuItem = {
    type: 'item',
    href: getConfig().STUDIO_BASE_URL,
    content: intl.formatMessage(messages['header.user.menu.studio.home']),
    icon: Home
  };
  var dashboardMenuItem = {
    type: 'item',
    href: "".concat(config.LMS_BASE_URL, "/dashboard"),
    content: intl.formatMessage(messages['header.user.menu.dashboard']),
    icon: Dashboard
  };
  var defaultUserMenu = authenticatedUser === null ? [] : [{
    heading: '',
    items: [].concat(_toConsumableArray(showStudioLinkInUserMenu ? [studioHomeMenuItem] : [dashboardMenuItem]), [{
      type: 'item',
      href: "".concat(config.ACCOUNT_PROFILE_URL, "/u/").concat(authenticatedUser.username),
      content: intl.formatMessage(messages['header.user.menu.profile']),
      icon: PersonOutline
    }, {
      type: 'item',
      href: config.ACCOUNT_SETTINGS_URL,
      content: intl.formatMessage(messages['header.user.menu.account.settings']),
      icon: Settings
    }], _toConsumableArray(config.ORDER_HISTORY_URL ? [{
      type: 'item',
      href: config.ORDER_HISTORY_URL,
      content: intl.formatMessage(messages['header.user.menu.order.history']),
      icon: ReceiptLong
    }] : []), [{
      type: 'item',
      href: config.LOGOUT_URL,
      content: intl.formatMessage(messages['header.user.menu.logout']),
      icon: Logout
    }])
  }];
  var mainMenu = mainMenuItems || defaultMainMenu;
  var secondaryMenu = secondaryMenuItems || [];

  // WS_CUSTOM: Merge Studio URL into user menu if userMenuItems are provided
  var userMenu = userMenuItems || defaultUserMenu;
  if (userMenuItems && userMenuItems.length > 0) {
    // Add Studio URL as the first item in the provided user menu when requested.
    userMenu = [{
      heading: '',
      items: [].concat(_toConsumableArray(showStudioLinkInUserMenu ? [studioHomeMenuItem] : []), _toConsumableArray(userMenuItems[0].items))
    }].concat(_toConsumableArray(userMenuItems.slice(1)));
  }
  var loggedOutItems = [{
    type: 'item',
    href: config.LOGIN_URL,
    content: intl.formatMessage(messages['header.user.menu.login'])
  }, {
    type: 'item',
    href: "".concat(config.LMS_BASE_URL, "/register"),
    content: intl.formatMessage(messages['header.user.menu.register'])
  }];
  var props = {
    logo: config.LOGO_URL,
    logoAltText: config.SITE_NAME,
    logoDestination: logoDestination || "".concat(config.LMS_BASE_URL, "/dashboard"),
    desktopBrandSupplement: desktopBrandSupplement,
    loggedIn: authenticatedUser !== null,
    username: authenticatedUser !== null ? userMenuVariant === 'studio' ? authenticatedUser.name || authenticatedUser.username || getDisplayName(authenticatedUser) : getDisplayName(authenticatedUser) : null,
    userMenuSecondaryLabel: authenticatedUser !== null ? authenticatedUser.email || (authenticatedUser.username && authenticatedUser.username !== authenticatedUser.name ? authenticatedUser.username : null) : null,
    avatar: authenticatedUser !== null ? authenticatedUser.avatar : null,
    userMenuVariant: userMenuVariant,
    mainMenu: getConfig().AUTHN_MINIMAL_HEADER ? [] : mainMenu,
    secondaryMenu: getConfig().AUTHN_MINIMAL_HEADER ? [] : secondaryMenu,
    userMenu: getConfig().AUTHN_MINIMAL_HEADER ? [] : userMenu,
    loggedOutItems: getConfig().AUTHN_MINIMAL_HEADER ? [] : loggedOutItems
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Responsive, {
    maxWidth: 769
  }, /*#__PURE__*/React.createElement(MobileHeaderSlot, {
    props: props
  })), /*#__PURE__*/React.createElement(Responsive, {
    minWidth: 769
  }, /*#__PURE__*/React.createElement(DesktopHeaderSlot, {
    props: props
  })));
};
Header.defaultProps = {
  mainMenuItems: null,
  secondaryMenuItems: null,
  userMenuItems: null,
  desktopBrandSupplement: null,
  logoDestination: null,
  showStudioLinkInUserMenu: true,
  userMenuVariant: 'default'
};
Header.propTypes = {
  mainMenuItems: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  secondaryMenuItems: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  userMenuItems: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf(['item', 'menu']),
      href: PropTypes.string,
      content: PropTypes.string,
      isActive: PropTypes.bool,
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    }))
  })),
  desktopBrandSupplement: PropTypes.node,
  logoDestination: PropTypes.string,
  showStudioLinkInUserMenu: PropTypes.bool,
  userMenuVariant: PropTypes.oneOf(['default', 'studio'])
};
export default Header;
//# sourceMappingURL=Header.js.map