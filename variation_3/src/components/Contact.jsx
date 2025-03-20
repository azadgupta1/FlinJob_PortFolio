import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from- bg-gray-200 to-gray-200">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-xl mx-auto bg-white/60 backdrop-blur-lg p-10 rounded-xl shadow-2xl">
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 mb-6 bg-transparent border-b-2 border-gray-300 focus:border-[#3bd1a6] outline-none transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 mb-6 bg-transparent border-b-2 border-gray-300 focus:border-[#3bd1a6] outline-none transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.textarea
          placeholder="Your Message"
          className="w-full p-4 mb-6 bg-transparent border-b-2 border-gray-300 focus:border-[#ff7e5f] outline-none h-40 resize-none transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        ></motion.textarea>
        
        <motion.button
          className="w-full px-6 py-3 bg-[#ff7e5f] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#feb47b] transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Send Message
        </motion.button>
      </div>
    </section>
  );
};

export default Contact;
