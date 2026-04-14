import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import { Person } from '@openedx/paragon/icons';

const LearningUserMenuToggle = ({
  label,
}) => (
  <>
    <Icon src={Person} className="w-5 h-5 md:hidden" />
    <span data-hj-suppress className="hidden md:inline text-sm font-semibold text-neutral-900">
      {label}
    </span>
  </>
);

export const LearningUserMenuTogglePropTypes = {
  label: PropTypes.string.isRequired,
};

LearningUserMenuToggle.propTypes = LearningUserMenuTogglePropTypes;

export default LearningUserMenuToggle;
