import { Cross1Icon } from '@radix-ui/react-icons';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import PropTypes from 'prop-types';

import {
  redirectSectionContact,
  redirectSectionDescription,
  redirectSectionRealisations,
} from '../Functions/Redirections';
import { useTranslation } from 'react-i18next';

export default function NavHeaderMobil({ setNavBar }) {
  const { t } = useTranslation();
  useLockBodyScroll();

  return (
    <div className={`fixed inset-0 z-30 backdrop-blur-sm `}>
      <nav className=" flex justify-end items-center ml-auto w-2/4 h-full bg-blue-1 dark:bg-bluedark-1 p-10 border-l-2 border-blue-7 dark:border-bluedark-7">
        <button
          aria-label="close side header"
          onClick={() => setNavBar((prev) => !prev)}
        >
          <Cross1Icon className="absolute top-7 right-7 icon" />
        </button>
        <ul className="flex flex-col gap-8">
          <a
            aria-label="redirect to description"
            className="anim--link font-semibold"
            onClick={() => {
              redirectSectionDescription();
              setNavBar((prev) => !prev);
            }}
          >
            <li>{t('header-first-li')}</li>
          </a>
          <a
            aria-label="redirect to Realisations"
            className="anim--link  font-semibold"
            onClick={() => {
              redirectSectionRealisations();
              setNavBar((prev) => !prev);
            }}
          >
            <li>{t('header-second-li')}</li>
          </a>
          <a
            aria-label="Contact"
            className="anim--link font-semibold"
            onClick={() => {
              redirectSectionContact();
              setNavBar((prev) => !prev);
            }}
          >
            <li>{t('header-third-li')}</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}

NavHeaderMobil.propTypes = {
  setNavBar: PropTypes.func.isRequired,
};
