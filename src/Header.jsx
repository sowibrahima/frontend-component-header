import React, { useContext } from 'react';
import Responsive from 'react-responsive';
import { useIntl } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import {
  APP_CONFIG_INITIALIZED,
  ensureConfig,
  mergeConfig,
  getConfig,
  subscribe,
} from '@edx/frontend-platform';

import PropTypes from 'prop-types';
import {
  Dashboard,
  Home,
  Logout,
  PersonOutline,
  ReceiptLong,
  Settings,
} from '@openedx/paragon/icons';
import DesktopHeaderSlot from './plugin-slots/DesktopHeaderSlot';
import MobileHeaderSlot from './plugin-slots/MobileHeaderSlot';

import messages from './Header.messages';

ensureConfig([
  'LMS_BASE_URL',
  'LOGOUT_URL',
  'LOGIN_URL',
  'SITE_NAME',
  'LOGO_URL',
  'ORDER_HISTORY_URL',
  'STUDIO_BASE_URL',
], 'Header component');

subscribe(APP_CONFIG_INITIALIZED, () => {
  mergeConfig({
    AUTHN_MINIMAL_HEADER: !!process.env.AUTHN_MINIMAL_HEADER,
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
const Header = ({
  mainMenuItems,
  secondaryMenuItems,
  userMenuItems,
  desktopBrandSupplement,
  logoDestination,
  showStudioLinkInUserMenu,
  userMenuVariant,
}) => {
  const { authenticatedUser, config } = useContext(AppContext);
  const intl = useIntl();

  const defaultMainMenu = [
    {
      type: 'item',
      href: `${config.LMS_BASE_URL}/dashboard`,
      content: intl.formatMessage(messages['header.links.explore']),
    },
    {
      type: 'item',
      href: `${config.LMS_BASE_URL}/dashboard`,
      content: intl.formatMessage(messages['header.links.my.courses']),
    },
  ];

  // Derive a readable display name: "First L." from full name, fallback to username
  const getDisplayName = (user) => {
    if (!user) { return null; }
    const fullName = user.name || '';
    const parts = fullName.trim().split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return `${parts[0]} ${parts[parts.length - 1][0]}.`;
    }
    if (parts.length === 1) {
      return parts[0];
    }
    return user.username;
  };

  const studioHomeMenuItem = {
    type: 'item',
    href: getConfig().STUDIO_BASE_URL,
    content: intl.formatMessage(messages['header.user.menu.studio.home']),
    icon: Home,
  };

  const dashboardMenuItem = {
    type: 'item',
    href: `${config.LMS_BASE_URL}/dashboard`,
    content: intl.formatMessage(messages['header.user.menu.dashboard']),
    icon: Dashboard,
  };

  const defaultUserMenu = authenticatedUser === null ? [] : [{
    heading: '',
    items: [
      ...(showStudioLinkInUserMenu ? [studioHomeMenuItem] : [dashboardMenuItem]),
      {
        type: 'item',
        href: `${config.ACCOUNT_PROFILE_URL}/u/${authenticatedUser.username}`,
        content: intl.formatMessage(messages['header.user.menu.profile']),
        icon: PersonOutline,
      },
      {
        type: 'item',
        href: config.ACCOUNT_SETTINGS_URL,
        content: intl.formatMessage(messages['header.user.menu.account.settings']),
        icon: Settings,
      },
      // Users should only see Order History if have a ORDER_HISTORY_URL define in the environment.
      ...(config.ORDER_HISTORY_URL ? [{
        type: 'item',
        href: config.ORDER_HISTORY_URL,
        content: intl.formatMessage(messages['header.user.menu.order.history']),
        icon: ReceiptLong,
      }] : []),
      {
        type: 'item',
        href: config.LOGOUT_URL,
        content: intl.formatMessage(messages['header.user.menu.logout']),
        icon: Logout,
      },
    ],
  }];

  const mainMenu = mainMenuItems || defaultMainMenu;
  const secondaryMenu = secondaryMenuItems || [];

  // WS_CUSTOM: Merge Studio URL into user menu if userMenuItems are provided
  let userMenu = userMenuItems || defaultUserMenu;
  if (userMenuItems && userMenuItems.length > 0) {
    // Add Studio URL as the first item in the provided user menu when requested.
    userMenu = [
      {
        heading: '',
        items: [
          ...(showStudioLinkInUserMenu ? [studioHomeMenuItem] : []),
          ...userMenuItems[0].items,
        ],
      },
      ...userMenuItems.slice(1),
    ];
  }

  const loggedOutItems = [
    {
      type: 'item',
      href: config.LOGIN_URL,
      content: intl.formatMessage(messages['header.user.menu.login']),
    },
    {
      type: 'item',
      href: `${config.LMS_BASE_URL}/register`,
      content: intl.formatMessage(messages['header.user.menu.register']),
    },
  ];

  const props = {
    logo: config.LOGO_URL,
    logoAltText: config.SITE_NAME,
    logoDestination: logoDestination || `${config.LMS_BASE_URL}/dashboard`,
    desktopBrandSupplement,
    loggedIn: authenticatedUser !== null,
    username: authenticatedUser !== null
      ? (
        userMenuVariant === 'studio'
          ? authenticatedUser.name || authenticatedUser.username || getDisplayName(authenticatedUser)
          : getDisplayName(authenticatedUser)
      )
      : null,
    userMenuSecondaryLabel: (
      authenticatedUser !== null
        ? (
          authenticatedUser.email
          || (
            authenticatedUser.username
            && authenticatedUser.username !== authenticatedUser.name
              ? authenticatedUser.username
              : null
          )
        )
        : null
    ),
    avatar: authenticatedUser !== null ? authenticatedUser.avatar : null,
    userMenuVariant,
    mainMenu: getConfig().AUTHN_MINIMAL_HEADER ? [] : mainMenu,
    secondaryMenu: getConfig().AUTHN_MINIMAL_HEADER ? [] : secondaryMenu,
    userMenu: getConfig().AUTHN_MINIMAL_HEADER ? [] : userMenu,
    loggedOutItems: getConfig().AUTHN_MINIMAL_HEADER ? [] : loggedOutItems,
  };

  return (
    <>
      <Responsive maxWidth={769}>
        <MobileHeaderSlot props={props} />
      </Responsive>
      <Responsive minWidth={769}>
        <DesktopHeaderSlot props={props} />
      </Responsive>
    </>
  );
};

Header.defaultProps = {
  mainMenuItems: null,
  secondaryMenuItems: null,
  userMenuItems: null,
  desktopBrandSupplement: null,
  logoDestination: null,
  showStudioLinkInUserMenu: true,
  userMenuVariant: 'default',
};

Header.propTypes = {
  mainMenuItems: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ]),
  secondaryMenuItems: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ]),
  userMenuItems: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf(['item', 'menu']),
      href: PropTypes.string,
      content: PropTypes.string,
      isActive: PropTypes.bool,
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    })),
  })),
  desktopBrandSupplement: PropTypes.node,
  logoDestination: PropTypes.string,
  showStudioLinkInUserMenu: PropTypes.bool,
  userMenuVariant: PropTypes.oneOf(['default', 'studio']),
};

export default Header;
