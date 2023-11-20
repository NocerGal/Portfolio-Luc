import { Link } from 'react-router-dom';
import { useThemeContext } from '../Context/ThemeContext';
import { MoonIcon, SunIcon, TextAlignJustifyIcon } from '@radix-ui/react-icons';
import DARK_LOGO from '../assets/logo_dark.jpg';
import LIGHT_LOGO from '../assets/logo_light.jpg';
import { useState } from 'react';
import NavHeaderMobil from './NavHeaderMobil';
import {
  redirectSectionContact,
  redirectSectionDescription,
  redirectSectionRealisations,
} from '../Functions/Redirections';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  const { theme, toggleTheme, lang, toggleLang } = useThemeContext();
  const [navBar, setNavBar] = useState(false);

  return (
    <header className="sticky top-0 h-[12vh] bg-blue-1 dark:bg-bluedark-1 border-b-2 border-blue-7 dark:border-bluedark-7 z-50">
      <div className="flex max-w-7xl h-full mx-auto justify-between items-center px-8 border-b-blue-8 dark:border-b-bluedark-8">
        {theme ? (
          <img
            className="h-16 w-16"
            src={DARK_LOGO}
            alt="light logo"
            title="light logo"
          />
        ) : (
          <img
            className="h-16 w-16"
            src={LIGHT_LOGO}
            alt="dark logo"
            title="dark logo"
          />
        )}
        <div className="flex items-center gap-8 text-blue-12 dark:text-bluedark-12">
          <select
            value={lang}
            onChange={(e) => toggleLang(e.target.value)}
            className="bg-transparent text-4xl rounded-lg border-2 border-transparent hover:border-blue-7 dark:hover:border-bluedark-7"
          >
            <option value="fr">🇫🇷</option>
            <option value="en">🇬🇧</option>
          </select>
          <button
            onClick={() => {
              toggleTheme();
            }}
            className="hover:bg-blue-9 dark:hover:bg-bluedark-9 rounded-full pt-2 px-2 pb-2 hover:text-blue-1 dark:hover:text-bluedark-12 transition-all"
          >
            <div className="relative">
              <MoonIcon
                className={`icon rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 `}
              />
              <SunIcon
                className={`absolute top-0 icon rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100 `}
              />
            </div>
          </button>

          <button className="flex md:hidden hover:bg-blue-9 dark:hover:bg-bluedark-9 rounded-full pt-2 px-2 pb-2 hover:text-blue-1 dark:hover:text-bluedark-12 transition-all">
            <TextAlignJustifyIcon
              onClick={() => setNavBar((prev) => !prev)}
              className="icon "
            />
          </button>
          <nav className="hidden md:flex gap-8 items-center">
            <ul className="flex gap-8 items-center">
              <Link
                to="/"
                className="anim--link"
                onClick={() => redirectSectionDescription()}
              >
                <li>{t('header-first-li')}</li>
              </Link>
              <Link
                to="/"
                className="anim--link"
                onClick={() => redirectSectionRealisations()}
              >
                <li>{t('header-second-li')}</li>
              </Link>
              <Link
                to="/"
                className="anim--link"
                onClick={() => redirectSectionContact()}
              >
                <li>{t('header-third-li')}</li>
              </Link>
            </ul>
          </nav>
          {navBar && <NavHeaderMobil setNavBar={setNavBar} />}
        </div>
      </div>
    </header>
  );
}
