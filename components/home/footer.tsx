import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="font-body bg-neutral-700 p-3">
      {/* container */}
      <div className="p-4 w-[90%] mx-auto md:w-[85%]">
        <hr />
        {/* company Info and flex container */}
        <div className="flex items-center gap-5 my-5">
          {/* image container */}
          <div className="w-[100px]">
            <img
              src="https://adrofx.com/themes/custom/adrofx_theme/img/logo-milit.svg"
              alt=""
            />
          </div>
          {/* info */}
          <div>
            <p className="text-neutral-400 text-sm capitalize">
              Stark Limited, Company number 700546 is regulated and licensed by
              Vanuatu Financial Services Commission (VFSC) with its registered
              Office at Govant Building, BP 1276, Port Vila, Vanuatu
            </p>
          </div>
        </div>
        {/* Risk and warning */}
        <div>
          <p className="font-light text-neutral-400 text-sm leading-loose">
            <span className="font-bold text-neutral-300"> Risk Warning</span>:
            Trading Forex and Leveraged Financial Instruments involves
            significant risk and can result in the loss of your invested
            capital. You should not invest more than you can afford to lose and
            should ensure that you fully understand the risks involved. Trading
            leveraged products may not be suitable for all investors. Before
            trading, please take into consideration your level of experience,
            investment objectives, and seek independent financial advice if
            necessary. It is the responsibility of the Client to ascertain
            whether he/she is permitted to use the services of the AdroFx brand
            based on the legal requirements in his/her country of residence.
            Please read AdroFx’s full Risk Disclosure. The information on this
            website is not intended to be addressed to the public of AdroFx.com
            does not provide services to residents of Suriname, North Korea, U.S
            citizens, Syria. other jurisdictions that would be contrary to local
            law or regulation..
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
