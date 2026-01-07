import messages from './messages';

const getUserMenuItems = ({
  studioBaseUrl,
  lmsBaseUrl,
  logoutUrl,
  intl,
  isAdmin,
}) => {
  const dashboardItem = [{
    href: `${lmsBaseUrl}/dashboard`,
    title: intl.formatMessage(messages['header.user.menu.dashboard']),
  }];

  let items = [
    {
      href: `${studioBaseUrl}`,
      title: intl.formatMessage(messages['header.user.menu.studio']),
    },
    ...dashboardItem,
    {
      href: `${logoutUrl}`,
      title: intl.formatMessage(messages['header.user.menu.logout']),
    },
  ];
  if (isAdmin) {
    items = [
      {
        href: `${studioBaseUrl}`,
        title: intl.formatMessage(messages['header.user.menu.studio']),
      }, 
      ...dashboardItem,
      {
        href: `${logoutUrl}`,
        title: intl.formatMessage(messages['header.user.menu.logout']),
      },
    ];
  }

  return items;
};

export default getUserMenuItems;
