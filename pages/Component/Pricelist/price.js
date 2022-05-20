import React, { useEffect, useState } from "react";
import TabItem from "./priceCard";

const Price = () => {

    const PriceData=  [


            {
                id:1,
                title: 'Annually',
                value: 'annually',
                price: 0,
                price2:40,
                price3:70,
            },
    
            {
                id:2,
                title: 'Quartely',
                value: 'quartely',
                price: 30,
                price2:90,
                price3:150,
            },
           
            {
                id:3,
                title: 'Monthly',
                value: 'monthly',
                price: 40,
                price2:140,
                price3:270,
            }
        ]



  const [currentFeature, setCurrentFeature] = useState(-1);

  useEffect(() => {
    if (currentFeature === -1) {
      setCurrentFeature(0);
    }
  }, []);

  const handleChangeFeature = (index) => {
    setCurrentFeature(index);
  };

  return (
    <>
      <section
        className="relative pt-20 lg:pt-24 lg:pb-20 bg-background1"
        id="features"
      >
        {/* SLIDE ICON SECTION */}
        <div className="w-full items-center overflow-x-hidden overflow-y-hidden">
          <div className="w-full">
            <div className="w-full rounded-md  flex flex-row items-center  justify-center overflow-x-hidden overflow-y-hidden">
              {PriceData.map((feature, index) => {
                return (
                  <div key={feature.id}>
                    <TabItem
                      key={feature.id}
                      // icon={feature.icon}
                      title={feature.title}
                      active={currentFeature === index}
                      onClick={() => handleChangeFeature(index)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-4/5 mx-auto flex-col items-center">
          {/* SLIDE IMAGE SECTION */}
          <div className="w-full pt-10 pb-8 flex flex-row  space-y-8 benefit-image-shadow">
            <div className="pt-10 w-4/5 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  md:gap-x-10 sm:gap-y-16  gap-12 md:gap-y-7  items-center justify-center mx-auto space-x-7 ">
              <div className="w-56 p-8 bg-white text-center border rounded-xl shadow-xl">
                <h1 className="text-black font-semibold text-xl">Startup</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-gray-400 align-top">$ </span>
                  <span className="text-3xl font-semibold">
                    {" "}
                    {
                      PriceData.filter(
                        (data, index) => index === currentFeature
                      )[0]?.price
                    }
                  </span>
                  <span className="text-gray-400 font-medium">/ user</span>
                </p>
                <hr className="mt-4 border-1" />
                <div className="pt-8">
                <p className="font-medium text-left">
                    <span className="pl-2 text-black">
                    For small teams, getting started with sales email outreach.

                    </span>
                  </p>
                  <a href="#" className="">
                    <p className="w-full py-3 bg-primary mt-8 rounded-md text-white">
                      <span className="font-medium">Try for Free</span>
                    </p>
                  </a>
                </div>
              </div>
              <div className="w-56 p-8 bg-white text-center mr-4 rounded-xl text-black border shadow-xl border-primary transform scale-40 ">
                <h1 className="text-black font-semibold text-2xl">Growth</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-gray-400 align-top">$ </span>
                  <span className="text-3xl font-semibold">
                    {" "}
                    {
                      PriceData.filter(
                        (data, index) => index === currentFeature
                      )[0]?.price2
                    }
                  </span>
                  <span className="text-gray-400 font-medium">/ user</span>
                </p>
                <hr className="mt-4 border-1 border-gray-600 " />
                <div className="pt-8">
                  <p className="font-medium text-left">
                    <span className="pl-2 text-black">
                    For small teams, getting started with sales email outreach.

                    </span>
                  </p>
                  <a href="#" className="">
                    <p className="w-full py-3 bg-primary mt-8 rounded-md text-white">
                      <span className="font-medium">Try for Free</span>
                    </p>
                  </a>
                </div>
              </div>

              <div className="w-56 p-8 bg-white text-center border rounded-xl pr-4 shadow-xl">
                <h1 className="text-black font-semibold text-xl">Startup</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-gray-400 align-top">$ </span>
                  <span className="text-3xl font-semibold">
                    {" "}
                    {
                      PriceData.filter(
                        (data, index) => index === currentFeature
                      )[0]?.price3
                    }
                  </span>
                  <span className="text-gray-400 font-medium">/ user</span>
                </p>
                <hr className="mt-4 border-1" />
                <div className="pt-8">
                <p className="font-medium text-left">
                    <span className="pl-2 text-black">
                    For small teams, getting started with sales email outreach.

                    </span>
                  </p>
                  <a href="#" className="">
                    <p className="w-full py-3 bg-primary mt-8 rounded-md text-white">
                      <span className="font-medium">Try for Free</span>
                    </p>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
