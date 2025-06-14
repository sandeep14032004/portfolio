import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/sandeep-pati-537ba030b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/sandeep14032004"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/sandeep_27.2/?__pwa=1"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
