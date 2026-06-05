export default function Portofolio() {
  const projects = [
    {
      title: "Sistem Artikel Pendidikan",
      description:
        "Website artikel pendidikan berbasis PHP dan MySQL dengan fitur CRUD, login admin, pencarian artikel, kategori, dan pagination.",
      emoji: "📚",
      category: "Web Development",
    },
    {
      title: "Monitoring Tandon Air",
      description:
        "Sistem monitoring ketinggian air berbasis web yang membantu memantau kondisi tandon secara real-time.",
      emoji: "💧",
      category: "IoT Project",
    },
    {
      title: "Desain UI Mobile",
      description:
        "Desain antarmuka aplikasi mobile menggunakan Figma dengan tampilan modern dan user friendly.",
      emoji: "🎨",
      category: "UI Design",
    },
    {
      title: "Editing Poster",
      description:
        "Pembuatan poster promosi menggunakan Canva dan CorelDraw dengan konsep visual yang menarik.",
      emoji: "🖼️",
      category: "Creative Design",
    },
  ];

  return (
    <section
      id="portfolio"
      className="
        py-24
        relative
        overflow-hidden
        bg-gradient-to-br
        from-blue-50
        via-white
        to-blue-100
      "
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="text-center mb-14"
        >
          <span
            className="
              inline-block
              px-4 py-1
              bg-blue-100
              text-blue-600
              rounded-full
              text-sm
              font-medium
              mb-4
            "
          >
            🚀 My Portfolio
          </span>

          <h2 className="text-4xl font-bold text-gray-800">
            Project & Karya Saya
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Beberapa proyek yang pernah saya kerjakan dalam bidang
            pengembangan website, IoT, desain UI, dan editing digital.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="
                group
                bg-white/70
                backdrop-blur-md
                border border-white
                rounded-3xl
                p-7
                shadow-md
                hover:-translate-y-3
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <div className="flex items-start gap-4">

                {/* ICON */}
                <div
                  className="
                    w-16 h-16
                    rounded-2xl
                    bg-blue-100
                    flex items-center justify-center
                    text-3xl
                    shrink-0
                    group-hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  {project.emoji}
                </div>

                <div>

                  {/* CATEGORY */}
                  <span
                    className="
                      inline-block
                      px-3 py-1
                      bg-blue-50
                      text-blue-600
                      rounded-full
                      text-xs
                      font-medium
                      mb-3
                    "
                  >
                    {project.category}
                  </span>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* ANIMATED LINE */}
                  <div
                    className="
                      h-[2px]
                      w-0
                      mt-4
                      bg-blue-500
                      group-hover:w-16
                      transition-all
                      duration-300
                    "
                  ></div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}