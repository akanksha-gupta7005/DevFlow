function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white"
    >

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            <p className="text-blue-600 font-semibold mb-3">
              ABOUT US
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              We Build Modern
              <span className="text-blue-600"> Web Experiences</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              DevFlow is a simple platform for developers who want
              to learn and build modern web applications using
              React and Tailwind CSS.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our goal is to make frontend development simple,
              reusable and enjoyable by using component-based
              architecture.
            </p>

            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-7 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition"
            >
              Explore Tailwind →
            </a>

          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-5">

            <div className="p-7 rounded-2xl bg-blue-50">
              <h3 className="text-3xl font-bold text-blue-600">
                100%
              </h3>

              <p className="mt-2 text-gray-600">
                Responsive
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-purple-50">
              <h3 className="text-3xl font-bold text-purple-600">
                Fast
              </h3>

              <p className="mt-2 text-gray-600">
                Performance
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-green-50">
              <h3 className="text-3xl font-bold text-green-600">
                React
              </h3>

              <p className="mt-2 text-gray-600">
                Components
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-orange-50">
              <h3 className="text-3xl font-bold text-orange-600">
                CSS
              </h3>

              <p className="mt-2 text-gray-600">
                Tailwind
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;