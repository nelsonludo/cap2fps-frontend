import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import About from "../pages/about";
import Contact from "../pages/contact";
import Admissions from "../pages/admissions";
import ContenuAcademique from "../pages/contenuAcademique";
import Evenements from "../pages/evenements";


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        {/* PUBLIC ROUTES  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contenuAcademique" element={<ContenuAcademique />} />
        <Route path="/evenements" element={<Evenements />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
