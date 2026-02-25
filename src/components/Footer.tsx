import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer id="contact" className="w-full px-8 py-12">
      <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p className="text-text-muted text-lg">
            Interested in working together? Feel free to contact me for any
            project or collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <ContactInfo />
          <ContactForm />
        </div>

        <small className="text-text-muted text-center mt-2">
          &copy; {new Date().getFullYear()} Ekrem Gürsoy. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
