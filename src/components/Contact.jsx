const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
            Let’s Connect
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            I am open to impactful opportunities and collaborative projects where I can contribute meaningfully. Let’s connect.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-black mb-6 text-center">
              Contact Information
            </h3>

            {/* Contact Info Grid */}
            <div className="flex flex-col md:flex-row justify-between gap-6">
              {/* Email */}
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-12 h-12 bg-black flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-black">Email</p>
                  <p className="text-gray-600">deyanshuman208@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-12 h-12 bg-black flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-black">Location</p>
                  <p className="text-gray-600">Kolkata, West Bengal, India</p>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-12 h-12 bg-black flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.34.7-4-1.4-4-1.4-.55-1.4-1.34-1.8-1.34-1.8-1.1-.75.1-.73.1-.73 1.2.1 1.84 1.25 1.84 1.25 1.07 1.83 2.8 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 015.45 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-black">GitHub</p>
                  <a
                    href="https://github.com/Anshuman20804"
                    className="text-gray-600 hover:text-black transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Anshuman20804
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
