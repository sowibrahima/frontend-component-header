import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import DesktopHeaderUserMenu, { desktopUserMenuDataShape } from '../../desktop-header/DesktopHeaderUserMenu';
var DesktopUserMenuSlot = function DesktopUserMenuSlot(_ref) {
  var menu = _ref.menu,
    avatar = _ref.avatar,
    label = _ref.label,
    secondaryLabel = _ref.secondaryLabel,
    variant = _ref.variant;
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "org.openedx.frontend.layout.header_desktop_user_menu.v1",
    idAliases: ['desktop_user_menu_slot'],
    slotOptions: {
      mergeProps: true
    }
  }, /*#__PURE__*/React.createElement(DesktopHeaderUserMenu, {
    menu: menu,
    avatar: avatar,
    label: label,
    secondaryLabel: secondaryLabel,
    variant: variant
  }));
};
DesktopUserMenuSlot.propTypes = {
  menu: desktopUserMenuDataShape,
  avatar: PropTypes.string,
  label: PropTypes.string,
  secondaryLabel: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'studio'])
};
DesktopUserMenuSlot.defaultProps = {
  avatar: null,
  label: null,
  secondaryLabel: null,
  variant: 'default'
};
export default DesktopUserMenuSlot;
//# sourceMappingURL=index.js.map