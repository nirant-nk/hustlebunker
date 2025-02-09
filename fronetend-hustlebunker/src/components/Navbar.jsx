import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>HustleBunker</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/workspaces">Workspaces</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
