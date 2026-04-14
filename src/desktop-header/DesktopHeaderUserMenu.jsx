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
        'site-header-desktop__user-menu-item',
        variant === 'studio' ? 'site-header-desktop__user-menu-item--studio' : '',
        isActive ? 'site-header-desktop__user-menu-item--active' : '',
        disabled ? 'site-header-desktop__user-menu-item--disabled' : '',
      ].filter(Boolean).join(' ')}
      key={`${type}-${content}`}
      href={href}
      onClick={onClick || null}
    >
      {ItemIcon ? (
        <span className="site-header-desktop__user-menu-item-icon" aria-hidden="true">
          <Icon src={ItemIcon} />
        </span>
      ) : null}
      <span className="site-header-desktop__user-menu-item-label">{content}</span>
    </a>
  );
};

const DesktopHeaderUserMenu = ({
  menu,
  avatar,
  label,
  secondaryLabel,
  variant,
}) => (
  <div className={`site-header-desktop__user-menu site-header-desktop__user-menu--${variant}`}>
    {label || secondaryLabel ? (
      <>
        <div className="site-header-desktop__user-menu-summary">
          <Avatar size="2.6rem" src={avatar} alt="" className="site-header-desktop__avatar site-header-desktop__avatar--studio-menu" />
          <div className="site-header-desktop__user-menu-summary-copy">
            {label ? (
              <span className="site-header-desktop__user-menu-summary-label">{label}</span>
            ) : null}
            {secondaryLabel ? (
              <span className="site-header-desktop__user-menu-summary-secondary">{secondaryLabel}</span>
            ) : null}
          </div>
        </div>
        <div className="site-header-desktop__user-menu-divider" role="separator" />
      </>
    ) : null}

    {menu.map((group, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <React.Fragment key={index}>
        {group.heading && (
          <div
            className="site-header-desktop__user-menu-heading"
            role="heading"
            aria-level="1"
          >
            {group.heading}
          </div>
        )}
        {group.items.map((item) => renderMenuItem(item, variant))}
        {index < menu.length - 1 && (
          <div className="site-header-desktop__user-menu-divider" role="separator" />
        )}
      </React.Fragment>
    ))}
  </div>
);

export const desktopUserMenuDataShape = PropTypes.arrayOf(PropTypes.shape({
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

DesktopHeaderUserMenu.propTypes = {
  menu: desktopUserMenuDataShape,
  avatar: PropTypes.string,
  label: PropTypes.string,
  secondaryLabel: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'studio']),
};

DesktopHeaderUserMenu.defaultProps = {
  avatar: null,
  label: null,
  secondaryLabel: null,
  variant: 'default',
};

export default DesktopHeaderUserMenu;
