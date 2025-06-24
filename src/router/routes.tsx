import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";

const AppRoutes: React.FC = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES  */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />

      
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
