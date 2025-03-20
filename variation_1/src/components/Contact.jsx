const Contact = () => (
    <section id="contact" className="bg-gray-800 text-white py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400">Contact Me</h2>
        <form className="max-w-xl mx-auto space-y-6">
          {/* Name Input */}
          <input
            type="text"
            className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
            placeholder="Your Name"
          />
          
          {/* Email Input */}
          <input
            type="email"
            className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
            placeholder="Your Email"
          />
  
          {/* Message Textarea */}
          <textarea
            className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
            rows="6"
            placeholder="Your Message"
          ></textarea>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
  
  export default Contact;
  