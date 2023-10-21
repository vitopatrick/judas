import React from "react";
import theValues from "./theValues";

const Values = () => {
  return (
    <section>
      <div>
        <div className="md:w-[60%] w-[95%] mx-auto py-20">
          <h4 className="p-4 bg-sky-400/10 text-slate-800 font-db  tracking-widest font-semibold">
            CAPITALMINE VALUES
          </h4>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {theValues.map((value) => (
              <div key={value.name} className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="w-[8%]">
                    <img src={value.icon} alt="" />
                  </div>
                  <h4
                    className={`text-xl font-db font-semibold ${value.color}`}
                  >
                    {value.name}
                  </h4>
                </div>
                <p className=" text-md leading-loose font-light  font-db   text-neutral-400">
                  {value.about}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
