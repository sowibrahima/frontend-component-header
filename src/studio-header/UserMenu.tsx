import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  Avatar,
} from '@openedx/paragon';
import NavDropdownMenu from './NavDropdownMenu';
import getUserMenuItems from './utils';

const UserMenu = ({
  username,
  studioBaseUrl,
  lmsBaseUrl,
  logoutUrl,
  authenticatedUserAvatar,
  isAdmin,
}) => {
  const intl = useIntl();
  const avatar = authenticatedUserAvatar ? (
    <img
      className="d-block w-100 h-100"
      src={authenticatedUserAvatar}
      alt={username}
      data-testid="avatar-image"
    />
  ) : (
    <Avatar
      size="sm"
      className="mr-2"
      alt={username}
      data-testid="avatar-icon"
    />
  );

  return (
    <NavDropdownMenu
      buttonTitle={avatar}
      id="user-dropdown-menu"
      items={getUserMenuItems({
        studioBaseUrl,
        lmsBaseUrl,
        logoutUrl,
        intl,
        isAdmin,
      })}
    />
  );
};

UserMenu.propTypes = {
  username: PropTypes.string,
  studioBaseUrl: PropTypes.string.isRequired,
  lmsBaseUrl: PropTypes.string.isRequired,
  logoutUrl: PropTypes.string.isRequired,
  authenticatedUserAvatar: PropTypes.string,
  isMobile: PropTypes.bool,
  isAdmin: PropTypes.bool,
};

UserMenu.defaultProps = {
  isMobile: false,
  isAdmin: false,
  authenticatedUserAvatar: null,
  username: null,
};

export default UserMenu;
