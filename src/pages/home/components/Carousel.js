import { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
export default function Carousel() {
  const reviews = [
    {
      id: 1,
      avatar: "viezh-robert.webp",
      name: "Viezh Robert",
      country: "Warsaw, Poland",
      review:
        "Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like ithere!! Very recommended!",
      rating: "4.5",
    },
    {
      id: 2,
      avatar: "yessica-christy.webp",
      name: "Yessica Christy",
      country: "Shanxi, China",
      review:
        "I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte",
      rating: "4.5",
    },
    {
      id: 3,
      avatar: "kim-young-jou.webp",
      name: "Kim Young Jou",
      country: "Seoul, South Korea",
      review:
        "This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!",
      rating: "4.5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0; // true
    const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === reviews.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full flex">
      <div className="h-[50vh] px-10 py-4 relative group flex gap-3 overflow-x-scroll scrollbar-hide no-scrollbar">
        {reviews.map((i) => {
          return (
            <div
              key={i.id}
              className="card-review border-2 rounded-md h-full w-1/3 sm:w-[45%] md:w-[40%] max-sm:w-[80%] max-lg:w-[40%] flex justify-center items-center p-8"
            >
              <div className="card-content flex flex-col gap-5">
                <div className="flex justify-between">
                  <div className="flex">
                    <div>
                      {console.log(
                        //   `http://localhost:3000/src/assets/img/${i.avatar}`
                        `http://localhost:3000/public/${i.avatar}`
                      )}
                      <img
                        src={`http://localhost:3000/uploads/images/${i.avatar}`}
                        //   src={require("../../../assets/img/viezh-robert.webp")}
                        alt=""
                        className="grow-1 pr-4"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start grow-7">
                      <p className="text-lg text-[#0B132A] font-bold">
                        {i.name}
                      </p>
                      <p className="text-sm text-[#4F5665]">{i.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end grow-2">
                    <p className="text-base text-[#0B132A] pr-2">{i.rating}</p>
                    <img src="../img/star.webp" alt="" />
                  </div>
                </div>
                <div className="">
                  <p className="text-base text-[#0B132A] font-medium leading-8">
                    {i.review}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div> */}

        {/* <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div> */}
        {/* <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
