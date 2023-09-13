import CopyRight from "./content/CopyRight";
import Navbar from "./content/Navbar";

function Footer() {
  return (
    <footer className="shadow-[0px_-10px_25px_-10px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-evenly container m-auto px-5 sm:px-0 py-8">
        <Navbar />
        <CopyRight />
      </div>
    </footer>
  );
}

export default Footer;
