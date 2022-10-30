import React from "react";
import Dashboard from "../components/Dashboard";
import Email from "../components/Email";
import Profile from "../components/Profile";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Settings from "../components/Settings";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

import { Route, Routes } from "react-router-dom";
export default function DashboardRoute() {
  return (
        <Div>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/services" element={<Services />} />
                <Route path="/emails" element={<Email />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Div>
  );
}

const Div = styled.div`
  position: relative;
`;
