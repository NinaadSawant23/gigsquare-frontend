import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserAuth from "./UserAuth/userAuth";
import Home from "./components/Home/Home";
import Employee from "./components/Employee/employee";

import Talent from "./components/Header/HireTalent";
import Payments from "./components/Header/Payments";
import Contact from "./components/Header/ContactUs";
import VerifiedProfiles from "./components/Header/VerifiedProfiles";
const App = () => {
    localStorage.clear();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UserAuth />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/employeedashboard" element={<Employee />} />
                    <Route path="/talent" element={<Talent />} />
                    <Route path="/payments" element={<Payments />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/verified-profiles"
                        element={<VerifiedProfiles />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
