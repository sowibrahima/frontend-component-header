import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import Avatar from '../Avatar';
var renderMenuItem = function renderMenuItem(item, variant) {
  var type = item.type,
    content = item.content,
    href = item.href,
    disabled = item.disabled,
    isActive = item.isActive,
    onClick = item.onClick,
    ItemIcon = item.icon;
  return /*#__PURE__*/React.createElement("a", {
    className: ['site-header-mobile__user-menu-item', variant === 'studio' ? 'site-header-mobile__user-menu-item--studio' : '', isActive ? 'site-header-mobile__user-menu-item--active' : '', disabled ? 'site-header-mobile__user-menu-item--disabled' : ''].filter(Boolean).join(' '),
    key: "".concat(type, "-").concat(content),
    href: href,
    onClick: onClick || null
  }, ItemIcon ? /*#__PURE__*/React.createElement("span", {
    className: "site-header-mobile__user-menu-item-icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon, {
    src: ItemIcon
  })) : null, /*#__PURE__*/React.createElement("span", null, content));
};
var MobileHeaderUserMenu = function MobileHeaderUserMenu(_ref) {
  var menu = _ref.menu,
    avatar = _ref.avatar,
    label = _ref.label,
    secondaryLabel = _ref.secondaryLabel,
    variant = _ref.variant;
  return /*#__PURE__*/React.createElement("div", {
    className: "site-header-mobile__user-menu site-header-mobile__user-menu--".concat(variant)
  }, label || secondaryLabel ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "site-header-mobile__user-menu-summary"
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: "2.4rem",
    src: avatar,
    alt: "",
    className: "site-header-mobile__avatar site-header-mobile__avatar--menu"
  }), /*#__PURE__*/React.createElement("div", {
    className: "site-header-mobile__user-menu-summary-copy"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "site-header-mobile__user-menu-summary-label"
  }, label) : null, secondaryLabel ? /*#__PURE__*/React.createElement("span", {
    className: "site-header-mobile__user-menu-summary-secondary"
  }, secondaryLabel) : null)), /*#__PURE__*/React.createElement("div", {
    className: "site-header-mobile__user-menu-divider",
    role: "separator"
  })) : null, menu.map(function (group, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement(React.Fragment, {
        key: index
      }, group.items.map(function (item) {
        return renderMenuItem(item, variant);
      }), index < menu.length - 1 ? /*#__PURE__*/React.createElement("div", {
        className: "site-header-mobile__user-menu-divider",
        role: "separator"
      }) : null)
    );
  }));
};
export var mobileHeaderUserMenuDataShape = PropTypes.arrayOf(PropTypes.shape({
  heading: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['item', 'menu']),
    href: PropTypes.string,
    content: PropTypes.string,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }))
}));
MobileHeaderUserMenu.propTypes = {
  menu: mobileHeaderUserMenuDataShape,
  avatar: PropTypes.string,
  label: PropTypes.string,
  secondaryLabel: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'studio'])
};
MobileHeaderUserMenu.defaultProps = {
  avatar: null,
  label: null,
  secondaryLabel: null,
  variant: 'default'
};
export default MobileHeaderUserMenu;
//# sourceMappingURL=MobileHeaderUserMenu.js.map