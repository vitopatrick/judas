import React from "react";
import TradingComponents from "./TradingComponents";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div>
      {/* container */}
      <div className="w-[90%] md:w-[90%] mx-auto my-[2rem] p-4">
        {/* Header */}
        <h3 className="font-num text-2xl text-center font-bold">About us</h3>
        {/* flex container */}
        <div className="md:grid md:grid-cols-2 gap-8 mt-[3rem] place-items-center">
          <div>
            <TradingComponents />
          </div>
          <div className="mt-8 md:mt-0">
            <h4 className="font-num text-xl font-bold">Our Company</h4>
            <p className="font-db font-light leading-loose">
              We are a legally operating trading/investment company. The company
              was created by a group of qualified experts, professional bankers,
              traders and analysts who specialized in cryptocurrency, binary,
              the stock, bond, futures, currencies, gold, silver and oil trading
              with having more than ten years of extensive practical experiences
              of combined personal skills, knowledge, talents and collective
              ambitions for success. We believe that superior investment
              performance is achieved through a skillful balance of three core
              attributes: knowledge, experience and adaptability. There is only
              one way to be on the cutting edge – commitment to innovation. We
              do our best to achieve a consistent increase in investment
              performance for our clients, and superior value-add. We appreciate
              our clients loyalty and value the relationships we build with each
              customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
