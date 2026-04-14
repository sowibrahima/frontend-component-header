import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import { ExpandMore } from '@openedx/paragon/icons';
import Avatar from '../Avatar';

const DesktopUserMenuToggle = ({
  avatar,
  variant,
}) => {
  return (
    <div className={`site-header-desktop__user-toggle ${variant === 'studio' ? 'site-header-desktop__user-toggle--studio' : ''} flex items-center gap-2`}>
      <Avatar
        size={variant === 'studio' ? '2rem' : '1.9rem'}
        src={avatar}
        alt=""
        className={`site-header-desktop__avatar ${variant === 'studio' ? 'site-header-desktop__avatar--studio' : ''}`}
      />
      <Icon
        src={ExpandMore}
        className={`site-header-desktop__user-caret ${variant === 'studio' ? 'site-header-desktop__user-caret--studio' : ''} w-4 h-4 text-neutral-400`}
      />
    </div>
  );
};

export const DesktopUserMenuTogglePropTypes = {
  avatar: PropTypes.string,
  label: PropTypes.string,
  secondaryLabel: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'studio']),
};

DesktopUserMenuToggle.propTypes = DesktopUserMenuTogglePropTypes;

DesktopUserMenuToggle.defaultProps = {
  secondaryLabel: null,
  variant: 'default',
};

export default DesktopUserMenuToggle;
