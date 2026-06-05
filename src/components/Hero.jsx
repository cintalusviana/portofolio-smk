import { motion } from "framer-motion";
import heroImage from "../assets/hero Images/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex items-center
        relative
        overflow-hidden
        bg-gradient-to-br
        from-blue-50
        via-white
        to-blue-100
      "
    >
      {/* Background Blur */}
      <div
        className="
          absolute
          -top-32
          -left-32
          w-96
          h-96
          bg-blue-300
          rounded-full
          blur-3xl
          opacity-30
        "
      ></div>

      <div
        className="
          absolute
          -bottom-32
          -right-32
          w-96
          h-96
          bg-blue-400
          rounded-full
          blur-3xl
          opacity-20
        "
      ></div>

      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          relative
          z-10
          w-full
        "
      >
        <div
          className="
            grid
            md:grid-cols-2
            items-center
            gap-14
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="
                inline-block
                px-4
                py-1
                bg-blue-100
                text-blue-600
                rounded-full
                text-sm
                font-medium
                mb-5
              "
            >
              👋 Welcome to My Portfolio
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-gray-800
                leading-tight
              "
            >
              Cinta Lusviana
              <br />
              <span className="text-blue-500">
                Intan Ramadhina
              </span>
            </motion.h1>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="
                mt-4
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-blue-100
                text-blue-600
                font-medium
                text-sm
              "
            >
              💻 Sistem Informasi Jaringan & Aplikasi
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="
                mt-6
                text-gray-600
                text-lg
                leading-relaxed
                max-w-xl
              "
            >
              Membangun pengalaman dan keterampilan di bidang teknologi
              melalui pengembangan website, desain antarmuka, serta berbagai
              proyek yang mendukung pembelajaran dan kreativitas.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="
                mt-8
                flex
                flex-wrap
                gap-4
                justify-center
                md:justify-start
              "
            >
              <a
                href="#portfolio"
                className="
                  px-7
                  py-3
                  bg-blue-500
                  text-white
                  rounded-xl
                  shadow-md
                  hover:bg-blue-600
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Lihat Portfolio
              </a>

              <a
                href="#contact"
                className="
                  px-7
                  py-3
                  border
                  border-blue-500
                  text-blue-500
                  rounded-xl
                  hover:bg-blue-500
                  hover:text-white
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >
            <div className="relative">

              <div
                className="
                  absolute
                  -inset-4
                  bg-blue-200/40
                  blur-3xl
                  rounded-3xl
                "
              ></div>

              <div
                className="
                  absolute
                  -top-4
                  -left-4
                  w-full
                  h-full
                  border-2
                  border-blue-200
                  rounded-3xl
                "
              ></div>

              <img
                src={heroImage}
                alt="Hero"
                className="
                  relative
                  w-[250px]
                  md:w-[300px]
                  h-auto
                  object-cover
                  rounded-3xl
                  border-4
                  border-white
                  shadow-2xl
                  hover:scale-[1.02]
                  transition-all
                  duration-500
                "
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;