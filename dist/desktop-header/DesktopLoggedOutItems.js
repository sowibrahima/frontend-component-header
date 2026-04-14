import React from 'react';
import PropTypes from 'prop-types';
var DesktopLoggedOutItems = function DesktopLoggedOutItems(_ref) {
  var items = _ref.items;
  return items.map(function (item, i, arr) {
    return /*#__PURE__*/React.createElement("a", {
      key: "".concat(item.type, "-").concat(item.content),
      className: i < arr.length - 1 ? 'text-sm font-medium text-neutral-700 hover:text-neutral-900 px-3 py-2 transition-colors' : 'text-sm font-semibold text-white bg-brand px-5 py-2 rounded-full hover:bg-brand/90 transition-colors',
      href: item.href
    }, item.content);
  });
};
export var desktopLoggedOutItemsDataShape = PropTypes.arrayOf(PropTypes.shape({
  type: PropTypes.oneOf(['item', 'menu']),
  href: PropTypes.string,
  content: PropTypes.string
}));
DesktopLoggedOutItems.propTypes = {
  items: desktopLoggedOutItemsDataShape
};
export default DesktopLoggedOutItems;
//# sourceMappingURL=DesktopLoggedOutItems.js.map