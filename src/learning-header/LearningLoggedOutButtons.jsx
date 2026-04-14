import React from 'react';
import PropTypes from 'prop-types';

const LearningLoggedOutButtons = ({ buttonsInfo }) => buttonsInfo.map((buttonInfo) => (
  <a
    key={buttonInfo.href}
    href={buttonInfo.href}
    className={
      buttonInfo.variant === 'primary'
        ? 'ml-3 text-sm font-semibold text-white bg-brand px-5 py-2 rounded-full hover:bg-brand/90 transition-colors'
        : 'ml-3 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors'
    }
  >
    {buttonInfo.message}
  </a>
));

export const learningHeaderLoggedOutItemsDataShape = {
  buttonsInfo: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    href: PropTypes.string,
    variant: PropTypes.string,
  })),
};

LearningLoggedOutButtons.propTypes = learningHeaderLoggedOutItemsDataShape;

export default LearningLoggedOutButtons;
