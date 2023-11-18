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

export default function Header() {
  const { theme, toggleTheme } = useThemeContext();
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
        <div className="flex items-center gap-8">
          <button
            onClick={() => {
              toggleTheme();
            }}
            className="relative"
          >
            <SunIcon
              className={`icon rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 `}
              xlinkTitle="switch to sun theme"
            />
            <MoonIcon
              className={`absolute top-0 icon rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100 `}
              xlinkTitle="switch to moon theme"
            />
          </button>
          <TextAlignJustifyIcon
            onClick={() => setNavBar((prev) => !prev)}
            className="icon flex md:hidden "
          />
          <nav className="hidden md:flex gap-8 items-center">
            <ul className="flex gap-8 items-center">
              <Link
                to="/"
                className="anim--link"
                onClick={() => redirectSectionDescription()}
              >
                <li>Qui suis-je?</li>
              </Link>
              <Link
                to="/"
                className="anim--link"
                onClick={() => redirectSectionRealisations()}
              >
                <li>Réalisations</li>
              </Link>
              <Link
                to="/"
                className="anim--link"
                onClick={() => redirectSectionContact()}
              >
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
          {navBar && <NavHeaderMobil setNavBar={setNavBar} />}
        </div>
      </div>
    </header>
  );
}
