import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IntlProvider } from 'react-intl';
import BrandNav from './BrandNav';

const studioBaseUrl = 'https://example.com/';
const logo = 'logo.png';
const logoAltText = 'Example Logo';

const RootWrapper = () => (
  <IntlProvider locale="en">
    <BrandNav
      studioBaseUrl={studioBaseUrl}
      logo={logo}
      logoAltText={logoAltText}
    />
  </IntlProvider>
);

describe('BrandNav Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the WutiSkill wordmark without depending on the remote logo image', () => {
    render(<RootWrapper />);

    expect(screen.getByText('WutiSkill')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('displays a link that navigates to studioBaseUrl', () => {
    render(<RootWrapper />);

    const link = screen.getByRole('link') as HTMLAnchorElement;
    expect(link.href).toBe(studioBaseUrl);
  });
});
