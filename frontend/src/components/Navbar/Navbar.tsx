import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

interface NavLink {
  label: string;
  href: string;
  colour: string;
  external?: boolean; // Added optional property
  download?: boolean; // Added optional property
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/", colour: "#FF0000" },
  { label: "About", href: "/about", colour: "#FFC300" },
  {
    label: "CV Download",
    href: "/files/CV_Christian_Grose.pdf",
    colour: "#FF9D00",
    external: true,
    download: true,
  },
  {
    label: "Portfolio Download",
    href: "/files/Portfolio_Christian_Grose.pdf",
    colour: "#FF0066",
    external: true,
    download: true,
  },
  {
    label: "Contact",
    href: "mailto:christian.grose22@imperial.ac.uk",
    colour: "#FF00BF",
    external: true, // Important: Mark mailto as external
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {navLinks.map((link) => {
        // Shared content (Dot + Text)
        const innerContent = (
          <>
            <span
              className={styles.dot}
              style={{ backgroundColor: link.colour }}
            ></span>
            <span>{link.label}</span>
          </>
        );

        // LOGIC: Check if it's an external link (File or Email)
        if (link.external) {
          const isEmail = link.href.startsWith("mailto:");

          return (
            <a
              key={link.label}
              href={link.href}
              className={styles.navbarItem}
              // Force download if requested
              download={link.download ? true : undefined}
              // Don't open new tab for email, do for others
              target={isEmail || link.download ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              {innerContent}
            </a>
          );
        } else {
          // Standard Internal Link
          return (
            <Link key={link.label} to={link.href} className={styles.navbarItem}>
              {innerContent}
            </Link>
          );
        }
      })}
    </nav>
  );
};
