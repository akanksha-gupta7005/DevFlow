function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <h2 className="text-2xl font-bold text-white">
              Dev<span className="text-blue-400">Flow</span>
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Build modern and responsive web applications
              using React and Tailwind CSS.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-white font-semibold mb-4">
              Navigation
            </h3>

            <div className="flex flex-col gap-3">

              <a href="#home" className="hover:text-blue-400">
                Home
              </a>

              <a href="#about" className="hover:text-blue-400">
                About
              </a>

              <a href="#services" className="hover:text-blue-400">
                Services
              </a>

              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>

            </div>

          </div>

          {/* Resources */}
          <div>

            <h3 className="text-white font-semibold mb-4">
              Resources
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                Tailwind Docs
              </a>

              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                React Docs
              </a>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <p>📧 example@gmail.com</p>

            <p className="mt-3">
              📱 +91 9876543210
            </p>

            <p className="mt-3">
              📍 India
            </p>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-7 flex flex-col md:flex-row justify-between gap-4">

          <p className="text-gray-500">
            © 2026 DevFlow. All rights reserved.
          </p>

          <p className="text-gray-500">
            Built with React + Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;