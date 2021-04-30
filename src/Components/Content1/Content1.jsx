import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Content1 = () => {
  const { t } = useTranslation();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((seconds) => seconds + 1), 1000);
    return () => clearTimeout(timer);
  }, [setSeconds]);

  return (
    <main className="main" data-testid="content1">
      <h1>{t('content1.intro')}</h1>
      <p>{t('content1.time', { seconds })}</p>
    </main>
  );
};

export default Content1;
