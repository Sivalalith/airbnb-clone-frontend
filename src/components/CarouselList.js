import Carousel from "./Carousel";

const CarouselList = () => {
  return (
    <div className="flex flex-wrap my-24 mx-8">
      <Carousel />
      <Carousel />
      <span className="text-3xl font-bold w-full p-4 mx-4 my-8">
        Past Experiences
      </span>
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default CarouselList;
