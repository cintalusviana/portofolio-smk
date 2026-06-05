function About() {
  return (
    <section
      id="about"
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

        {/* TITLE */}
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center mb-14 text-gray-800"
        >
          Tentang Saya 👩‍💻
        </h2>

        {/* MAIN CARD */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="
            bg-white/70
            backdrop-blur-md
            border border-white
            rounded-3xl
            shadow-xl
            p-10
            grid md:grid-cols-5 gap-10 items-center
          "
        >

          {/* LEFT CONTENT */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="md:col-span-3 space-y-5"
          >

            <div
              className="
                inline-block
                px-4 py-1
                bg-blue-100
                text-blue-600
                rounded-full
                text-sm
                font-medium
              "
            >
              👨‍💻 About Me
            </div>

            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Saya adalah siswi SMK Negeri Kabuh jurusan Sistem
              Informasi Jaringan & Aplikasi yang memiliki ketertarikan
              pada pengembangan website, desain UI, dan editing digital.
              Saya senang belajar hal baru, mengeksplorasi ide-ide kreatif,
              serta mengembangkan kemampuan melalui berbagai proyek untuk
              menambah pengalaman dan wawasan di dunia teknologi.
            </p>

            {/* SKILLS TAGS */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Web Dev", "UI Design", "Editing"].map((item, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1
                    bg-gray-100
                    text-gray-600
                    rounded-full
                    text-sm
                    hover:bg-blue-100
                    hover:text-blue-600
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="md:col-span-2"
          >

            <div
              className="
                bg-white
                rounded-2xl
                shadow-md
                p-6
                space-y-6
                hover:shadow-xl
                transition-all
                duration-300
                animate-[float_5s_ease-in-out_infinite]
              "
            >

              <h3 className="text-gray-700 font-semibold text-center">
                Quick Info
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">📂 Project</span>
                  <span className="font-semibold text-blue-500">4</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">💻 Skill Area</span>
                  <span className="font-semibold text-blue-500">8</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">🎓 Experience</span>
                  <span className="font-semibold text-blue-500">
                    SMK Student
                  </span>
                </div>

              </div>

              <div className="h-1 w-full bg-gradient-to-r from-blue-200 to-blue-500 rounded-full"></div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;