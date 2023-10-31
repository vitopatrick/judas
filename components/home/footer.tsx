import Link from "next/link";
import React from "react";

type Props = {};

// links
const ourCompany = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", path: "/about" },
  { id: 3, title: "Contact Us", path: "/contact" },
];

const Footer = (props: Props) => {
  return (
    <footer className="bg-neutral-800">
      {/* container */}
      <div className="p-4 w-full mx-auto md:w-[85%]">
        {/* company Info and flex container */}
        <div className="my-8 flex flex-col md:flex-row gap-8 md:items-center justify-between">
          <div>
            <h4 className="font-num text-xl text-blue-500 py-3 font-bold">
              OUR COMPANY
            </h4>
            <div className="flex flex-col gap-4">
              {ourCompany.map((company) => (
                <Link
                  href={company.path}
                  key={company.id}
                  className="font-light uppercase font-db text-neutral-400 hover:text-blue-400 hover:underline"
                >
                  {company.title}
                </Link>
              ))}
            </div>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-num text-xl text-blue-500 py-3 font-bold">
              CONTACT
            </h4>
            <div className="flex flex-col gap-4">
              <h4 className="text-neutral-400 font-db">
                <span className="text-blue-500">UNITED STATES OF AMERICA </span>
                : NEW YORK
              </h4>
              <h4 className="text-neutral-400 font-db">MON-SUN, 24/7</h4>
            </div>
          </div>
          {/* about */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-num text-xl font-bold text-blue-500">
                $390M+
              </h4>
              <p className="font-light text-neutral-400 font-db uppercase">
                Market Cap
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-num text-xl font-bold text-blue-500">
                $6.9M+
              </h4>
              <p className="font-light text-neutral-400 font-db uppercase">
                DAILY TRANSACTIONS
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-num text-xl font-bold text-blue-500">
                230K+
              </h4>
              <p className="font-light text-neutral-400 font-db uppercase">
                ACTIVE ACCOUNT
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-num text-xl font-bold text-blue-500">
                WorldWide
              </h4>
              <p className="font-light text-neutral-400 font-db uppercase">
                Supported Countries
              </p>
            </div>
          </div>
        </div>
        {/* Risk and warning */}
        <div>
          <p className="font-light text-neutral-400 text-sm font-sub leading-loose">
            <span className="font-bold text-neutral-300 font-num">
              {" "}
              Risk Warning
            </span>
            : Trading Forex and Leveraged Financial Instruments involves
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
