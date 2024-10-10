import { useState, useEffect } from "react";
import IconSearchOutline from "../assets/images/icon-search.js";
import DropdownLocation from "./DropdownLocation.js";
import Calendar from "./Calendar.js";
import PeopleCount from "./PeopleCount.js";

const Searchbar = ({ scrolledDown }) => {
  const [isWhereClicked, setIsWhereClicked] = useState(false);
  const [isCheckInClicked, setIsCheckInClicked] = useState(false);
  const [isCheckOutClicked, setIsCheckOutClicked] = useState(false);
  const [isWhoClicked, setIsWhoClicked] = useState(false);
  const [checkInOrOut, setCheckInOrOut] = useState("");

  useEffect(() => {
    if (isWhereClicked) {
      document.getElementById("whereInput").focus();
    }
  }, [isWhereClicked]);

  return (
    <>
      {scrolledDown === "yes" ? (
        <div className="w-auto flex justify-center my-12">
          <div className=" flex items-center justify-between p-2 bg-white rounded-full shadow-md w-auto max-w-3xl mx-auto fixed top-0 z-10">
            {/* Where */}
            <div
              id="whereInput"
              className="w-[3/10] px-4 py-2 border-r rounded-full hover:bg-gray-200"
            >
              {isWhereClicked ? (
                <>
                  <span className="w-full block text-black text-xs">
                    Anywhere
                  </span>
                  <DropdownLocation />
                </>
              ) : (
                <button
                  onClick={() => setIsWhereClicked(true)}
                  className="w-full text-left text-sm text-gray-500"
                >
                  <span className="text-black text-xs">Anywhere</span>
                </button>
              )}
            </div>

            {/* When */}
            <div
              className="w-[3/10] px-4 py-2 border-r rounded-full hover:bg-gray-200"
              onBlur={() => setIsCheckInClicked(false)}
            >
              {isCheckInClicked ? (
                <>
                  <button
                    onClick={() => {
                      setIsCheckInClicked((prev) => !prev);
                      setCheckInOrOut("");
                    }}
                    className="w-full text-left text-sm text-gray-500"
                  >
                    <span className="text-black text-xs">Any week</span>
                  </button>
                  <div className="absolute left-auto w-auto z-10 bg-white shadow-lg rounded-3xl my-6">
                    {checkInOrOut === "checkin" && <Calendar />}
                  </div>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsCheckOutClicked(false);
                    setIsCheckInClicked((prev) => !prev);
                    setCheckInOrOut("checkin");
                  }}
                  className="w-full text-left text-sm text-gray-500"
                >
                  <span className="text-black text-xs">Any week</span>
                </button>
              )}
            </div>

            {/* Who */}
            <div className="w-[3/10] px-4 py-2 border-r rounded-full hover:bg-gray-200">
              {isWhoClicked ? (
                <>
                  <button
                    onClick={() => {
                      setIsWhoClicked((prev) => !prev);
                    }}
                    className="w-full text-left text-sm text-gray-500"
                    //   onBlur={() => {
                    //     setIsWhoClicked(false);
                    //   }}
                  >
                    <span className="text-black text-xs">Add guests</span>
                  </button>
                  <div className="flex justify-between items-center absolute l-auto w-auto z-10 my-6 bg-white shadow-lg rounded-3xl">
                    <PeopleCount />
                  </div>
                </>
              ) : (
                <button
                  onClick={() => setIsWhoClicked(true)}
                  className="w-full text-left text-sm text-gray-500"
                >
                  <span className="text-black text-xs">Add guests</span>
                </button>
              )}
            </div>

            {/* Search Button */}
            <div className="flex items-center px-4 py-2">
              <button className="bg-[#FF5A5F] text-white p-2 border rounded-full hover:bg-red-500 transition duration-300">
                <IconSearchOutline />
                {}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center mb-12">
          <div className=" flex items-center justify-between p-2 bg-white rounded-full shadow-md w-full max-w-3xl mx-auto my-4 fixed top-[72px] z-10">
            {/* Where */}
            <div className="w-1/4 px-4 py-2 border-r rounded-full hover:bg-gray-200">
              {isWhereClicked ? (
                <>
                  <span className="w-full block text-black text-xs">Where</span>
                  <input
                    type="text"
                    id="whereInput"
                    placeholder="Search destinations"
                    className="w-full bg-transparent outline-none text-black text-sm"
                    onBlur={() => setIsWhereClicked(false)}
                  />
                  <DropdownLocation />
                </>
              ) : (
                <button
                  onClick={() => setIsWhereClicked(true)}
                  className="w-full text-left text-sm text-gray-500"
                >
                  <span className="text-black text-xs">Where</span>
                  <p>Search destinations</p>
                </button>
              )}
            </div>

            {/* When */}
            <div
              className="w-1/4 px-4 py-2 border-r rounded-full hover:bg-gray-200"
              onBlur={() => setIsCheckInClicked(false)}
            >
              {isCheckInClicked ? (
                <>
                  <button
                    onClick={() => {
                      setIsCheckInClicked((prev) => !prev);
                      setCheckInOrOut("");
                    }}
                    className="w-full text-left text-sm text-gray-500"
                  >
                    <span className="text-black text-xs">Check in</span>
                    <p>Add dates</p>
                  </button>
                  <div className="absolute left-auto w-auto z-10 bg-white shadow-lg rounded-3xl my-6">
                    {checkInOrOut === "checkin" && <Calendar />}
                  </div>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsCheckOutClicked(false);
                    setIsCheckInClicked((prev) => !prev);
                    setCheckInOrOut("checkin");
                  }}
                  className="w-full text-left text-sm text-gray-500"
                >
                  <span className="text-black text-xs">Check in</span>
                  <p>Add dates</p>
                </button>
              )}
            </div>

            <div
              className="w-1/4 px-4 py-2 border-r rounded-full hover:bg-gray-200"
              onBlur={() => setIsCheckOutClicked(false)}
            >
              {isCheckOutClicked ? (
                <>
                  <button
                    onClick={() => {
                      setIsCheckOutClicked((prev) => !prev);
                      setCheckInOrOut("");
                    }}
                    className="w-full text-left text-sm text-gray-500"
                  >
                    <span className="text-black text-xs">Check out</span>
                    <p>Add dates</p>
                  </button>
                  <div className="absolute left-auto w-auto z-10 bg-white shadow-lg rounded-3xl my-6">
                    {checkInOrOut === "checkout" && <Calendar />}
                  </div>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsCheckInClicked(false);
                    setIsCheckOutClicked((prev) => !prev);
                    setCheckInOrOut("checkout");
                  }}
                  className="w-full text-left text-sm text-gray-500"
                >
                  <span className="text-black text-xs">Check out</span>
                  <p>Add dates</p>
                </button>
              )}
            </div>

            {/* Who */}
            <div className="w-1/4 px-4 py-2 border-r rounded-full hover:bg-gray-200">
              {isWhoClicked ? (
                <>
                  <button
                    onClick={() => {
                      setIsWhoClicked((prev) => !prev);
                    }}
                    className="w-full text-left text-sm text-gray-500"
                    //   onBlur={() => {
                    //     setIsWhoClicked(false);
                    //   }}
                  >
                    <span className="text-black text-xs">Who</span>
                    <p>Add guests</p>
                  </button>
                  <div className="flex justify-between items-center absolute l-auto w-auto z-10 my-6 bg-white shadow-lg rounded-3xl">
                    <PeopleCount />
                  </div>
                </>
              ) : (
                <button
                  onClick={() => setIsWhoClicked(true)}
                  className="w-full text-left text-sm text-gray-500"
                >
                  <span className="text-black text-xs">Who</span>
                  <p>Add guests</p>
                </button>
              )}
            </div>

            {/* Search Button */}
            <div className="flex items-center px-4 py-2">
              <button className="bg-[#FF5A5F] text-white p-2 border rounded-full hover:bg-red-500 transition duration-300">
                <IconSearchOutline />
                {}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;
