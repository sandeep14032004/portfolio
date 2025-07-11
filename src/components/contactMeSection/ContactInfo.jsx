import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="sandeeppati69@gmailcom" Image={HiOutlineMail} />
      <SingleInfo text="+91 8260195633" Image={FiPhone} />
      <SingleInfo text="Odisha , India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
