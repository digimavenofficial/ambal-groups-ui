"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header${overlay ? " site-header-overlay" : ""}${menuOpen ? " menu-is-open" : ""}`}
    >
      <div className="container nav">
        <Link
          href="/"
          className="brand"
          aria-label="Ambal Groups home"
          onClick={closeMenu}
        >
          <Image
            className="brand-logo"
            src="/logo.jpeg"
            alt="Ambal Groups"
            width={180}
            height={180}
            priority
          />
          <span className="brand-name">
            <strong>Ambal Groups</strong>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-navigation${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "is-active" : undefined}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
