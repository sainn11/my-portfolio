export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
              Marketing • Content • Digital Strategy
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hi, I'm Sai.
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I create marketing content, social campaigns, and digital
              experiences that help brands connect with people.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-black text-white px-6 py-3 rounded-2xl hover:opacity-90 transition"
              >
                View Projects
              </a>

              <a
                href="mailto:your@email.com"
                className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-100 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-3xl bg-gray-200 flex items-center justify-center text-gray-500 text-lg shadow-xl">
              Your Photo
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            I'm a marketing and content professional passionate about
            storytelling, branding, and digital communication.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto">
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

      <section id="projects" className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Social Media Campaign",
                desc: "Created a multi-platform campaign that increased engagement and reach.",
              },
              {
                title: "Brand Content Strategy",
                desc: "Developed content plans and messaging for a growing startup.",
              },
              {
                title: "Marketing Portfolio Project",
                desc: "Built creative visuals and promotional assets for digital marketing.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200"
              >
                <div className="h-40 rounded-2xl bg-gray-200 mb-5 flex items-center justify-center text-gray-500">
                  Project Image
                </div>

                <h3 className="text-xl font-semibold mb-3">
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
          href="mailto:your@email.com"
          className="inline-block bg-black text-white px-8 py-4 rounded-2xl hover:opacity-90 transition"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
}