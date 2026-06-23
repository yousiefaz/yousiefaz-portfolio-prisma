import { ModeToggle } from "@/components/navigation/mode-toggle";
import Logo from "@/components/navigation/logo";
import { navLinks } from "@/constants/nav-links";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50  w-full items-center justify-center bg-background/60 backdrop-blur-md">
      <div className=" container py-3 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-x-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="capitalize font-medium hover:text-foreground"
            >
              {link.title}
            </a>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
