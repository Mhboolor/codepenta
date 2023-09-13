import Logo from "./content/Logo";
import Navbar from "./content/Navbar";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-between container m-auto px-5 sm:px-0 py-6">
        <Navbar />
        <Logo />
      </div>
    </header>
  );
}

export default Header;
