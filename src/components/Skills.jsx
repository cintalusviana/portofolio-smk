function Skills() {
  const skills = [
    { name: "HTML", type: "code" },
    { name: "CSS", type: "code" },
    { name: "JavaScript", type: "code" },
    { name: "PHP", type: "code" },
    { name: "MySQL", type: "code" },
    { name: "UI Design", type: "design" },
    { name: "Photo Editing", type: "design" },
    { name: "Video Editing", type: "design" },
  ];

  return (
    <section
      id="skills"
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

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">

        {/* TITLE */}
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-gray-800 mb-3"
        >
          My Skills 🚀
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-600 mb-14"
        >
          Kombinasi skill development & creative design ✨
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="
                group
                relative
                bg-white/70
                backdrop-blur-md
                border border-white
                rounded-3xl
                p-6
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-3
                hover:shadow-xl
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  opacity-0
                  group-hover:opacity-10
                  bg-gradient-to-br
                  from-blue-500
                  to-purple-500
                  transition
                "
              ></div>

              {/* Icon */}
              <div
                className={`
                  w-12 h-12 mx-auto mb-4 rounded-full
                  flex items-center justify-center
                  font-bold text-white
                  ${
                    skill.type === "design"
                      ? "bg-purple-500"
                      : "bg-blue-500"
                  }
                `}
              >
                {skill.name.charAt(0)}
              </div>

              {/* Skill Name */}
              <h3 className="text-gray-700 font-semibold">
                {skill.name}
              </h3>

              {/* Badge */}
              <p
                className={`
                  text-xs mt-2 font-medium
                  ${
                    skill.type === "design"
                      ? "text-purple-600"
                      : "text-blue-600"
                  }
                `}
              >
                {skill.type === "design"
                  ? "Design"
                  : "Development"}
              </p>

              {/* Underline */}
              <div
                className="
                  h-[2px]
                  w-0
                  mx-auto
                  mt-3
                  bg-blue-500
                  group-hover:w-10
                  transition-all
                  duration-300
                "
              ></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;