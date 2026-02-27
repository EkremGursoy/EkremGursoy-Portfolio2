import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import profileImg from "../assets/images/profile.webp";
import envelopeWhite from "../assets/icons/envelope-white.svg";
import githubBlack from "../assets/icons/github-black.svg";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="flex flex-col-reverse md:grid md:grid-cols-[60%_40%] md:items-center gap-8 w-full pt-4">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-5xl font-bold leading-tight">Frontend Developer</h2>
            <p className="text-3xl text-text-muted">Building beautiful web experiences</p>
          </div>
          <p className="text-lg">
            Hello! I'm Ekrem Gursoy, a passionate Front-End Developer and UI/UX
            Designer currently in my first year of study. I specialize in
            creating visually appealing, user-friendly web experiences by
            combining both development and design principles.
          </p>
          <p className="text-lg">
            With a solid foundation in HTML, CSS, and JavaScript, and
            hands-on experience with React, TypeScript, and Tailwind CSS, I'm
            constantly improving my skills and learning new techniques to build
            interactive and responsive websites.
          </p>
          <p className="text-lg">
            I'm always looking for new opportunities to grow and collaborate, and
            I'm excited to continue my journey as a front-end developer and
            designer.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-[5px] border border-black bg-black text-white cursor-pointer">
              <img src={envelopeWhite} alt="" className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
            <Button variant="secondary" href="https://github.com/EkremGursoy" icon={githubBlack}>
              GitHub
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="rounded-full overflow-hidden w-70 h-70 shrink-0">
            <img
              src={profileImg}
              alt="Profile Photograph"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="flex flex-col items-center gap-8 w-full py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="text-text-muted text-lg">
            A selection of my recent work showcasing my skills in frontend
            development, UI/UX design, and problem-solving.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
