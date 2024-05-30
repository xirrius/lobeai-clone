import { FooterIcons, FooterLinks } from "../constants";
import { logo } from "../assets";

const Footer = () => {
  return (
    <div className="border-t-[0.1px] flex ss:flex-row flex-col-reverse justify-center m-6 pb-20 pt-12 md:px-20 px-5">
      {/* LOGO & COPYRIGHTS */}
      <div className="ss:flex-[0.8] flex-[1] flex flex-col ss:items-start items-center ss:mt-0 mt-16">
        <img src={logo} alt="lobe.ai" className="w-[78px] h-[40px]" />
        <p className="leading-8 text-tertiary pl-1 text-sm pt-2 ss:text-left text-center ">
          A product by Microsoft. <br /> All rights reserved. <br /> © Microsoft
          2021
        </p>
      </div>

      {/* OTHER USEFUL LINKS */}
      <div className="flex-[2] flex w-full ss:justify-around justify-center flex-wrap ">
        {/* LINKS */}
        {FooterLinks.map((footerList) => (
          <div
            key={footerList.id}
            className="ss:text-left text-center 
          ss:px-0 px-16 ss:py-0 py-2
          "
          >
            <p className="text-primary text-sm leading-8 font-semibold ">
              {footerList.title}
            </p>
            <ul>
              {footerList.links.map((link) => (
                <li
                  key={link.id}
                  className="hover:scale-105 transition-all duration-500 "
                >
                  <a
                    href={link.link}
                    className="text-tertiary text-sm leading-8 "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* ICONS */}
        <div
          className="flex xs:flex-col md:flex-row flex-row mx-1
         ss:px-0 px-20 ss:py-0 py-2
         "
        >
          {FooterIcons.map((footerIcon) => (
            <a href={footerIcon.link} key={footerIcon.id}>
              <img
                src={footerIcon.icon}
                alt="social-media"
                className="w-10 h-10 hover:scale-105 transition-all duration-500 cursor-pointer m-1"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
