import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Freeze scroll & add blur class when menu is open
  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      mainContent?.classList.add("blur-active");
    } else {
      document.body.style.overflow = "auto";
      mainContent?.classList.remove("blur-active");
    }
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="logo">MyWebsite</div>

        {/* Desktop Links */}
        <nav className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/movie" className="nav-link">
            Movie
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="icon" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <RxCross2 /> : <IoMenu />}
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-overlay">
          <div className="mobile-menu">
            <NavLink to="/" onClick={handleLinkClick}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={handleLinkClick}>
              About
            </NavLink>
            <NavLink to="/movie" onClick={handleLinkClick}>
              Movie
            </NavLink>
            <NavLink to="/contact" onClick={handleLinkClick}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};
