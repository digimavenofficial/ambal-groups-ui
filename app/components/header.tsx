"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isActive = (path: string) => path === "/" ? pathname === "/" : pathname.startsWith(path);
  const toggleDropdown = (name: string) => setOpenDropdown((open) => open === name ? null : name);
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={`site-header${overlay ? " site-header-overlay" : ""}${menuOpen ? " menu-is-open" : ""}`}>
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Sri Ambal Promoters home" onClick={closeMenu}>
          <span className="brand-mark">A</span>
          <span className="brand-name"><strong>Sri Ambal</strong><small>Promoters</small></span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/" className={isActive("/") ? "is-active" : undefined}>Home</Link>
          <div className={`nav-dropdown${isActive("/about") ? " is-active" : ""}`} onMouseEnter={() => setOpenDropdown("about")} onMouseLeave={() => setOpenDropdown(null)}>
            <button type="button" aria-expanded={openDropdown === "about"} onClick={() => toggleDropdown("about")}>About</button>
            <div className={`dropdown-menu${openDropdown === "about" ? " is-open" : ""}`}><Link href="/about" onClick={closeMenu}>Our story</Link><Link href="/about#team" onClick={closeMenu}>Our team</Link></div>
          </div>
          <Link href="/gallery" className={isActive("/gallery") ? "is-active" : undefined}>What We Do</Link>
          <div className={`nav-dropdown${isActive("/projects") ? " is-active" : ""}`} onMouseEnter={() => setOpenDropdown("projects")} onMouseLeave={() => setOpenDropdown(null)}>
            <button type="button" aria-expanded={openDropdown === "projects"} onClick={() => toggleDropdown("projects")}>Projects</button>
            <div className={`dropdown-menu${openDropdown === "projects" ? " is-open" : ""}`}><Link href="/projects/ongoing" onClick={closeMenu}>Ongoing</Link><Link href="/projects/completed" onClick={closeMenu}>Completed</Link></div>
          </div>
          <Link href="/contact">Careers</Link>
          <Link href="/contact" className={isActive("/contact") ? "is-active" : undefined}>Contact</Link>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => {
            if (open) setOpenDropdown(null);
            return !open;
          })}
        >
          <span /><span /><span />
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-navigation${menuOpen ? " is-open" : ""}`} aria-label="Mobile navigation">
        <Link href="/" className={isActive("/") ? "is-active" : undefined} onClick={closeMenu}>Home</Link>
        <div className={`mobile-dropdown${isActive("/about") ? " is-active" : ""}`}>
          <button type="button" aria-expanded={openDropdown === "about"} onClick={() => toggleDropdown("about")}>About</button>
          <div className={`mobile-submenu${openDropdown === "about" ? " is-open" : ""}`}><Link href="/about" onClick={closeMenu}>Our story</Link><Link href="/about#team" onClick={closeMenu}>Our team</Link></div>
        </div>
        <Link href="/gallery" className={isActive("/gallery") ? "is-active" : undefined} onClick={closeMenu}>What We Do</Link>
        <div className={`mobile-dropdown${isActive("/projects") ? " is-active" : ""}`}>
          <button type="button" aria-expanded={openDropdown === "projects"} onClick={() => toggleDropdown("projects")}>Projects</button>
          <div className={`mobile-submenu${openDropdown === "projects" ? " is-open" : ""}`}><Link href="/projects/ongoing" onClick={closeMenu}>Ongoing</Link><Link href="/projects/completed" onClick={closeMenu}>Completed</Link></div>
        </div>
        <Link href="/contact" onClick={closeMenu}>Careers</Link>
        <Link href="/contact" className={isActive("/contact") ? "is-active" : undefined} onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
}
