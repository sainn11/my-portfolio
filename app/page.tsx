export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
               Sai Naik Nimbalkar
            </h1>

            <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
            Digital Marketing • Content • Digital Strategy
            </p>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              I help create engaging website content, performance marketing campaigns,
              and marketing experiences that connect with audiences and drive growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
               className="bg-black text-white px-6 py-3 rounded-2xl hover:opacity-90 transition"
              >
                View Projects
              </a>

              <a
                href="https://linkedin.com/in/sai-naik-nimbalkar"
                target="_blank"
                className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-100 transition"
              >
                LinkedIn
              </a>

              <a
              href="/CV/Lebenslauf_DE.pdf"
              target="_blank"
              className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-100 transition"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/Photo/My Photo.jpg"
              alt="Sai Naik Nimbalkar"
              className="w-72 h-72 rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            I'm a marketing and content professional passionate about
            storytelling, branding, and digital communication.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Content Writing",
            "Social Media",
            "SEO",
            "Canva",
            "Copywriting",
            "Marketing Strategy",
            "Video Editing",
            "Analytics",
          ].map((skill) => (
            <div
              key={skill}
              className="p-4 border border-gray-200 rounded-2xl text-center bg-white shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-6 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "SEO Blog Strategy",
                desc: "Created SEO-focused blog content and optimized website copy to improve visibility and engagement.",
              },
              {
                title: "Social Media Campaign",
                desc: "Developed social media creatives and campaign content for audience engagement and brand awareness.",
              },
              {
                title: "Performance Marketing",
                desc: "Worked on digital campaigns, ad creatives, and marketing strategies focused on growth and conversions.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition duration-300"

              >
                <div className="h-40 rounded-2xl bg-gray-200 mb-5 flex items-center justify-center text-gray-500">
                  Project Image
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-5">{project.desc}</p>

                <button className="text-sm font-medium underline underline-offset-4">
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let's Work Together
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          Open to remote marketing, content, and creative opportunities.
        </p>

        <a
          href="mailto: sainn.deu@gmail.com"
          className="inline-block bg-black text-white px-8 py-4 rounded-2xl hover:opacity-90 transition mr-4"
        >
          Get In Touch
        </a>

        <a
          href="https://linkedin.com/in/sai-naik-nimbalkar"
          target="_blank"
          className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-100 transition"
        >
          LinkedIn
        </a>
      </section>
    </div>
  );
}