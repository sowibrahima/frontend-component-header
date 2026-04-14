import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

// Local Components
import DesktopUserMenuToggleSlot from '../plugin-slots/DesktopUserMenuToggleSlot';
import { Menu, MenuTrigger, MenuContent } from '../Menu';
import LogoSlot from '../plugin-slots/LogoSlot';
import DesktopLoggedOutItemsSlot from '../plugin-slots/DesktopLoggedOutItemsSlot';
import { desktopLoggedOutItemsDataShape } from './DesktopLoggedOutItems';
import DesktopMainMenuSlot from '../plugin-slots/DesktopMainMenuSlot';
import { desktopHeaderMainOrSecondaryMenuDataShape } from './DesktopHeaderMainOrSecondaryMenu';
import DesktopSecondaryMenuSlot from '../plugin-slots/DesktopSecondaryMenuSlot';
import DesktopUserMenuSlot from '../plugin-slots/DesktopUserMenuSlot';
import { desktopUserMenuDataShape } from './DesktopHeaderUserMenu';

// i18n
import messages from '../Header.messages';
var DesktopHeader = function DesktopHeader(_ref) {
  var mainMenu = _ref.mainMenu,
    secondaryMenu = _ref.secondaryMenu,
    userMenu = _ref.userMenu,
    loggedOutItems = _ref.loggedOutItems,
    logo = _ref.logo,
    logoAltText = _ref.logoAltText,
    logoDestination = _ref.logoDestination,
    desktopBrandSupplement = _ref.desktopBrandSupplement,
    avatar = _ref.avatar,
    username = _ref.username,
    userMenuSecondaryLabel = _ref.userMenuSecondaryLabel,
    userMenuVariant = _ref.userMenuVariant,
    loggedIn = _ref.loggedIn;
  var intl = useIntl();
  var renderMainMenu = function renderMainMenu() {
    return /*#__PURE__*/React.createElement(DesktopMainMenuSlot, {
      menu: mainMenu
    });
  };
  var renderSecondaryMenu = function renderSecondaryMenu() {
    return /*#__PURE__*/React.createElement(DesktopSecondaryMenuSlot, {
      menu: secondaryMenu
    });
  };
  var renderUserMenu = function renderUserMenu() {
    return /*#__PURE__*/React.createElement(Menu, {
      transitionClassName: "menu-dropdown",
      transitionTimeout: 250
    }, /*#__PURE__*/React.createElement(MenuTrigger, {
      tag: "button",
      "aria-label": intl.formatMessage(messages['header.label.account.menu.for'], {
        username: username
      }),
      className: "flex items-center bg-transparent border-none cursor-pointer p-0"
    }, /*#__PURE__*/React.createElement(DesktopUserMenuToggleSlot, {
      avatar: avatar,
      label: username,
      secondaryLabel: userMenuSecondaryLabel,
      variant: userMenuVariant
    })), /*#__PURE__*/React.createElement(MenuContent, {
      className: ['site-header-desktop__user-menu-content', userMenuVariant === 'studio' ? 'site-header-desktop__user-menu-content--studio' : ''].filter(Boolean).join(' ')
    }, /*#__PURE__*/React.createElement(DesktopUserMenuSlot, {
      menu: userMenu,
      avatar: avatar,
      label: username,
      secondaryLabel: userMenuSecondaryLabel,
      variant: userMenuVariant
    })));
  };
  var renderLoggedOutItems = function renderLoggedOutItems() {
    return /*#__PURE__*/React.createElement(DesktopLoggedOutItemsSlot, {
      items: loggedOutItems
    });
  };
  var logoProps = {
    src: logo,
    alt: logoAltText,
    href: logoDestination
  };
  var logoClasses = getConfig().AUTHN_MINIMAL_HEADER ? 'max-w-full' : null;
  return /*#__PURE__*/React.createElement("header", {
    className: "site-header-desktop bg-white border-b border-neutral-100 sticky top-0 z-40"
  }, /*#__PURE__*/React.createElement("a", {
    className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-2 focus:bg-white focus:text-brand",
    href: "#main"
  }, intl.formatMessage(messages['header.label.skip.nav'])), /*#__PURE__*/React.createElement("div", {
    className: "site-header-desktop__inner max-w-7xl mx-auto px-4 sm:px-6 ".concat(logoClasses || '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-header-desktop__row flex items-center h-14"
  }, /*#__PURE__*/React.createElement(LogoSlot, logoProps), desktopBrandSupplement ? /*#__PURE__*/React.createElement("div", {
    className: "site-header-desktop__brand-supplement"
  }, desktopBrandSupplement) : null, /*#__PURE__*/React.createElement("nav", {
    "aria-label": intl.formatMessage(messages['header.label.main.nav']),
    className: "site-header-desktop__main-nav flex items-center gap-1"
  }, renderMainMenu()), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }), /*#__PURE__*/React.createElement("nav", {
    "aria-label": intl.formatMessage(messages['header.label.secondary.nav']),
    className: "site-header-desktop__secondary-nav flex items-center gap-2"
  }, loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, renderSecondaryMenu(), /*#__PURE__*/React.createElement("div", {
    className: "site-header-desktop__separator w-px h-6 bg-neutral-200 mx-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "site-header-desktop__user-menu relative"
  }, renderUserMenu())) : renderLoggedOutItems()))));
};
export var desktopHeaderDataShape = {
  mainMenu: desktopHeaderMainOrSecondaryMenuDataShape,
  secondaryMenu: desktopHeaderMainOrSecondaryMenuDataShape,
  userMenu: desktopUserMenuDataShape,
  loggedOutItems: desktopLoggedOutItemsDataShape,
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
  logoDestination: PropTypes.string,
  desktopBrandSupplement: PropTypes.node,
  avatar: PropTypes.string,
  username: PropTypes.string,
  userMenuSecondaryLabel: PropTypes.string,
  userMenuVariant: PropTypes.oneOf(['default', 'studio']),
  loggedIn: PropTypes.bool
};
DesktopHeader.propTypes = {
  mainMenu: desktopHeaderDataShape.mainMenu,
  secondaryMenu: desktopHeaderDataShape.secondaryMenu,
  userMenu: desktopHeaderDataShape.userMenu,
  loggedOutItems: desktopHeaderDataShape.loggedOutItems,
  logo: desktopHeaderDataShape.logo,
  logoAltText: desktopHeaderDataShape.logoAltText,
  logoDestination: desktopHeaderDataShape.logoDestination,
  desktopBrandSupplement: desktopHeaderDataShape.desktopBrandSupplement,
  avatar: desktopHeaderDataShape.avatar,
  username: desktopHeaderDataShape.username,
  userMenuSecondaryLabel: desktopHeaderDataShape.userMenuSecondaryLabel,
  userMenuVariant: desktopHeaderDataShape.userMenuVariant,
  loggedIn: desktopHeaderDataShape.loggedIn
};
DesktopHeader.defaultProps = {
  mainMenu: [],
  secondaryMenu: [],
  userMenu: [],
  loggedOutItems: [],
  logo: null,
  logoAltText: null,
  logoDestination: null,
  desktopBrandSupplement: null,
  avatar: null,
  username: null,
  userMenuSecondaryLabel: null,
  userMenuVariant: 'default',
  loggedIn: false
};
export default DesktopHeader;
//# sourceMappingURL=DesktopHeader.js.map