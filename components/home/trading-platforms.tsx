import Link from "next/link";
import React from "react";

type Props = {
  header: string;
  ctaImage: string;
  body: string;
  heading?: string;
  order: number;
};

const TradingPlatforms = ({
  header,
  body,
  ctaImage,
  order,
  heading,
}: Props) => {
  // function to change order of arrangement
  const changeArrangement = (order: number) => {
    switch (order) {
      case 1:
        return "space-y-3";
      case 2:
        return "space-y-3 order-2";
      default:
        return;
    }
  };

  const changeColor = (order: number) => {
    switch (order) {
      case 1:
        return "inline-block px-6 py-3 rounded bg-orange-500 text-white font-bold";
      case 2:
        return "inline-block px-6 py-3 rounded bg-teal-500 text-white font-bold";
      default:
        return;
    }
  };

  return (
    <section className="font-body my-12">
      {/* container */}
      <div className="w-[90%] md:w-[80%] mx-auto p-4">
        <div className="text-center p-3 my-3">
          <h4 className="font-bold text-3xl text-blue-600">{heading}</h4>
        </div>
        {/* flex wrapper */}
        <div className="flex items-center flex-col md:flex-row p-4 gap-4 justify-around">
          {/* write up  */}
          <div className={changeArrangement(order)}>
            <h2 className="font-bold capitalize text-2xl">{header}</h2>
            <p className="font-light leading-loose">{body}</p>
            {/* Register button */}
            <Link href="/auth/sign-in" className={changeColor(order)}>
              {order == 1 ? "Register with us" : "Get started today"}
            </Link>
          </div>
          {/* image */}
          <img src={ctaImage} alt={header} className="" />
        </div>
      </div>
    </section>
  );
};

export default TradingPlatforms;
