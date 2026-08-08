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
             Digital marketing and content professional with experience in SEO, performance marketing, website content, and brand communications. 
             <br /><br />Passionate about sustainability, innovation, and creating content that helps people understand complex ideas.
             <br /><br />Germany is home at the moment, but India is an annual detour.
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
              className="w-72 h-72 rounded-3xl object-cover object-[center_20%] shadow-xl"
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

      <section id="work" className="px-6 py-18 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Selected Work</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Website & Landing Pages",
                image: "/images/website content.svg",
                links: [
                  {
                    title: "Guided Selling Explained",
                    url: "https://www.excentos.com/en/guided-selling-explained",
                  },
                  {
                    title: "Semantic Technologies",
                    url: "https://semantictech.in/",
                  },
                  {
                    title: "What is lead generation?",
                    url: "https://www.excentos.com/en/lead-generation",
                  },
                  {
                    title: "What are Product Advisors?",
                    url: "https://www.excentos.com/en/product-advisor",
                  },
                  {
                    title: "CropTech GT",
                    url: "https://www.semantictech.in/SemanticAll/GTApp",
                  },
                ],
              },
              {
                title: "SEO & Blog",
                image: "/images/SEO content.svg",
                links: [
                  {
                    title: "How Do B2Bs Advise Their Online Customers?",
                    url: "https://www.excentos.com/en/blog/how-do-b2bs-advise-their-online-customers",
                  },
                  {
                    title: "Redefine Product Data Using AI",
                    url: "https://www.excentos.com/en/blog/redefine-product-data-using-ai",
                  },
                  {
                    title: "Lead Generation can save the day!",
                    url: "https://www.excentos.com/en/blog/lead-generation-can-save-the-day",
                  },
                  {
                    title: "What's the big deal about Direct to Consumer (D2C)?",
                    url: "https://www.excentos.com/en/blog/direct-2-consumer",
                  },
                ],
              },
             {
                title: "Social Media",
                image: "/images/social media.svg",
                links: [
                  {
                    title: "FB - Semantic Tech:Farmer interview on Soyabeans",
                    url: "https://www.facebook.com/reel/1117356660076687",
                  },
                  {
                    title: "LI - Semantic Tech:Crop Cutting Experiments",
                    url: "https://www.linkedin.com/feed/update/urn:li:activity:7415781777518002177",
                  },
                  {
                    title: "IG - Semantic Tech:Buy certified Soyabean seeds",
                    url: "https://www.instagram.com/p/DIEUSCIqG_a/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
                  },
                  {
                    title: "YT - Semantic Tech:Benefits of a Farmer Producer Company",
                    url: "https://youtube.com/shorts/f5RDpqsViCs?si=ftPsAe1K_KofZkmd",
                  },
                ],
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

                 <div className="space-y-2 text-sm">
                    {project.links.map((item) => (
                      <a
                        key={item.title}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-800 hover:underline"
                      >
                        ⌁ {item.title}
                      </a>
                    ))}
                  </div>
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