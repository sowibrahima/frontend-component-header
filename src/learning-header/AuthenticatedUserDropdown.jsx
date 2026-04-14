import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@openedx/paragon';
import {
  Dashboard,
  ExpandMore,
  Logout,
  PersonOutline,
  ReceiptLong,
  Search,
  Settings,
} from '@openedx/paragon/icons';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';

import Avatar from '../Avatar';
import LearningUserMenuSlot from '../plugin-slots/LearningUserMenuSlot';

import messages from './messages';

const AuthenticatedUserDropdown = ({ username, secondaryLabel, avatar }) => {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dropdownItems = [
    {
      message: intl.formatMessage(messages.dashboard),
      href: `${getConfig().LMS_BASE_URL}/dashboard`,
      icon: Dashboard,
    },
    {
      message: intl.formatMessage(messages.profile),
      href: `${getConfig().ACCOUNT_PROFILE_URL}/u/${username}`,
      icon: PersonOutline,
    },
    {
      message: intl.formatMessage(messages.account),
      href: getConfig().ACCOUNT_SETTINGS_URL,
      icon: Settings,
    },
    ...(getConfig().ORDER_HISTORY_URL ? [{
      message: intl.formatMessage(messages.orderHistory),
      href: getConfig().ORDER_HISTORY_URL,
      icon: ReceiptLong,
    }] : []),
    {
      message: intl.formatMessage(messages.signOut),
      href: getConfig().LOGOUT_URL,
      icon: Logout,
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {/* Search Icon */}
      <button
        type="button"
        className="w-9 h-9 flex items-center justify-center rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
        aria-label="Search"
      >
        <Icon src={Search} className="w-[18px] h-[18px]" />
      </button>

      {/* Separator */}
      <div className="w-px h-6 bg-neutral-200 mx-1" />

      {/* User Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          className="site-header-desktop__user-toggle flex items-center gap-2 bg-transparent border-none cursor-pointer p-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={intl.formatMessage(messages.userOptionsDropdownLabel)}
          aria-expanded={isOpen}
        >
          <Avatar size="2rem" src={avatar} alt="" className="site-header-desktop__avatar" />
          <Icon
            src={ExpandMore}
            className={`site-header-desktop__user-caret w-4 h-4 text-neutral-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="site-header-desktop__user-menu-content site-header-desktop__user-menu-content--learning">
            <div className="site-header-desktop__user-menu-summary">
              <Avatar size="2.6rem" src={avatar} alt="" className="site-header-desktop__avatar site-header-desktop__avatar--studio-menu" />
              <div className="site-header-desktop__user-menu-summary-copy">
                <span className="site-header-desktop__user-menu-summary-label">{username}</span>
                {secondaryLabel ? (
                  <span className="site-header-desktop__user-menu-summary-secondary">
                    {secondaryLabel}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="site-header-desktop__user-menu-divider" role="separator" />
            <LearningUserMenuSlot items={dropdownItems} />
          </div>
        )}
      </div>
    </div>
  );
};

AuthenticatedUserDropdown.propTypes = {
  username: PropTypes.string.isRequired,
  secondaryLabel: PropTypes.string,
  avatar: PropTypes.string,
};

AuthenticatedUserDropdown.defaultProps = {
  secondaryLabel: null,
  avatar: null,
};

export default AuthenticatedUserDropdown;
