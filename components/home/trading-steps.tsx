import Link from "next/link";
import React from "react";
import { FaUserPlus, FaMoneyCheck, FaExchangeAlt } from "react-icons/fa";
import { BsFillShieldFill } from "react-icons/bs";

type Props = {};

const steps = [
  {
    id: 1,
    icon: <FaUserPlus className="text-5xl text-slate-700" />,
    header: "Register",
    body: "Sign up with AdroFx for free and instantly to gain access to the world's trading market. Register",
  },
  {
    id: 2,
    icon: <BsFillShieldFill className="text-5xl text-slate-700" />,
    header: "Verify",
    body: "Email and Phone verification for security of your account and send us your proof of ID and residence.",
  },
  {
    id: 3,
    icon: <FaMoneyCheck className="text-5xl text-slate-700" />,
    header: "Fund",
    body: "Make a deposit via any funding method from our list that sutures you the most.",
  },
  {
    id: 4,
    icon: <FaExchangeAlt className="text-5xl text-slate-700" />,
    header: "Trade",
    body: "Open and close trades on your own or simply Copy Trade other traders. other traders.",
  },
];

const TradingSteps = (props: Props) => {
  return (
    <section className="bg-sky-50/50 p-4 font-body">
      {/* container & flex Wrapper*/}
      <div className="w-[90%] md:w-[80%] mx-auto p-3">
        {/* header */}
        <h4 className="font-bold text-3xl  capitalize">
          Start Trading in <span className="text-blue-600">4 steps</span>
        </h4>
        {/* flex container */}
        <div className="flex flex-col md:flex-row gap-4 mt-10 mb-5">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-3 rounded">
              <div className="my-3">{step.icon}</div>
              <div className="space-y-3">
                <h4 className="font-bold text-lg">{step.header}</h4>
                <p className="font-light font-db leading-loose">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        {/* open account */}
        <div>
          <Link
            href="/auth/sign-up"
            className="rounded bg-teal-300 px-6 py-3 w-fit block text-white"
          >
            Create Account Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TradingSteps;
