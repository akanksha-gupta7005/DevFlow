function Header() {
  return (
    <header
      id="home"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <p className="text-blue-400 font-semibold mb-4">
              WELCOME TO DEVFLOW
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build Modern
              <span className="text-blue-400"> Web Applications</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
              Learn how to build beautiful, responsive and modern
              websites using React and Tailwind CSS.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* Open Tailwind Docs */}
              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Started →
              </a>

              {/* Scroll About */}
              <a
                href="#about"
                className="border border-gray-500 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition"
              >
                Learn More
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 shadow-2xl max-w-md">

              <div className="text-6xl mb-6">
                ⚡
              </div>

              <h2 className="text-2xl font-bold mb-4">
                React + Tailwind CSS
              </h2>

              <p className="text-gray-300 leading-relaxed">
                Create reusable components and beautiful
                responsive interfaces with modern frontend
                technologies.
              </p>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;