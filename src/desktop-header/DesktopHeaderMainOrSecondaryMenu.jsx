import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import { ExpandMore } from '@openedx/paragon/icons';

import { Menu, MenuTrigger, MenuContent } from '../Menu';

const DesktopHeaderMainOrSecondaryMenu = ({ menu }) => {
  // Nodes are accepted as a prop
  if (!Array.isArray(menu)) {
    return menu;
  }

  return menu.map((menuItem) => {
    const {
      type,
      href,
      content,
      submenuContent,
      disabled,
      isActive,
      onClick,
    } = menuItem;

    if (type === 'item') {
      return (
        <a
          key={`${type}-${content}`}
          className={`
            text-sm font-medium text-neutral-700 px-3 py-2 rounded-lg
            transition-colors duration-200
            hover:text-neutral-900 hover:bg-neutral-100
            ${disabled ? 'opacity-50 pointer-events-none' : ''}
            ${isActive ? 'text-neutral-900 font-semibold' : ''}
          `}
          href={href}
          onClick={onClick || null}
        >
          {content}
        </a>
      );
    }

    return (
      <Menu key={`${type}-${content}`} tag="div" className="relative" respondToPointerEvents>
        <MenuTrigger
          onClick={onClick || null}
          tag="a"
          className="inline-flex items-center gap-1 text-sm font-medium text-neutral-700 px-3 py-2 rounded-lg transition-colors hover:text-neutral-900 hover:bg-neutral-100"
          href={href}
        >
          {content}
          <Icon src={ExpandMore} className="w-4 h-4" />
        </MenuTrigger>
        <MenuContent className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-neutral-100 py-2 min-w-[200px] z-50">
          {submenuContent}
        </MenuContent>
      </Menu>
    );
  });
};

export const desktopHeaderMainOrSecondaryMenuDataShape = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.array,
]);

DesktopHeaderMainOrSecondaryMenu.propTypes = {
  menu: desktopHeaderMainOrSecondaryMenuDataShape,
};

export default DesktopHeaderMainOrSecondaryMenu;
