export default function ContactForm() {
  return (
    <div className="bg-bg-card p-8 rounded-[5px]">
      <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-3 py-3 border border-[#ddd] rounded-[5px] bg-bg-input text-base font-sans outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-3 py-3 border border-[#ddd] rounded-[5px] bg-bg-input text-base font-sans outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="w-full px-3 py-3 border border-[#ddd] rounded-[5px] bg-bg-input text-base font-sans outline-none resize-y"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-6 rounded-[5px] font-medium cursor-pointer mt-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
