import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-[#01a7eb] text-white mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">CAP2FPS</h1>
          <p className="text-sm">
            CAP2FPS est une plateforme dédiée à la gestion des consultations, la prise de rendez-vous, et la communication entre patients et enseignants dans le domaine médical.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">
            Navigation
          </h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              À propos
            </Link>
            <Link
              to="admissions"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Admissions
            </Link>
            <Link
              to="contenuAcademique"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Contenu académique
            </Link>
            <Link
              to="evenements"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Événements
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Nos Services</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="rendezvous"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Prise de rendez-vous
            </Link>
            <Link
              to="consultations"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Consultations
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          Copyright © 2024 - Tous droits réservés par
          <span className="text-hoverColor"> CAP2FPS</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
