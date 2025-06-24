import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À propos" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contenuAcademique", label: "Contenu académique" },
  { to: "/evenements", label: "Événements" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  return (
    <div className="fixed w-full z-10 text-white mb-10">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-[#01a7eb] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="/">
              <h1 className="text-2xl font-semibold">CAP2FPS</h1>
            </Link>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `hover:text-hoverColor transition-all cursor-pointer ${
                    isActive ? "underline" : ""
                  }`
                }
                onClick={closeMenu}
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-[#01a7eb] rounded-xl text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="hover:text-cyan transition-all cursor-pointer border-b-2 border-white mb-2 pb-2"
              onClick={closeMenu}
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
