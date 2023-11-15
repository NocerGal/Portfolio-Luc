import { Cross1Icon } from '@radix-ui/react-icons';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavHeaderMobil({ setNavBar }) {
  useLockBodyScroll();

  return (
    <div className={`fixed inset-0 z-30 backdrop-blur-sm `}>
      <nav className=" flex justify-end items-center ml-auto w-2/4 h-full bg-blue-1 dark:bg-bluedark-1 p-10 border-l-2 border-blue-7 dark:border-bluedark-7">
        <button onClick={() => setNavBar((prev) => !prev)}>
          <Cross1Icon className="absolute top-7 right-7 icon" />
        </button>
        <ul className="flex flex-col gap-4">
          <Link to="/" className="anim--link">
            <li>Presentation</li>
          </Link>
          <Link to="/" className="anim--link">
            <li>Presentation</li>
          </Link>
          <Link to="/" className="anim--link">
            <li>Presentation</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

NavHeaderMobil.propTypes = {
  setNavBar: PropTypes.func.isRequired,
};
