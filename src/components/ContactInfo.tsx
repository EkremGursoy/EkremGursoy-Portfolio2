import envelopeBlack from "../assets/icons/envelope-black.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import githubBlack from "../assets/icons/github-black.svg";

const contacts = [
  {
    icon: envelopeBlack,
    label: "Email",
    value: "e.ogulcan.gursoy@gmail.com",
    href: "mailto:e.ogulcan.gursoy@gmail.com",
  },
  {
    icon: linkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/ekremgursoy",
    href: "https://linkedin.com/in/ekremgursoy",
  },
  {
    icon: githubBlack,
    label: "GitHub",
    value: "github.com/EkremGursoy",
    href: "https://github.com/EkremGursoy",
  },
];

export default function ContactInfo() {
  return (
    <div className="bg-bg-card p-8 rounded-[5px]">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      <div className="flex flex-col gap-6">
        {contacts.map((contact) => (
          <div key={contact.label} className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-bg-tag rounded-full">
              <img src={contact.icon} alt={contact.label} className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-text-muted text-sm">{contact.label}</span>
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                {contact.value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
