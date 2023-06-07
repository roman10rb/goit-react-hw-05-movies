import { NavLink } from "react-router-dom";
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
          <NavLink to={href} key={href} className={css.item}>
            {text}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AppNav;