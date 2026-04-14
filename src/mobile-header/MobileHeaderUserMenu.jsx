import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import Avatar from '../Avatar';

const renderMenuItem = (item, variant) => {
  const {
    type,
    content,
    href,
    disabled,
    isActive,
    onClick,
    icon: ItemIcon,
  } = item;

  return (
    <a
      className={[
        'site-header-mobile__user-menu-item',
        variant === 'studio' ? 'site-header-mobile__user-menu-item--studio' : '',
        isActive ? 'site-header-mobile__user-menu-item--active' : '',
        disabled ? 'site-header-mobile__user-menu-item--disabled' : '',
      ].filter(Boolean).join(' ')}
      key={`${type}-${content}`}
      href={href}
      onClick={onClick || null}
    >
      {ItemIcon ? (
        <span className="site-header-mobile__user-menu-item-icon" aria-hidden="true">
          <Icon src={ItemIcon} />
        </span>
      ) : null}
      <span>{content}</span>
    </a>
  );
};

const MobileHeaderUserMenu = ({
  menu,
  avatar,
  label,
  secondaryLabel,
  variant,
}) => (
  <div className={`site-header-mobile__user-menu site-header-mobile__user-menu--${variant}`}>
    {label || secondaryLabel ? (
      <>
        <div className="site-header-mobile__user-menu-summary">
          <Avatar size="2.4rem" src={avatar} alt="" className="site-header-mobile__avatar site-header-mobile__avatar--menu" />
          <div className="site-header-mobile__user-menu-summary-copy">
            {label ? <span className="site-header-mobile__user-menu-summary-label">{label}</span> : null}
            {secondaryLabel ? <span className="site-header-mobile__user-menu-summary-secondary">{secondaryLabel}</span> : null}
          </div>
        </div>
        <div className="site-header-mobile__user-menu-divider" role="separator" />
      </>
    ) : null}

    {menu.map((group, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <React.Fragment key={index}>
        {group.items.map((item) => renderMenuItem(item, variant))}
        {index < menu.length - 1 ? (
          <div className="site-header-mobile__user-menu-divider" role="separator" />
        ) : null}
      </React.Fragment>
    ))}
  </div>
);

export const mobileHeaderUserMenuDataShape = PropTypes.arrayOf(PropTypes.shape({
  heading: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['item', 'menu']),
    href: PropTypes.string,
    content: PropTypes.string,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  })),
}));

MobileHeaderUserMenu.propTypes = {
  menu: mobileHeaderUserMenuDataShape,
  avatar: PropTypes.string,
  label: PropTypes.string,
  secondaryLabel: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'studio']),
};

MobileHeaderUserMenu.defaultProps = {
  avatar: null,
  label: null,
  secondaryLabel: null,
  variant: 'default',
};

export default MobileHeaderUserMenu;
