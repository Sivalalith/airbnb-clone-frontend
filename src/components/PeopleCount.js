import IconPlusCircle from "../assets/images/icon-plus.js";
import IconMinusCircle from "../assets/images/icon-minus.js";
import { useState } from "react";

const PeopleCount = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [isClicked, setIsClicked] = useState(true);

  return (
    <>
      {isClicked && (
        <div
          className="flex flex-col p-4 bg-white shadow-md rounded-lg"
          onBlur={() => setIsClicked(false)}
        >
          <h3 className="text-lg font-semibold">Guests</h3>
          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-col">
              <span className="mb-2 font-bold">Adults</span>
              <span className="font-light">Ages 18 or above</span>
            </div>
            <div className="ml-4 flex items-center">
              <button
                onClick={() => setAdults(Math.max(adults - 1, 0))}
                className="rounded-full p-1"
              >
                <IconMinusCircle />
              </button>
              <span className="mx-2">{adults}</span>
              <button
                onClick={() => setAdults(adults + 1)}
                className=" rounded-full p-1"
              >
                <IconPlusCircle />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-col">
              <span className="mb-2 font-bold">Children</span>
              <span className="font-light">Ages 2 to 12</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setChildren(Math.max(children - 1, 0))}
                className="rounded-full p-1"
              >
                <IconMinusCircle />
              </button>
              <span className="mx-2">{children}</span>
              <button
                onClick={() => setChildren(children + 1)}
                className="rounded-full p-1"
              >
                <IconPlusCircle />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-col">
              <span className="mb-2 font-bold">Infants</span>
              <span className="font-light">Under 2</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setInfants(Math.max(infants - 1, 0))}
                className=" rounded-full p-1"
              >
                <IconMinusCircle />
              </button>
              <span className="mx-2">{infants}</span>
              <button
                onClick={() => setInfants(infants + 1)}
                className=" rounded-full p-1"
              >
                <IconPlusCircle />
              </button>
            </div>
          </div>
          <div className="w-80 flex justify-between items-center mt-4">
            <div className="flex flex-col">
              <span className="mb-2 font-bold">Pets</span>
              <a
                href="/"
                className="font-normal underline text-gray-500 decoration-gray-700 decoration-1"
              >
                Bringing a service animal?
              </a>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setInfants(Math.max(pets - 1, 0))}
                className=" rounded-full p-1"
              >
                <IconMinusCircle />
              </button>
              <span className="mx-2">{pets}</span>
              <button
                onClick={() => setPets(pets + 1)}
                className=" rounded-full p-1"
              >
                <IconPlusCircle />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PeopleCount;
