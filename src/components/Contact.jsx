function Contact() {
  return (
    <section
      id="contact"
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
      <div
        className="
          absolute -top-32 -left-32
          w-96 h-96
          bg-blue-300
          rounded-full
          blur-3xl
          opacity-30
        "
      ></div>

      <div
        className="
          absolute -bottom-32 -right-32
          w-96 h-96
          bg-blue-400
          rounded-full
          blur-3xl
          opacity-20
        "
      ></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">

        {/* TITLE */}
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Hubungi Saya 📩
          </h2>

          <p className="text-gray-600 mb-12">
            Jangan ragu untuk menghubungi saya. Saya senang berdiskusi,
            belajar hal baru, dan berkolaborasi dalam berbagai proyek.
          </p>
        </div>

        {/* CONTACT CARD */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* EMAIL */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="
              bg-white/70
              backdrop-blur-md
              border border-white
              rounded-3xl
              p-6
              shadow-md
              hover:-translate-y-2
              hover:shadow-xl
              transition-all duration-300
            "
          >
            <div
              className="
                w-14 h-14
                rounded-full
                mx-auto mb-4
                flex items-center justify-center
                bg-blue-500
                text-white
                text-2xl
              "
            >
              📧
            </div>

            <h3 className="font-bold text-gray-700 mb-2">
              Email
            </h3>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=cintalusviana@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline break-all"
            >
              cintalusviana@gmail.com
            </a>
          </div>

          {/* WHATSAPP */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="
              bg-white/70
              backdrop-blur-md
              border border-white
              rounded-3xl
              p-6
              shadow-md
              hover:-translate-y-2
              hover:shadow-xl
              transition-all duration-300
            "
          >
            <div
              className="
                w-14 h-14
                rounded-full
                mx-auto mb-4
                flex items-center justify-center
                bg-green-500
                text-white
                text-2xl
              "
            >
              📱
            </div>

            <h3 className="font-bold text-gray-700 mb-2">
              WhatsApp
            </h3>

            <a
              href="https://wa.me/6285818246970?text=Halo%20Cinta,%20saya%20ingin%20menghubungi%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-600 hover:underline"
            >
              +62 858-1246-5970
            </a>
          </div>

          {/* SCHOOL EMAIL */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="
              bg-white/70
              backdrop-blur-md
              border border-white
              rounded-3xl
              p-6
              shadow-md
              hover:-translate-y-2
              hover:shadow-xl
              transition-all duration-300
            "
          >
            <div
              className="
                w-14 h-14
                rounded-full
                mx-auto mb-4
                flex items-center justify-center
                bg-purple-500
                text-white
                text-2xl
              "
            >
              🎓
            </div>

            <h3 className="font-bold text-gray-700 mb-2">
              School Email
            </h3>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=cinta.lusviana26@smk.belajar.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-600 hover:underline break-all"
            >
              cinta.lusviana26@smk.belajar.id
            </a>
          </div>

        </div>

        {/* ACTION CARD */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-14"
        >
          <div
            className="
              bg-white/70
              backdrop-blur-md
              border border-white
              rounded-3xl
              p-8
              shadow-md
              animate-[float_5s_ease-in-out_infinite]
            "
          >
            <h3 className="text-2xl font-bold text-gray-700 mb-3">
              Mari Terhubung 🚀
            </h3>

            <p className="text-gray-600 mb-6">
              Tertarik untuk berdiskusi, berkolaborasi, atau memiliki
              pertanyaan? Hubungi saya melalui email atau WhatsApp.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=cintalusviana@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6 py-3
                  bg-blue-500
                  text-white
                  rounded-xl
                  shadow-md
                  hover:bg-blue-600
                  hover:scale-105
                  transition-all duration-300
                "
              >
                📧 Kirim Email
              </a>

              <a
                href="https://wa.me/6285812465970?text=Halo%20Cinta,%20saya%20ingin%20menghubungi%20Anda."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6 py-3
                  bg-green-500
                  text-white
                  rounded-xl
                  shadow-md
                  hover:bg-green-600
                  hover:scale-105
                  transition-all duration-300
                "
              >
                💬 Chat WhatsApp
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;