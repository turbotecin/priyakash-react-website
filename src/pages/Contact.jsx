export default function Contact() {
  return (
    <div className="pt-20 max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Contact Us</h2>
      <form className="max-w-3xl mx-auto space-y-6">
        <input type="text" placeholder="Your Name" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500" />
        <input type="email" placeholder="Your Email" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500" />
        <textarea placeholder="Your Message" rows="4" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}