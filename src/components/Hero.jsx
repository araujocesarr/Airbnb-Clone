import React from "react";

export default function Hero() {
  return (
    <section
      className="py-5 flex flex-col px-9 max-w-xl mx-auto 
    lg:max-w-2xl
    xxl:max-w-4xl"
    >
      <img
        src="src/assets/Group 77.png"
        alt="photo"
        className="max-w-[400px] self-center mb-8 
        lg:max-w-2xl
        xxl:max-w-4xl xxl:mb-10"
      />

      <h1
        className="font-semibold text-4xl mb-4 
      md:mr-auto
      lg:text-6xl
      xxl:text-7xl xxl:max-w-xl xxl:mb-10"
      >
        Online Experiences
      </h1>
      <p
        className="font-light text-base mt-0 max-w-xs 
      lg:text-2xl lg:max-w-lg
      xxl:text-3xl xxl:max-w-2xl xxl:mb-10"
      >
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
