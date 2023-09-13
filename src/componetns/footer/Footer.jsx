import CopyRight from "./content/CopyRight"
import Navbar from "./content/Navbar"

function Footer() {
  return (
    <footer className="shadow-2xl">
      <div className="flex items-center justify-evenly container m-auto px-5 sm:px-0 py-6">
        <Navbar/>
        <CopyRight/>
      </div>
    </footer>
  )
}

export default Footer