function Footer() {
  return (
    <footer
      className="
      bg-blue-600
      text-white
      py-8
      px-6
      "
    >

      <div className="
      max-w-6xl
      mx-auto
      ">

        <div className="
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-6
        ">

          {/* LEFT */}

          <div className="
          text-center
          md:text-left
          ">

            <h2 className="
            text-2xl
            font-bold
            leading-tight
            ">
              Cinta Lusviana
              <br />
              Intan Ramadhina
            </h2>

            <p className="
            mt-3
            inline-flex
            items-center
            gap-2
            px-3
            py-1
            rounded-full
            bg-white/20
            backdrop-blur-md
            text-xs
            ">
              💻 Sistem Informasi Jaringan & Aplikasi
            </p>

          </div>


          {/* RIGHT */}

          <div className="
          flex
          flex-wrap
          justify-center
          gap-2
          ">

            {["home","about","skills","contact"].map((item)=>(
              <a
                key={item}
                href={`#${item}`}
                className="
                px-4
                py-2
                rounded-lg
                bg-white/20
                text-sm
                hover:bg-white/30
                transition
                "
              >
                {item.charAt(0).toUpperCase()+item.slice(1)}
              </a>
            ))}

          </div>

        </div>


        {/* BOTTOM */}

        <div className="
        mt-6
        pt-4
        border-t
        border-blue-400/40
        text-center
        text-sm
        text-blue-100
        ">

          © 2026 Cinta Lusviana Intan Ramadhina

        </div>

      </div>

    </footer>
  );
}

export default Footer;