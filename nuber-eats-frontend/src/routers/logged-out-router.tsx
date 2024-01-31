import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateAccount } from "../pages/create-account";
import { Login } from "../pages/login";
import { NotFound } from "../pages/404";

export const LoggedOutRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
