export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-white text-blue-800 font-sans">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
               Sai <br />Naik Nimbalkar
            </h1>

            <p className="text-1xl md:text-2xl text-gray-700 mb-6 font-light">
            Digital Marketing • SEO Content • Digital Strategy
            </p>

            <p className="text-l text-gray-700 mb-8 leading-relaxed max-w-xl">
             My default setting is clarity over fluff.<br /><br />
             Digital marketing and content professional navigating SEO, performance marketing, and brand communications.
             <br /><br />Germany is home at the moment, but India is an annual detour.
             Particularly interested in sustainability and innovation, because those problems aren't going to solve themselves.
             </p>

            <div className="flex flex-wrap gap-4">
              
              <a
                href="https://linkedin.com/in/sai-naik-nimbalkar"
                target="_blank"
                className="border border-blue-800 px-6 py-3 rounded-2xl hover:bg-blue-800 hover:text-white transition"

              >
                LinkedIn
              </a>

              <a
              href="/CV/Sai NN - Lebenslauf DE 2026 I.pdf"
              target="_blank"
              className="border border-blue-800 px-6 py-3 rounded-2xl hover:bg-blue-800 hover:text-white transition"
              >
                CV
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

      
      <section className="px-6 py-12 bg-gray-50 flex items-center justify-center">
        <div className="max-w-4xl">
          <p className="text-blue-800 text-xl font-bold leading-relaxed text-center">
            Do the work. The rest is noise.
          </p>
        </div>
      </section>

      <section id="work" className="px-6 py-18 bg-white-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Work</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Website Content & Landing Pages",
                desc: "Created and optimized website content, landing pages, and marketing copy for B2B and technology-focused companies.",
                image: "/images/website content.svg",
                link: "https://www.excentos.com/en/guided-selling-explained",
              },
              {
                title: "SEO & Blog Content",
                desc: "Researched, wrote, and optimized long-form articles focused on customer engagement, product information, and AI-driven solutions.",
                image: "/images/SEO content.svg",
                link: "https://www.excentos.com/en/blog/how-do-b2bs-advise-their-online-customers",
              },
              {
                title: "Social Media & Video Campaigns",
                desc: "Developed social media content, campaign creatives, and short-form video content across Facebook, LinkedIn, and YouTube.",
                image: "/images/social media.svg",
                link: "https://www.linkedin.com/feed/update/urn:li:activity:7402634220382195712",
              },
].map((project) => (
              <div
                key={project.title}
                className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition duration-300"

              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-contain rounded-2xl mb-5 bg-white p-4"
                />

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-5">{project.desc}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline underline-offset-4"
                >
                  View →
                </a>  
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-4xl max-h-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          Open to remote work.
        </h2>

        <a
          href="mailto: sainn.deu@gmail.com"
          className="border border-blue-800 px-6 py-3 rounded-2xl hover:bg-blue-800 hover:text-white transition mr-4"
        >
          sainn.deu@gmail.com
        </a>

        <a
          href="https://linkedin.com/in/sai-naik-nimbalkar"
          target="_blank"
          className="border border-blue-800 px-6 py-3 rounded-2xl hover:bg-blue-800 hover:text-white transition"
        >
          LinkedIn
        </a>
      </section>
    </div>
  );
}