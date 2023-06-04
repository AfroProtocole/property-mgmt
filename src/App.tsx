import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Layout } from "antd";
import { SideNavigation, TopNavigation, SideActions } from "./components";
import { CreateOrganizationPage, HomePage, SignUpPage } from "./pages";
import { FinancePage } from "./pages";
import { Auth, API } from "aws-amplify";


/**
 * sign-up:
 * try {
    const { user } = await Auth.signUp({ username, password });
    console.log(user);
} catch (error) {
    console.log('error signing up:', error);
}

sign-in:
try {
    const user = await Auth.signIn(username, password);
} catch (error) {
    console.log('error signing in', error);
}

sign-out:
try {
    await Auth.signOut();
} catch (error) {
    console.log('error signing out: ', error);
}
 * @returns 
 */
const App: React.FC = () => {
  return (
    <Layout>
      <TopNavigation />
      <Layout>
        <Layout
          style={{
            padding: "0 24px 24px",
            display: "flex",
            height: "100%",
            maxHeight: 1000,
          }}
          hasSider={true}
        >
          <SideNavigation />

          <div
            style={{
              flex: 1,
              height: "100%",
              maxHeight: 1000,
              paddingTop: "2rem",
            }}
          >
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
