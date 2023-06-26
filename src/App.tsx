import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Layout, Spin } from "antd";
import {
  SideNavigation,
  TopNavigation,
  SideActions,
  AppLayout,
} from "./components";
import {
  CreateOrganizationPage,
  LandingPage,
  HomePage,
  SignUpPage,
  TenantsPage,
  CalendarPage
} from "./pages";
import { FinancePage } from "./pages";
import { auth } from "./lib/firebase"; // Import your Firebase auth instance
import { CreateOrganizationLoader } from "./pages/CreateOrganizationPage/loader";
import {
  HomePageAction,
  HomePageLoader,
} from "./pages/HomePage/loaders/HomePageLoader";

import awsmobile from "./aws-exports";
import { Amplify } from "aws-amplify";

Amplify.configure(awsmobile);

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
    return <Spin />;
  }

  const pageStyling = {
    flex: 1,
    height: "100%",
    maxHeight: 1000,
    paddingTop: "2rem",
  };

  const routesJSX = (
    <Route>
      <Route
        path="/"
        element={
          <AppLayout
            TopNavigation={null}
            SideNavigation={null}
            SideAction={null}
            PageContent={<LandingPage />}
          />
        }
      />
      <Route
        path="/signup"
        element={
          <AppLayout
            TopNavigation={<TopNavigation />}
            SideNavigation={user ? <SideNavigation /> : <></>}
            SideAction={user ? <SideActions /> : <></>}
            PageContent={
              <div style={pageStyling}>
                {!user ? (
                  <SignUpPage />
                ) : (
                  <Navigate to="/home" replace={true} />
                )}
              </div>
            }
          />
        }
      />
      <Route
        path="/home"
        loader={HomePageLoader}
        action={HomePageAction}
        element={
          <AppLayout
            TopNavigation={<TopNavigation />}
            SideNavigation={user ? <SideNavigation /> : <></>}
            SideAction={user ? <SideActions /> : <></>}
            PageContent={
              <div style={pageStyling}>
                {user ? <HomePage /> : <Navigate to="/" replace={true} />}
              </div>
            }
          />
        }
      />
      <Route
        path="/organization/new"
        loader={CreateOrganizationLoader}
        element={
          <AppLayout
            TopNavigation={<TopNavigation />}
            SideNavigation={user ? <SideNavigation /> : <></>}
            SideAction={user ? <SideActions /> : <></>}
            PageContent={
              <div style={pageStyling}>
                {user ? (
                  <CreateOrganizationPage />
                ) : (
                  <Navigate to="/" replace={true} />
                )}
              </div>
            }
          />
        }
      />
      <Route
        path="/finance"
        element={
          <AppLayout
            TopNavigation={<TopNavigation />}
            SideNavigation={user ? <SideNavigation /> : <></>}
            SideAction={user ? <SideActions /> : <></>}
            PageContent={
              <div style={pageStyling}>
                {user ? <FinancePage /> : <Navigate to="/" replace={true} />}
              </div>
            }
          />
        }
      />
      <Route
        path="/tenants"
        element={
          <AppLayout
            TopNavigation={<TopNavigation />}
            SideNavigation={user ? <SideNavigation /> : <></>}
            SideAction={user ? <SideActions /> : <></>}
            PageContent={
              <div style={pageStyling}>
                {user ? <TenantsPage /> : <Navigate to="/" replace={true} />}
              </div>
            }
          />
        }
      />
      <Route
        path="/calendar"
        element={
          <AppLayout
            TopNavigation={<TopNavigation />}
            SideNavigation={user ? <SideNavigation /> : <></>}
            SideAction={user ? <SideActions /> : <></>}
            PageContent={
              <div style={pageStyling}>
                {user ? <CalendarPage /> : <Navigate to="/" replace={true} />}
              </div>
            }
          />
        }
      />
    </Route>
  );

  const routes = createRoutesFromElements(routesJSX);

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;