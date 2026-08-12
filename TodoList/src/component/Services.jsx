const services = [
  {
    icon: "⚛️",
    title: "React Development",
    description:
      "Build reusable and scalable user interfaces using React components."
  },
  {
    icon: "🎨",
    title: "Tailwind CSS",
    description:
      "Create beautiful responsive designs quickly using utility-first CSS."
  },
  {
    icon: "🚀",
    title: "Web Development",
    description:
      "Build fast, responsive and modern websites for different devices."
  },
  {
    icon: "🔧",
    title: "Backend Development",
    description:
      "Create REST APIs and backend services using modern technologies."
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "Make websites work perfectly on mobile, tablet and desktop."
  },
  {
    icon: "💡",
    title: "UI/UX Design",
    description:
      "Design clean and user-friendly interfaces with modern layouts."
  }
];

function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-gray-100"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">

          <p className="text-blue-600 font-semibold">
            OUR SERVICES
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            What We Offer
          </h2>

          <p className="text-gray-600 mt-5">
            Everything you need to build modern and
            responsive web applications.
          </p>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <div className="text-4xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {service.description}
              </p>

              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-blue-600 font-semibold hover:text-blue-800"
              >
                Learn More →
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;