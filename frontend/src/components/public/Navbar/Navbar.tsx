import { useState } from "react";
import { Link } from "react-router";
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
        <a href="#hero" className="desktop-nav-link group">
          <span className="span-visible">Home</span>
          <span className="span-hidden">Home</span>
        </a>
        <a href="#features" className="desktop-nav-link group">
          <span className="span-visible">Features</span>
          <span className="span-hidden">Features</span>
        </a>
        <a href="#pricing" className="desktop-nav-link group">
          <span className="span-visible">Pricing</span>
          <span className="span-hidden">Pricing</span>
        </a>
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
        <a href="#hero" onClick={() => setMobileMenuOpen(false)}>
          Home
        </a>
        <a href="#features" onClick={() => setMobileMenuOpen(false)}>
          Features
        </a>
        <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
          Pricing
        </a>
        <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
          Log In
        </Link>
        <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
