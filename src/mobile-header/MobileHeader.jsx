import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';

// Local Components
import MobileUserMenuToggleSlot from '../plugin-slots/MobileUserMenuToggleSlot';
import { Menu, MenuTrigger, MenuContent } from '../Menu';
import LogoSlot from '../plugin-slots/LogoSlot';
import MobileLoggedOutItemsSlot from '../plugin-slots/MobileLoggedOutItemsSlot';
import { mobileHeaderLoggedOutItemsDataShape } from './MobileLoggedOutItems';
import MobileMainMenuSlot from '../plugin-slots/MobileMainMenuSlot';
import { mobileHeaderMainMenuDataShape } from './MobileHeaderMainMenu';
import MobileUserMenuSlot from '../plugin-slots/MobileUserMenuSlot';
import { mobileHeaderUserMenuDataShape } from './MobileHeaderUserMenu';

// i18n
import messages from '../Header.messages';

// Assets
import { MenuIcon } from '../Icons';

const MobileHeader = ({
  mainMenu,
  secondaryMenu,
  userMenu,
  loggedOutItems,
  logo,
  logoAltText,
  logoDestination,
  avatar,
  username,
  userMenuSecondaryLabel,
  userMenuVariant,
  loggedIn,
  stickyOnMobile,
}) => {
  const intl = useIntl();

  const renderMainMenu = () => <MobileMainMenuSlot menu={[...mainMenu, ...secondaryMenu]} />;

  const renderUserMenuItems = () => (
    <MobileUserMenuSlot
      menu={userMenu}
      avatar={avatar}
      label={username}
      secondaryLabel={userMenuSecondaryLabel}
      variant={userMenuVariant}
    />
  );

  const renderLoggedOutItems = () => <MobileLoggedOutItemsSlot items={loggedOutItems} />;

  const renderUserMenuToggle = () => (
    <MobileUserMenuToggleSlot
      avatar={avatar}
      label={username}
      secondaryLabel={userMenuSecondaryLabel}
      variant={userMenuVariant}
    />
  );

  const logoProps = { src: logo, alt: logoAltText, href: logoDestination };
  const stickyClassName = stickyOnMobile ? 'site-header-mobile--sticky' : '';

  return (
    <header
      aria-label={intl.formatMessage(messages['header.label.main.header'])}
      className={`site-header-mobile ${stickyClassName} sticky top-0 z-40`}
    >
      <a className="nav-skip sr-only sr-only-focusable" href="#main">{intl.formatMessage(messages['header.label.skip.nav'])}</a>
      {mainMenu.length > 0 ? (
        <div className="site-header-mobile__section site-header-mobile__section--main-trigger">
          <Menu className="site-header-mobile__menu site-header-mobile__menu--main">
            <MenuTrigger
              tag="button"
              className="icon-button site-header-mobile__icon-button"
              aria-label={intl.formatMessage(messages['header.label.main.menu'])}
              title={intl.formatMessage(messages['header.label.main.menu'])}
            >
              <MenuIcon role="img" aria-hidden focusable="false" style={{ width: '1.5rem', height: '1.5rem' }} />
            </MenuTrigger>
            <MenuContent
              tag="nav"
              aria-label={intl.formatMessage(messages['header.label.main.nav'])}
              className="site-header-mobile__panel site-header-mobile__panel--main nav flex-column py-2"
            >
              {renderMainMenu()}
            </MenuContent>
          </Menu>
        </div>
      ) : null}
      <div className="site-header-mobile__section site-header-mobile__section--brand">
        <LogoSlot {...logoProps} itemType="http://schema.org/Organization" />
      </div>
      {userMenu.length > 0 || loggedOutItems.length > 0 ? (
        <div className="site-header-mobile__section site-header-mobile__section--account">
          <Menu
            tag="nav"
            aria-label={intl.formatMessage(messages['header.label.secondary.nav'])}
            className="site-header-mobile__menu site-header-mobile__menu--user"
          >
            <MenuTrigger
              tag="button"
              className="icon-button site-header-mobile__icon-button"
              aria-label={intl.formatMessage(messages['header.label.account.menu'])}
              title={intl.formatMessage(messages['header.label.account.menu'])}
            >
              {renderUserMenuToggle()}
            </MenuTrigger>
            <MenuContent tag="div" className="site-header-mobile__panel site-header-mobile__panel--user nav flex-column py-2">
              {loggedIn ? renderUserMenuItems() : renderLoggedOutItems()}
            </MenuContent>
          </Menu>
        </div>
      ) : null}
    </header>
  );
};

export const mobileHeaderDataShape = {
  mainMenu: mobileHeaderMainMenuDataShape,
  secondaryMenu: mobileHeaderMainMenuDataShape,
  userMenu: mobileHeaderUserMenuDataShape,
  loggedOutItems: mobileHeaderLoggedOutItemsDataShape,
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
  logoDestination: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  userMenuSecondaryLabel: PropTypes.string,
  userMenuVariant: PropTypes.oneOf(['default', 'studio']),
  loggedIn: PropTypes.bool,
  stickyOnMobile: PropTypes.bool,
};

MobileHeader.propTypes = {
  mainMenu: mobileHeaderDataShape.mainMenu,
  secondaryMenu: mobileHeaderDataShape.secondaryMenu,
  userMenu: mobileHeaderDataShape.userMenu,
  loggedOutItems: mobileHeaderDataShape.loggedOutItems,
  logo: mobileHeaderDataShape.logo,
  logoAltText: mobileHeaderDataShape.logoAltText,
  logoDestination: mobileHeaderDataShape.logoDestination,
  avatar: mobileHeaderDataShape.avatar,
  username: mobileHeaderDataShape.username,
  userMenuSecondaryLabel: mobileHeaderDataShape.userMenuSecondaryLabel,
  userMenuVariant: mobileHeaderDataShape.userMenuVariant,
  loggedIn: mobileHeaderDataShape.loggedIn,
  stickyOnMobile: mobileHeaderDataShape.stickyOnMobile,
};

MobileHeader.defaultProps = {
  mainMenu: [],
  secondaryMenu: [],
  userMenu: [],
  loggedOutItems: [],
  logo: null,
  logoAltText: null,
  logoDestination: null,
  avatar: null,
  username: null,
  userMenuSecondaryLabel: null,
  userMenuVariant: 'default',
  loggedIn: false,
  stickyOnMobile: true,

};

export default MobileHeader;
