import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Layout } from "antd";
import { SideNavigation, TopNavigation, SideActions } from "./components";
import { CreateOrganizationPage, HomePage, SignUpPage } from "./pages";
import { FinancePage } from "./pages";

const App: React.FC = () => {
  return (
    <Layout>
      <TopNavigation />
      <Layout>
        <Layout
          style={{ padding: "0 24px 24px", display: "flex" }}
          hasSider={true}
        >
          <SideNavigation />

          <div style={{ flex: 1 }}>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/testing" element={<CreateOrganizationPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/finance" element={<FinancePage />} />
              </Routes>
            </Router>
          </div>
          <SideActions />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
