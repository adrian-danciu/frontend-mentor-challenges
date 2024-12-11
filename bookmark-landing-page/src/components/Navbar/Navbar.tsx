import logo from "../../assets/logo-bookmark.svg";
import Button from "../Button/Button";

const navbarLinks = [
  { name: "Features", path: "/features" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <div className="hidden md:flex justify-between items-center mt-[48px] mx-[165px] font-rubik  h-[46px] md:mb-[108px] mb-[80px]">
      <img src={logo} alt="logo-bookmark" />
      <nav className="flex gap-[48px] justify-between items-center">
        {navbarLinks.map((link) => (
          <a
            className="text-darkText text-[13px] font-normal uppercase hover:text-customRed tracking-[2px]"
            href={link.path}
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
