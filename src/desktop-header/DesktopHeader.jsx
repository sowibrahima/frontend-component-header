import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

// Local Components
import DesktopUserMenuToggleSlot
  from '../plugin-slots/DesktopUserMenuToggleSlot';
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

const DesktopHeader = ({
  mainMenu,
  secondaryMenu,
  userMenu,
  loggedOutItems,
  logo,
  logoAltText,
  logoDestination,
  desktopBrandSupplement,
  avatar,
  username,
  userMenuSecondaryLabel,
  userMenuVariant,
  loggedIn,
}) => {
  const intl = useIntl();

  const renderMainMenu = () => <DesktopMainMenuSlot menu={mainMenu} />;

  const renderSecondaryMenu = () => <DesktopSecondaryMenuSlot menu={secondaryMenu} />;

  const renderUserMenu = () => (
    <Menu transitionClassName="menu-dropdown" transitionTimeout={250}>
      <MenuTrigger
        tag="button"
        aria-label={intl.formatMessage(messages['header.label.account.menu.for'], { username })}
        className="flex items-center bg-transparent border-none cursor-pointer p-0"
      >
        <DesktopUserMenuToggleSlot
          avatar={avatar}
          label={username}
          secondaryLabel={userMenuSecondaryLabel}
          variant={userMenuVariant}
        />
      </MenuTrigger>
      <MenuContent
        className={[
          'site-header-desktop__user-menu-content',
          userMenuVariant === 'studio' ? 'site-header-desktop__user-menu-content--studio' : '',
        ].filter(Boolean).join(' ')}
      >
        <DesktopUserMenuSlot
          menu={userMenu}
          avatar={avatar}
          label={username}
          secondaryLabel={userMenuSecondaryLabel}
          variant={userMenuVariant}
        />
      </MenuContent>
    </Menu>
  );

  const renderLoggedOutItems = () => <DesktopLoggedOutItemsSlot items={loggedOutItems} />;

  const logoProps = { src: logo, alt: logoAltText, href: logoDestination };
  const logoClasses = getConfig().AUTHN_MINIMAL_HEADER ? 'max-w-full' : null;

  return (
    <header className="site-header-desktop bg-white border-b border-neutral-100 sticky top-0 z-40">
      <a className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-2 focus:bg-white focus:text-brand" href="#main">
        {intl.formatMessage(messages['header.label.skip.nav'])}
      </a>
      <div className={`site-header-desktop__inner max-w-7xl mx-auto px-4 sm:px-6 ${logoClasses || ''}`}>
        <div className="site-header-desktop__row flex items-center h-14">
          <LogoSlot {...logoProps} />
          {desktopBrandSupplement ? (
            <div className="site-header-desktop__brand-supplement">
              {desktopBrandSupplement}
            </div>
          ) : null}

          {/* Main Navigation */}
          <nav
            aria-label={intl.formatMessage(messages['header.label.main.nav'])}
            className="site-header-desktop__main-nav flex items-center gap-1"
          >
            {renderMainMenu()}
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right Section */}
          <nav
            aria-label={intl.formatMessage(messages['header.label.secondary.nav'])}
            className="site-header-desktop__secondary-nav flex items-center gap-2"
          >
            {loggedIn
              ? (
                <>
                  {renderSecondaryMenu()}

                  {/* Separator */}
                  <div className="site-header-desktop__separator w-px h-6 bg-neutral-200 mx-1" />

                  {/* User Menu */}
                  <div className="site-header-desktop__user-menu relative">
                    {renderUserMenu()}
                  </div>
                </>
              ) : renderLoggedOutItems()}
          </nav>
        </div>
      </div>
    </header>
  );
};

export const desktopHeaderDataShape = {
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
  loggedIn: PropTypes.bool,
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
  loggedIn: desktopHeaderDataShape.loggedIn,
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
  loggedIn: false,
};

export default DesktopHeader;
