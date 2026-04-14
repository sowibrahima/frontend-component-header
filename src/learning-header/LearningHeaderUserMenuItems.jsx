import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';

const LearningHeaderUserMenuItems = ({ items }) => items.map((item) => (
  <a
    key={item.href}
    href={item.href}
    className="site-header-desktop__user-menu-item site-header-desktop__user-menu-item--learning"
  >
    {item.icon ? (
      <span className="site-header-desktop__user-menu-item-icon" aria-hidden="true">
        <Icon src={item.icon} />
      </span>
    ) : null}
    <span className="site-header-desktop__user-menu-item-label">{item.message}</span>
  </a>
));

export const learningHeaderUserMenuDataShape = {
  items: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  })),
};

LearningHeaderUserMenuItems.propTypes = learningHeaderUserMenuDataShape;

export default LearningHeaderUserMenuItems;
