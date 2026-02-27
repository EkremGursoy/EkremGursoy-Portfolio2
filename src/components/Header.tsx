import { Link, useLocation, useNavigate } from "react-router";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      e.preventDefault();
      navigate("/");
      // Wait for navigation then scroll
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

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
              <a href="/#projects" onClick={(e) => handleHashNav(e, "projects")} className="font-normal hover:text-black cursor-pointer">
                Projects
              </a>
            </li>
            <li>
              <a href="/#contact" onClick={(e) => handleHashNav(e, "contact")} className="font-normal hover:text-black cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
