import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DisplayLeads from "./components/DisplayLeads";
import Email from "./components/Email";
import ForgotPassword from "./components/ForgotPassword";
import Header from "./components/Header";
import LeadInfo from "./components/LeadInfo";
import Login from "./components/Login";
import ManageLead from "./components/ManageLead";
import PasswordReset from "./components/PasswordReset";
import SignUp from "./components/SignUp";
import Home from "./homePage/Home";

export const url = "https://crm-lead.onrender.com";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/users/forgotpassword/:id/:token"
            element={<ForgotPassword />}
          />
          <Route path="/users/passwordreset" element={<PasswordReset />} />
          <Route path="/users/signup" element={<SignUp />} />
          <Route path="/manage-lead/:id" element={<ManageLead />} />
          <Route path="/display-lead" element={<DisplayLeads />} />
          <Route path="/lead-info" element={<LeadInfo />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users/login-user" element={<Login />} />
          <Route path="/email" element={<Email />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/incoming-leads" element={<Dashboard />} />
          <Route path="/converted-leads" element={<Dashboard />} />
          <Route path="/closed-leads" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/users/login-user" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
