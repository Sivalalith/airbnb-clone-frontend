import Logo from "../assets/images/Logo.js";
import IconGlobe from "../assets/images/icon-globe.js";
import IconMenu from "../assets/images/icon-menu.js";
import IconCircleUser from "../assets/images/icon-user.js";
import { useState } from "react";
import Searchbar from "./Searchbar.js";
import { Link } from "react-router-dom"; // Provides 'to' route -> when clicked the URL changes to it
import LoginDropdown from "./LoginDropdown.js";

const Navbar = ({ scrolledDown }) => {
  const [navbarMenuClickStatus, setNavbarMenuClickStatus] = useState("stays");
  const [authDivClicked, setAuthDivClicked] = useState(false);
  console.log(typeof scrolledDown);
  return (
    <>
      {scrolledDown === "no" ? (
        <>
          <div className="w-full h-auto flex items-center justify-between fixed top-0 z-10 bg-white shadow-md">
            <button className="w-auto h-auto mx-12">
              <Logo />
            </button>
            <div>
              <button
                href="/"
                className={
                  "px-4 py-2 mx-4 my-2 hover:bg-gray-50 hover:text-black " +
                  (navbarMenuClickStatus === "stays"
                    ? "text-black font-bold "
                    : "text-gray-500")
                }
                onClick={(e) => {
                  setNavbarMenuClickStatus("stays");
                }}
              >
                Stays
              </button>
              <button
                href="/"
                className={
                  (navbarMenuClickStatus === "experiences"
                    ? "text-black font-bold "
                    : "text-gray-500 ") +
                  "px-4 py-2 mx-4 my-2 hover:bg-gray-50 hover:text-black"
                }
                onClick={(e) => {
                  setNavbarMenuClickStatus("experiences");
                }}
              >
                Experiences
              </button>
            </div>

            <div className="flex items-center justify-start mx-12">
              <button className="p-2 m-2">Airbnb your home</button>
              <button className="w-auto h-auto m-2">
                <IconGlobe />
              </button>
              {authDivClicked === true ? (
                <>
                  <button className="w-auto h-auto m-2">
                    <IconMenu />
                  </button>
                  <button className="w-auto h-auto m-2">
                    <IconCircleUser />
                  </button>
                  <LoginDropdown />
                </>
              ) : (
                <div
                  className="flex justify-start items-center border rounded-3xl border-gray-200 hover:shadow-lg"
                  onClick={() => setAuthDivClicked(!authDivClicked)}
                >
                  <button className="w-auto h-auto m-2">
                    <IconMenu />
                  </button>
                  <button className="w-auto h-auto m-2">
                    <IconCircleUser />
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-auto flex items-center justify-between fixed top-0 z-10 bg-white shadow-md">
            <button className="w-auto h-auto mx-12">
              <Logo />
            </button>

            <Searchbar scrolledDown="yes" />

            <div className="flex items-center justify-start mx-12">
              <button className="p-2 m-2">Airbnb your home</button>
              <button href="/" className="w-auto h-auto m-2">
                <IconGlobe />
              </button>
              <div className="flex justify-start items-center border rounded-3xl border-gray-200 hover:shadow-lg">
                <button href="/" className="w-auto h-auto m-2">
                  <IconMenu />
                </button>
                <button href="/" className="w-auto h-auto m-2">
                  <IconCircleUser />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
