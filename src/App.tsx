import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "antd";
import { SideNavigation, TopNavigation, SideActions } from "./components";
import { CreateOrganizationPage, LandingPage, HomePage, SignUpPage } from "./pages";
import { FinancePage } from "./pages";
import { auth } from "./lib/firebase"; // Import your Firebase auth instance

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isLoading) {
    // Show loading indicator or placeholder
    return <div>Loading...</div>;
  }

  return (
    <Router>
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
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route
                  path="/organization/new"
                  element={
                    user ? <CreateOrganizationPage /> : <Navigate to="/" replace={true} />
                  }
                />
                <Route
                  path="/signup"
                  element={!user ? <SignUpPage /> : <Navigate to="/home" replace={true} />}
                />
                <Route
                  path="/finance"
                  element={user ? <FinancePage /> : <Navigate to="/" replace={true} />}
                />
                <Route
                  path="/home"
                  element={user ? <HomePage /> : <Navigate to="/" replace={true} />}
                />
              </Routes>
            </div>
            <SideActions />
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;