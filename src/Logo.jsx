import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({
  href,
  // eslint-disable-next-line no-unused-vars
  src,
  // eslint-disable-next-line no-unused-vars
  alt,
  ...attributes
}) => (
  <a href={href} className="flex items-center shrink-0 mr-6 gap-2 no-underline" {...attributes}>
    {/* Branded square icon */}
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        backgroundColor: 'var(--wuti-color-brand)',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          color: 'var(--wuti-color-brand-text)',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 800,
          fontSize: '16px',
          lineHeight: 1,
          letterSpacing: '-0.5px',
        }}
      >
        W
      </span>
    </span>
    {/* Wordmark */}
    <span
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        fontSize: '15px',
        color: 'var(--wuti-color-text)',
        letterSpacing: '-0.3px',
      }}
    >
      WutiSkill
    </span>
  </a>
);

export const logoDataShape = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Logo.propTypes = logoDataShape;

export default Logo;
