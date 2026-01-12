import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

interface NavLink {
  label: string;
  href: string;
  colour: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/", colour: "#FF0000" },
  { label: "About", href: "/about", colour: "#FFC300" },
  { label: "Tools", href: "/tools", colour: "#FF9D00" },
  { label: "Contact", href: "/contact", colour: "#FF0066" },
  { label: "Shop", href: "/shop", colour: "#FF00BF" },
];

// CHANGED NAME HERE:
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {navLinks.map((link) => (
        <Link key={link.label} to={link.href} className={styles.navbarItem}>
          <span
            className={styles.dot}
            style={{ backgroundColor: link.colour }}
          ></span>
          <span>{link.label}</span>
        </Link>
      ))}
    </nav>
  );
};
