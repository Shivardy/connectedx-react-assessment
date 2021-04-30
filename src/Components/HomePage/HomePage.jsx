import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <main className="main" data-testid= "homepage">
      <h1>{t('homepage.intro')}</h1>
      <p>
        <Trans components={{ bold: <strong />, italic: <i /> }}>
          homepage.subtext
        </Trans>
        {/* just to showcase 2 ways of using i18next */}
      </p>
    </main>
  );
};

export default HomePage;
