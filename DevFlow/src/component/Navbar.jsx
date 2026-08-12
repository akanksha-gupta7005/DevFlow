import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="text-2xl font-bold">
            Dev<span className="text-blue-400">Flow</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#home"
              className="hover:text-blue-400 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-blue-400 transition"
            >
              About
            </a>

            <a
              href="#services"
              className="hover:text-blue-400 transition"
            >
              Services
            </a>

            <a
              href="#contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </a>

            {/* Tailwind Documentation */}
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </a>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-5 mt-5 pb-3">

            <a
              href="#home"
              onClick={closeMenu}
              className="hover:text-blue-400"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="hover:text-blue-400"
            >
              Services
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="hover:text-blue-400"
            >
              Contact
            </a>

            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="bg-blue-600 px-5 py-2 rounded-lg text-center"
            >
              Get Started
            </a>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;