import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col items-center mb-8">
      <h1 className="text-white text-center text-2xl">Header Title</h1>
      <nav className="text-white list-none flex gap-6 mt-2">
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
      </nav>
    </header>
  );
}
export default Header;
