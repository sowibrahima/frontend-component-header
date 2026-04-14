import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import MobileHeaderUserMenu, { mobileHeaderUserMenuDataShape } from '../../mobile-header/MobileHeaderUserMenu';

const MobileUserMenuSlot = ({
  menu,
  avatar,
  label,
  secondaryLabel,
  variant,
}) => (
  <PluginSlot
    id="org.openedx.frontend.layout.header_mobile_user_menu.v1"
    idAliases={['mobile_user_menu_slot']}
    slotOptions={{
      mergeProps: true,
    }}
  >
    <MobileHeaderUserMenu
      menu={menu}
      avatar={avatar}
      label={label}
      secondaryLabel={secondaryLabel}
      variant={variant}
    />
  </PluginSlot>
);

MobileUserMenuSlot.propTypes = {
  menu: mobileHeaderUserMenuDataShape,
};

export default MobileUserMenuSlot;
