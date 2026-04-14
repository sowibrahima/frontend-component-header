import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import { ExpandMore } from '@openedx/paragon/icons';
import { Menu, MenuTrigger, MenuContent } from '../Menu';
var DesktopHeaderMainOrSecondaryMenu = function DesktopHeaderMainOrSecondaryMenu(_ref) {
  var menu = _ref.menu;
  // Nodes are accepted as a prop
  if (!Array.isArray(menu)) {
    return menu;
  }
  return menu.map(function (menuItem) {
    var type = menuItem.type,
      href = menuItem.href,
      content = menuItem.content,
      submenuContent = menuItem.submenuContent,
      disabled = menuItem.disabled,
      isActive = menuItem.isActive,
      onClick = menuItem.onClick;
    if (type === 'item') {
      return /*#__PURE__*/React.createElement("a", {
        key: "".concat(type, "-").concat(content),
        className: "\n            text-sm font-medium text-neutral-700 px-3 py-2 rounded-lg\n            transition-colors duration-200\n            hover:text-neutral-900 hover:bg-neutral-100\n            ".concat(disabled ? 'opacity-50 pointer-events-none' : '', "\n            ").concat(isActive ? 'text-neutral-900 font-semibold' : '', "\n          "),
        href: href,
        onClick: onClick || null
      }, content);
    }
    return /*#__PURE__*/React.createElement(Menu, {
      key: "".concat(type, "-").concat(content),
      tag: "div",
      className: "relative",
      respondToPointerEvents: true
    }, /*#__PURE__*/React.createElement(MenuTrigger, {
      onClick: onClick || null,
      tag: "a",
      className: "inline-flex items-center gap-1 text-sm font-medium text-neutral-700 px-3 py-2 rounded-lg transition-colors hover:text-neutral-900 hover:bg-neutral-100",
      href: href
    }, content, /*#__PURE__*/React.createElement(Icon, {
      src: ExpandMore,
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement(MenuContent, {
      className: "absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-neutral-100 py-2 min-w-[200px] z-50"
    }, submenuContent));
  });
};
export var desktopHeaderMainOrSecondaryMenuDataShape = PropTypes.oneOfType([PropTypes.node, PropTypes.array]);
DesktopHeaderMainOrSecondaryMenu.propTypes = {
  menu: desktopHeaderMainOrSecondaryMenuDataShape
};
export default DesktopHeaderMainOrSecondaryMenu;
//# sourceMappingURL=DesktopHeaderMainOrSecondaryMenu.js.map