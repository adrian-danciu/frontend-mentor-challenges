import logo from "../../assets/logo-bookmark.svg";
import { navbarLinks } from "../../constants";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className="hidden md:flex justify-between items-center mt-12 mx-40 font-rubik h-12 md:mb-28 mb-24">
      <img src={logo} alt="logo-bookmark" />
      <nav className="flex gap-12 justify-between items-center">
        {navbarLinks.map((link) => (
          <a
            className="text-darkText text-sm font-normal uppercase hover:text-customRed tracking-[2px]"
            href={link.path}
            key={link.name}
          >
            {link.name}
          </a>
        ))}
        <Button label="LOGIN" variant="secondary" />
      </nav>
    </div>
  );
};

export default Navbar;
