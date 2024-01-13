import Link from "next/link";
import React from "react";

type Props = {};

// const images = [
//   "https://adrofx.com/sites/default/files/2020-12/art-of-trading-xs_0.jpg",
//   "https://adrofx.com/sites/default/files/2022-07/%D1%81opy-trading-thunmbnail_0.jpg",
//   "https://adrofx.com/sites/default/files/2020-12/deposit-bonus-xs_1.jpg",
//   "https://adrofx.com/sites/default/files/2020-12/markets-xs_0.jpg",
// ];

const Hero = (props: Props) => {
  return (
    <section className="p-5">
      {/* container */}
      <div className="w-full md:w-[80%] mx-auto p-5 md:grid grid-cols-2  md:gap-4 place-items-center">
        {/* write up */}
        <div className="font-body space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold">
            1 <span className="text-sky-500">Broker</span> 5 Markets
          </h1>
          <p className="font-semibold text-blue-400 text-xl capitalize">
            Trade the top markets with zero commission
          </p>
          {/* create account button */}
          <Link
            href="/auth/sign-up"
            className="inline-block bg-sky-400 px-4 py-3 rounded text-white"
          >
            Create An Account
          </Link>
          {/* thumb Nails */}
          {/* <div className="flex gap-3">
            {images.map((image) => (
              <img src={image} className="rounded-full w-[40px]" />
            ))}
          </div> */}
        </div>
        {/* image */}
        <img src="/manged-portfolios.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
