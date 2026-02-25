import { Link } from "react-router";

export default function Header() {
  return (
    <header className="w-full px-8 py-10">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <Link to="/" className="text-xl font-semibold">
          Ekrem Gürsoy
        </Link>
        <nav className="hidden min-[480px]:flex">
          <ul className="flex gap-8">
            <li>
              <Link to="/" className="font-normal hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <a href="/#projects" className="font-normal hover:text-black">
                Projects
              </a>
            </li>
            <li>
              <a href="/#contact" className="font-normal hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
