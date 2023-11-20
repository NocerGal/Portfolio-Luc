import { Cross1Icon } from '@radix-ui/react-icons';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
        <button onClick={() => setNavBar((prev) => !prev)}>
          <Cross1Icon className="absolute top-7 right-7 icon" />
        </button>
        <ul className="flex flex-col gap-8">
          <Link
            to="/"
            className="anim--link font-semibold"
            onClick={() => {
              redirectSectionDescription();
              setNavBar((prev) => !prev);
            }}
          >
            <li>{t('header-first-li')}</li>
          </Link>
          <Link
            to="/"
            className="anim--link  font-semibold"
            onClick={() => {
              redirectSectionRealisations();
              setNavBar((prev) => !prev);
            }}
          >
            <li>{t('header-second-li')}</li>
          </Link>
          <Link
            to="/"
            className="anim--link font-semibold"
            onClick={() => {
              redirectSectionContact();
              setNavBar((prev) => !prev);
            }}
          >
            <li>{t('header-third-li')}</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

NavHeaderMobil.propTypes = {
  setNavBar: PropTypes.func.isRequired,
};
