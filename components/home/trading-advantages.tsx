import React from "react";

type Props = {};

const Advantages = [
  {
    id: 1,
    title: "Wide Range of Instruments",
    body: "Trade on the global markets with no limits",
    icon: "https://adrofx.com/themes/custom/adrofx_theme/img/advantages/trading-instruments.svg",
  },
  {
    id: 2,
    title: "Regular Updates & Promotions",
    body: "Unleash your trading power",
    icon: "https://adrofx.com/themes/custom/adrofx_theme/img/advantages/promotions.svg",
  },
  {
    id: 3,
    title: "Protection of Funds",
    body: "Your funds are protected by industry-leading security protocols",
    icon: "https://adrofx.com/themes/custom/adrofx_theme/img/advantages/protection-funds.svg",
  },
  {
    id: 4,
    title: "Privacy",
    body: "We will never share your private data without your permission",
    icon: "https://adrofx.com/themes/custom/adrofx_theme/img/advantages/privacy.svg",
  },
  {
    id: 5,
    title: "Trading Education from A to Z",
    body: "Educational Videos, Guides, Analysis, and Strategies. The right knowledge to become a professional.",
    icon: "https://adrofx.com/themes/custom/adrofx_theme/img/advantages/education.svg",
  },
  {
    id: 6,
    title: "Tight spreads & 0% commission",
    body: "Explore endless trading opportunities with tight spreads and no commission.",
    icon: "https://adrofx.com/themes/custom/adrofx_theme/img/advantages/commission.svg",
  },
];

const TradingAdvantages = (props: Props) => {
  return (
    <section className="bg-sky-50/40 p-4 font-body">
      {/* container */}
      <div className="w-[90%] md:w-[80%] mx-auto p-5">
        {/* header */}
        <h3 className="font-bold text-3xl text-center">
          Trading Advantages Of Us.
        </h3>
        {/* grid container */}
        <div className="md:grid grid-cols-3 gap-4 my-6">
          {Advantages.map((advantages) => (
            <div className="flex items-center gap-4 p-4 bg-white rounded">
              {/* image */}
              <img
                src={advantages.icon}
                alt={advantages.title}
                className="w-[50px]"
              />
              {/* write up */}
              <div className="space-y-2">
                <h4 className="font-bold">{advantages.title}</h4>
                <p className="leading-loose font-light text-sm">
                  {advantages.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingAdvantages;
