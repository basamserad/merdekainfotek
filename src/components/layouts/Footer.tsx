import Image from "next/image";
import logo from "public/logo/merdaka.png";
import fb from "public/logo/facebook.svg";
import linkedin from "public/logo/linkedin.svg";
import github from "public/logo/github.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col place-content-center items-center pt-20 px-10">
      <Image src={logo} alt="merdeka infotek" height={48} width={48} />
      <div>
        <p className="text-center mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          alias aperiam. Nemo esse praesentium.
        </p>
        <div className="flex place-content-center gap-4 mb-5">
          <Image src={fb} alt="merdeka infotek" height={28} width={28} />
          <Image src={linkedin} alt="merdeka infotek" height={28} width={28} />
          <Image src={github} alt="merdeka infotek" height={28} width={28} />
        </div>
        <p className="text-xs text-center mb-3">
          Copyright &copy; {new Date().getFullYear()} Merdeka Info Teknologi.
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
