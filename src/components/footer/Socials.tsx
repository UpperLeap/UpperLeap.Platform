import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  const socials = [
    {
      name: "Tiktok",
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/",
    },
    {
      name: "x",
      icon: <FaXTwitter />,
      link: "https://x.com",
    },
  ];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          className="text-xl p-2 rounded-full hover:bg-secondary-foreground/20 hover:text-foreground duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
