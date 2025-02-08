import { motion } from "framer-motion";
import { useState } from "react";
import { db, collection, addDoc } from "./firebaseConfig";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required.";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      return "Valid email is required.";
    if (!formData.subject.trim()) return "Subject is required.";
    if (!formData.message.trim()) return "Message is required.";
    if (formData.message.length < 10)
      return "Message must be at least 10 characters long.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "contactMessages"), formData);
      setSuccess("Your message has been sent!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Try again later.");
    }
    setLoading(false);
  };
  return (

    <motion.div
      className="w-full px-6 lg:px-40 flex flex-col py-10 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
       id="Contact"
      transition={{ duration: 0.8 }}
    >
      <div className="contactHead text-center">
        <motion.h1
          className="h-auto font-bold font-sans text-[2rem] dark:text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
        <span className="line"></span>
        <motion.p
          className="text-[17px] font-['Poppins', sans-serif] text-gray-600 mb-5 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Would you like to collaborate? Let's have a conversation.
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-[1rem] mt-10 mb-10">
        <motion.form
          className="contactBody flex flex-col space-y-5 w-full lg:w-[70%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
            <div className="flex justify-center items-center gap-[1rem]">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full h-[42px] rounded-[30px] outline outline-1 outline-gray-400 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                placeholder="Full Name"
              />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="block w-full h-[42px] rounded-[30px] outline outline-1 outline-gray-400 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="block w-full h-[42px] rounded-[30px] outline outline-1 outline-gray-400 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            />
            <textarea
              name="Message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="block w-full h-[150px] rounded-[30px] outline outline-1 outline-gray-400 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            ></textarea>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <button
              id="messageSubmit"
              className="text-white h-[42px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[30px] text-sm px-5 py-2.5 text-center me-2 mb-2"
              disabled={loading}
              type="submit"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
        </motion.form>

        <motion.div
          className="w-full lg:w-[30%] flex gap-[2rem] flex-col rounded-[8px] font-sans outline bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 outline-1 outline-gray-400 bg-white p-[2rem] text-base text-gray-900 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="contact-item media flex items-center flex-row w-full gap-[2rem] text-white text-[1.1rem]">
            <i className="fa-solid fa-location-dot fa-lg"></i>
            <div className="media-body">
              <p className="text-uppercase">Address</p>
              <p className="text-uppercase">Mumbai, India</p>
            </div>
          </div>
          <div className="contact-item media text-white flex items-center flex-row w-full gap-[2rem] text-[1.1rem]">
            <i className="fa fa-mobile media-left media-right-margin"></i>
            <div className="media-body">
              <p className="text-uppercase">Phone</p>
              <p className="text-uppercase">
                <a className="text-white" href="tel:7378841467">
                  7378841467
                </a>
              </p>
            </div>
          </div>
          <div className="contact-item media text-white flex items-center flex-row w-full gap-[2rem] text-[1.1rem]">
            <i className="fa fa-envelope media-left media-right-margin"></i>
            <div className="media-body">
              <p className="text-uppercase">E-mail</p>
              <p className="text-uppercase">
                <a className="text-white" href="mailto:govindb2922@gmail.com">
                  govindb2922@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="contact-item media text-white flex items-center flex-row w-full gap-[2rem] text-[1.1rem]">
            <i className="fa fa-clock media-left media-right-margin"></i>
            <div className="media-body">
              <p className="text-uppercase">Working Hours</p>
              <p className="text-uppercase">Mon-Fri 9.00 AM to 5.00 PM.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>

  );
};

export default Contact;
