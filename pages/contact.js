export default function Contact() {
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h1>
      <form className="max-w-lg mx-auto bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" required />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded h-32" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </main>
  );
}
