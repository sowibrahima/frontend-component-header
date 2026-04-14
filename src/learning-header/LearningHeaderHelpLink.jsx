import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from './messages';

const LearningHeaderHelpLink = () => {
  const intl = useIntl();
  return (
    <a
      className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
      href={`${getConfig().SUPPORT_URL}`}
    >
      {intl.formatMessage(messages.help)}
    </a>
  );
};

export default LearningHeaderHelpLink;
