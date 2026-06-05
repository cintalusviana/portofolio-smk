function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

        {/* BRAND / TITLE */}
        <div className="text-xl font-bold tracking-wide">
          Portofolio
        </div>

        {/* MENU */}
        <div className="flex gap-6">
          <a href="#home" className="hover:text-yellow-300 transition">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-300 transition">
            About
          </a>
          <a href="#skills" className="hover:text-yellow-300 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-yellow-300 transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;