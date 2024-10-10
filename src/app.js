import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // to configure routes for our app
import Chat from "./components/Chat.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Footer from "./components/Footer.js";
/**
 * App layout
 * - Header
 *   - navbar (sticky navbar)
 *   - search bar (shrink on scroll effect)
 * - Body
 *   - options bar (i.e. 'radio bar' ex: treehouse, lakehouse, cave, farms, etc.)
 *   - card layout 1 (Trending?)
 *     - Card
 *       - image carousel
 *       - share button (opens a popup)
 *       - Title
 *       - host name
 *       - cost / status (bookings closed / sold out)
 *   - card layout 2 (Past experiences?)
 * - Footer
 *   - Top Locations group
 *   - footer links
 *
 */

const AppLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      //nested routing
      {
        path: "/",
        element: (
          <>
            <Header />
            <Body />
            <Footer />
          </>
        ),
      },
      {
        path: "chat",
        element: <Chat room="Admin" />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
