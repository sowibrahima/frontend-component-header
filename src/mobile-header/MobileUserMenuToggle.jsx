import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import { ExpandMore } from '@openedx/paragon/icons';
import Avatar from '../Avatar';

const MobileUserMenuToggle = ({
  avatar,
  variant,
}) => (
  <div className={`site-header-mobile__user-toggle ${variant === 'studio' ? 'site-header-mobile__user-toggle--studio' : ''}`}>
    <Avatar
      size={variant === 'studio' ? '2rem' : '1.75rem'}
      src={avatar}
      alt=""
      className="site-header-mobile__avatar"
    />
    <Icon src={ExpandMore} className="site-header-mobile__user-caret" />
  </div>
);

export const MobileUserMenuTogglePropTypes = {
  avatar: PropTypes.string,
  label: PropTypes.string,
  secondaryLabel: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'studio']),
};

MobileUserMenuToggle.propTypes = MobileUserMenuTogglePropTypes;

MobileUserMenuToggle.defaultProps = {
  label: null,
  secondaryLabel: null,
  variant: 'default',
};

export default MobileUserMenuToggle;
