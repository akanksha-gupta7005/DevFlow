function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white"
    >

      <div className="max-w-4xl mx-auto">

        <div className="text-center">

          <p className="text-blue-600 font-semibold">
            CONTACT US
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's Build Something
            <span className="text-blue-600"> Great</span>
          </h2>

          <p className="text-gray-600 mt-5">
            Have a project or idea? Send us a message.
          </p>

        </div>

        <form className="mt-12 space-y-6">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-lg px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;