import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <nav>
        <ul>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/our-team'>Our team</NavLink>
          </li>
          <li>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
