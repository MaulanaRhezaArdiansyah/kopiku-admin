import { Link } from "react-router-dom";

export default function Promo() {
  const promoList = [
    {
      id: 1,
      avatar: "mothersday.webp",
      title: "HAPPY MOTHER'S DAY!",
      description: "Get one of our favorite menu for free!",
    },
    {
      id: 2,
      avatar: "coffeeman.webp",
      title: "Get a cup of coffee for free on sunday morning",
      description: "Only at 7 to 9 AM!",
    },
    {
      id: 3,
      avatar: "mothersday.webp",
      title: "HAPPY MOTHER'S DAY!",
      description: "Get one of our favorite menu for free!",
    },
    {
      id: 4,
      avatar: "halloween.webp",
      title: "HAPPY HALLOWEEN!",
      description:
        "Do you like chicken wings? Get 1 free only if you buy pinky promise",
    },
  ];
  return (
    <>
      <section className="h-full w-[30%] sm:max-lg:w-full max-sm:w-full flex flex-col gap-8 border-r-[1px] border-slate-200 sm:max-lg:pt-16 max-sm:pt-16 max-sm:h-[50%]">
        <div className="flex flex-col gap-3 items-center pt-10 w-full">
          <p className="text-[#6A4029] font-extrabold text-3xl">Promo today</p>
          <p className="text-[#000000] text-base font-medium text w-[70%] text-center">
            Coupons will be updated every weeks. Check them out!
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:max-lg:gap-5 w-full items-center">
          {promoList.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center bg-[#88B788] rounded-lg w-[80%] px-3 py-3"
              >
                <img
                  src={`http://localhost:3000/uploads/images/${item.avatar}`}
                  alt=""
                />
                {/* {console.log()} */}
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <button className="text-white bg-[#6A4029] p-3 w-[80%] rounded-lg font-bold">
            Apply Coupon
          </button>
        </div>
        <div className="flex flex-col items-start justify-start pl-10 pt-10">
          <p className="text-[#4F5665] text-base font-bold">
            Terms and Condition
          </p>
          <p className="text-[#4F5665] text-base">
            1. You can only apply 1 coupon per day
          </p>
          <p className="text-[#4F5665] text-base">2. It only for dine in</p>
          <p className="text-[#4F5665] text-base">
            3. Buy 1 get 1 only for new user
          </p>
          <p className="text-[#4F5665] text-base">
            4. Should make member card to apply coupon
          </p>
        </div>
        <div className="flex flex-col items-start justify-start pl-10 pt-10 text-2xl gap-3 underline text-[#6A4029] font-bold">
          <Link>
            <p>Edit promo</p>
          </Link>
          <Link>
            <p>Add new promo</p>
          </Link>
        </div>
      </section>
    </>
  );
}
