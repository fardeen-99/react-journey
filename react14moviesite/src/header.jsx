import { NavLink } from "react-router-dom";


export const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">MyWebsite</div>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          About
        </NavLink>

        <NavLink to="/movie" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Movie
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
