import { Link } from "react-router-dom";
import css from './Navigation.module.css';


const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppNav = () => {
  return (
    <div >
      <nav className={css.Container}>
        {navItems.map(({ href, text }) => (
          <Link to={href} key={href} className={css.item}>
            {text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AppNav;