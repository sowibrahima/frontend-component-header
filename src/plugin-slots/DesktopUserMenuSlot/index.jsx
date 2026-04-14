import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import DesktopHeaderUserMenu, { desktopUserMenuDataShape } from '../../desktop-header/DesktopHeaderUserMenu';

const DesktopUserMenuSlot = ({
  menu,
  avatar,
  label,
  secondaryLabel,
  variant,
}) => (
  <PluginSlot
    id="org.openedx.frontend.layout.header_desktop_user_menu.v1"
    idAliases={['desktop_user_menu_slot']}
    slotOptions={{
      mergeProps: true,
    }}
  >
    <DesktopHeaderUserMenu
      menu={menu}
      avatar={avatar}
      label={label}
      secondaryLabel={secondaryLabel}
      variant={variant}
    />
  </PluginSlot>
);

DesktopUserMenuSlot.propTypes = {
  menu: desktopUserMenuDataShape,
  avatar: PropTypes.string,
  label: PropTypes.string,
  secondaryLabel: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'studio']),
};

DesktopUserMenuSlot.defaultProps = {
  avatar: null,
  label: null,
  secondaryLabel: null,
  variant: 'default',
};

export default DesktopUserMenuSlot;
