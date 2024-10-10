import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScrollY = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  return (
    <>
      <div className="transition-all duration-300 ease-in-out">
        {scrollY > 50 ? (
          <>
            <Navbar scrolledDown="yes" />
          </>
        ) : (
          <>
            <Navbar scrolledDown="no" />
            <Searchbar />
          </>
        )}
      </div>
    </>
  );
};

export default Header;
