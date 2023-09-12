import Logo from "./content/Logo";
import Navbar from "./content/Navbar";

function Header() {
  return (
    <header className="flex items-center justify-between container m-auto px-5 sm:px-0">
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
