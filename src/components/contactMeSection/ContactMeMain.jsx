import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
    >
      <h2 className="text-6xl text-cyan mb-10 text-center font-bold drop-shadow-lg">
        Contact Me
      </h2>
      <div className="flex justify-between gap-12 bg-[#0F172A] p-8 rounded-3xl lg:flex-row sm:flex-col border border-cyan/20 shadow-[0_0_30px_#06b6d450] backdrop-blur-md">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
