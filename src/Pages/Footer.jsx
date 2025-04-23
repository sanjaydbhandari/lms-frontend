import { BsLinkedin, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <footer className="w-full left-0 bottom-0 bg-gray-800 flex flex-col sm:flex-row items-center justify-between text-white px-10 h-[10vh] z-10">
      <section className="text-lg">
        Copyright {year} | All right reserved
      </section>
      <section className="flex gap-5 text-2xl justify-center items-center pt-2">
        <a
          href=""
          className="hover:text-yellow-300 transition-all ease-in-out duration-300"
        >
          <BsLinkedin />
        </a>
        <a
          href=""
          className="hover:text-yellow-300 transition-all ease-in-out duration-300"
        >
          <BsInstagram />
        </a>
        <a
          href=""
          className="hover:text-yellow-300 transition-all ease-in-out duration-300"
        >
          <BsFacebook />
        </a>
        <a
          href=""
          className="hover:text-yellow-300 transition-all ease-in-out duration-300"
        >
          <BsTwitter />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
