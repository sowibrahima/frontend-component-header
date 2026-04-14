import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import { Person } from '@openedx/paragon/icons';
var LearningUserMenuToggle = function LearningUserMenuToggle(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    src: Person,
    className: "w-5 h-5 md:hidden"
  }), /*#__PURE__*/React.createElement("span", {
    "data-hj-suppress": true,
    className: "hidden md:inline text-sm font-semibold text-neutral-900"
  }, label));
};
export var LearningUserMenuTogglePropTypes = {
  label: PropTypes.string.isRequired
};
LearningUserMenuToggle.propTypes = LearningUserMenuTogglePropTypes;
export default LearningUserMenuToggle;
//# sourceMappingURL=LearningUserMenuToggle.js.map