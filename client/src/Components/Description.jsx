/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Description() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="description" className="pt-[35rem]  sm:pt-48">
      <div
        className="flex gap-8 flex-col relative px-8 max-w-5xl mx-auto"
        data-aos="fade-up"
      >
        <h2>{t('description-title')}</h2>
        <div className="w-4/5  mx-auto rounded-lg px-10 py-6 backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-40 dark:bg-opacity-40 bg-blue-9 dark:bg-bluedark-9  sdw dark:sdw-dark">
          <p className="description tracking-wide">
            {t('description-first-sentence')}
          </p>
          <p className="description">{t('description-second-sentence')}</p>
          <p className="description">{t('description-thrid-sentence')}</p>
        </div>
      </div>
    </section>
  );
}
