import { Routes, Route, Navigate } from "react-router-dom";
import Dados from "../pages/Dados";
import Home from "../pages/Home";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dados" element={<Dados />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}