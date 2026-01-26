import { useState } from "react";
import { NavLink, Link } from "react-router";
import { Menu, X } from "lucide-react";

import logo from "../../../images/Logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="public-nav">
      <a href="/">
        <img className="w-32" src={logo} alt="Scribble AI logo" />
      </a>

      <div className="desktop-nav-link-holder">
        <NavLink to="/" className="desktop-nav-link group">
          <span className="span-visible">Home</span>
          <span className="span-hidden">Home</span>
        </NavLink>
        <NavLink to="/" className="desktop-nav-link group">
          <span className="span-visible">Stories</span>
          <span className="span-hidden">Stories</span>
        </NavLink>
        <NavLink to="/" className="desktop-nav-link group">
          <span className="span-visible">Pricing</span>
          <span className="span-hidden">Pricing</span>
        </NavLink>
        <NavLink to="/" className="desktop-nav-link group">
          <span className="span-visible">Docs</span>
          <span className="span-hidden">Docs</span>
        </NavLink>
      </div>

      <div className="nav-btn-group">
        <Link to="/login" className="login-btn-desktop">
          Log In
        </Link>
        <Link to="/register" className="register-btn-desktop">
          Register
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="public-menu-btn"
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      <div className={`public-mobile-menu ${mobileMenuOpen ? "flex" : "hidden"}`}>
        <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
          Stories
        </NavLink>
        <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
          Pricing
        </NavLink>
        <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
          Docs
        </NavLink>
        <button onClick={() => setMobileMenuOpen(false)}>Contact</button>
        <button onClick={() => setMobileMenuOpen(false)}>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
