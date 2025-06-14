import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_4vr74qm",
        "template_9bqx3ut",
        form.current,
        "_JHPFVo25JZ0HeQKr"
      )
      .then(() => {
        setSuccess("Message sent successfully ✅");
        form.current.reset();
        setTimeout(() => setSuccess(""), 4000);
        setLoading(false);
      })
      .catch(() => {
        setSuccess("❌ Failed to send. Try again.");
        setTimeout(() => setSuccess(""), 4000);
        setLoading(false);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-6 w-full"
    >
      <input
        type="text"
        name="user_name"
        required
        placeholder="Your Name"
        className="h-12 rounded-lg bg-[#0f172a] text-white placeholder-gray-400 px-4 outline-none border border-cyan/40 focus:ring-2 focus:ring-cyan"
      />
      <input
        type="email"
        name="user_email"
        required
        placeholder="Your Email"
        className="h-12 rounded-lg bg-[#0f172a] text-white placeholder-gray-400 px-4 outline-none border border-cyan/40 focus:ring-2 focus:ring-cyan"
      />
      <textarea
        name="message"
        rows="5"
        required
        placeholder="Your Message"
        className="rounded-lg bg-[#0f172a] text-white placeholder-gray-400 px-4 py-3 outline-none resize-none border border-cyan/40 focus:ring-2 focus:ring-cyan"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-cyan text-black font-semibold py-3 rounded-lg border border-cyan hover:bg-opacity-80 transition-all duration-300 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      {success && (
        <span className="text-green-400 font-medium text-sm transition-all duration-500">
          {success}
        </span>
      )}
    </form>
  );
};

export default ContactForm;
