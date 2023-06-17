import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "antd";
import { SideNavigation, TopNavigation, SideActions } from "./components";
import { CreateOrganizationPage, LandingPage, HomePage, SignUpPage } from "./pages";
import { FinancePage } from "./pages";
import { auth } from "./lib/firebase"; // Import your Firebase auth instance
import { CreateOrganizationLoader } from "./pages/CreateOrganizationPage/loader";

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

  const pageStyling = {
    flex: 1,
    height: "100%",
    maxHeight: 1000,
    paddingTop: "2rem",
  };

  return (
    <Router>
      <Layout>
        <TopNavigation />
        <Layout
          style={{
            padding: "0 24px 24px",
            display: "flex",
            height: "100%",
            maxHeight: 1000,
          }}
          hasSider={true}
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/signup"
              element={
                <>
                  {user ? <SideNavigation /> : <></>}

                  <div style={pageStyling}>
                    {!user ? (
                      <SignUpPage />
                    ) : (
                      <Navigate to="/home" replace={true} />
                    )}
                  </div>
                  {user ? <SideActions /> : <></>}
                </>
              }
            />
            <Route
              path="/home"
              loader={CreateOrganizationLoader}
              element={
                <>
                  {user ? <SideNavigation /> : <></>}

                  <div style={pageStyling}>
                    {user ? <HomePage /> : <Navigate to="/" replace={true} />}
                  </div>
                  {user ? <SideActions /> : <></>}
                </>
              }
            />
            <Route
              path="/organization/new"
              element={
                <>
                  {user ? <SideNavigation /> : <></>}

                  <div style={pageStyling}>
                    {user ? (
                      <CreateOrganizationPage />
                    ) : (
                      <Navigate to="/" replace={true} />
                    )}
                  </div>
                  {user ? <SideActions /> : <></>}
                </>
              }
            />
            <Route
              path="/finance"
              element={
                <>
                  {user ? <SideNavigation /> : <></>}

                  <div style={pageStyling}>
                    {user ? (
                      <FinancePage />
                    ) : (
                      <Navigate to="/" replace={true} />
                    )}
                  </div>
                  {user ? <SideActions /> : <></>}
                </>
              }
            />
          </Routes>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;