import { useState } from "react";
import IconBxChevronRight from "../assets/images/icon-chevron-right";
import IconBxChevronLeft from "../assets/images/icon-chevron-left";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjMyMzc5Mzc2MTc3OTEzMg%3D%3D/original/ef8a4040-742a-4fbf-9965-515235d0552a.jpeg?im_w=1440&im_q=highq",
      title: "First slide label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      user: "Admin",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjMyMzc5Mzc2MTc3OTEzMg%3D%3D/original/e1176dd5-f1ac-428e-92f3-9f2028bad9e7.jpeg?im_w=1440&im_q=highq",
      title: "Second slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "Admin",
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjMyMzc5Mzc2MTc3OTEzMg%3D%3D/original/47914d73-3dc3-40e6-9b45-3dc4f3735939.jpeg?im_w=1440&im_q=highq",
      title: "Third slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      user: "Admin",
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="rounded-2xl relative mb-12 px-6 mx-2 w-80 h-auto ">
      {/* Carousel Items */}
      <Link to="/chat">
        <div className="rounded-2xl relative overflow-hidden h-72 bg-gray-400">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`rounded-2xl absolute inset-0 transition-transform duration-500 ease-in-out transform ${
                currentSlide === index ? "translate-x-0" : "translate-x-full"
              } ${
                index === currentSlide - 1 ||
                (currentSlide === 0 && index === slides.length - 1)
                  ? "-translate-x-full"
                  : ""
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          <span className="font-semibold">
            Join the Living Room Session with Doja Cat
          </span>
          <span className="text-gray-500">Hosted by Doja Cat</span>
          <span>
            <span className="font-semibold">₹6,463</span> per guest
          </span>
        </div>
      </Link>
      {/* Navigation Buttons */}
      <button
        className="absolute top-[9rem] left-[1.5rem] transform -translate-y-1/2 bg-gray-500 bg-opacity-50 hover:bg-white hover:bg-opacity-75 text-white p-1 m-1 rounded-full"
        onClick={() => {
          prevSlide();
        }}
      >
        <IconBxChevronLeft />
      </button>
      <button
        className="absolute top-[9rem] right-[1.5rem] transform -translate-y-1/2 bg-gray-500 hover:bg-white bg-opacity-50 hover:bg-opacity-75 text-white p-1 m-1 rounded-full"
        onClick={() => {
          nextSlide();
        }}
      >
        <IconBxChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
