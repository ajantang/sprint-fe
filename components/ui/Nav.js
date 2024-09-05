import Link from "next/link";
import style from "@/components/ui/nav.module.css";

export function NavItem({ linkto, children }) {
  const navItemClass = `Text-2lg Bold ${style["nav__item"]}`;
  const navTextClass = `${style["nav__text"]}`;

  return (
    <li className={navItemClass}>
      <Link href={linkto} className={navTextClass}>
        {children}
      </Link>
    </li>
  );
}

export function Nav({ children }) {
  const navClass = `flex-row ${style.nav}`;
  const navUlClass = style["nav__list"];

  return (
    <nav className={navClass}>
      <ul className={navUlClass}>{children}</ul>
    </nav>
  );
}
