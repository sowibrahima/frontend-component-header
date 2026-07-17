import React, { type FunctionComponent } from 'react';

import LogoSlot from '../plugin-slots/LogoSlot';

interface Props {
  studioBaseUrl: string;
  logo: string;
  logoAltText: string;
}

const BrandNav: FunctionComponent<Props> = ({
  studioBaseUrl,
  logo,
  logoAltText,
}) => (
  <LogoSlot
    href={studioBaseUrl}
    src={logo}
    alt={logoAltText}
  />
);

export default BrandNav;
