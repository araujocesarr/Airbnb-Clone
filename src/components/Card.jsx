import React from "react";

export default function Card({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
  openSpots,
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (country == "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="w-44 text-xs flex flex-shrink-0 flex-grow-0 basis-auto flex-col relative">
      {badgeText && (
        <div className="absolute top-[6px] left-[6px] bg-white py-[5px] px-[7px] font-bold rounded-sm">
          {badgeText}
        </div>
      )}
      <img src={"src/assets/" + img} alt="model" className="mb-[9px] w-full" />
      <div className="flex items-center mb-2">
        <img src="src/assets/Star 1.png" alt="Star" className="w-[14px]" />
        <span>{rating}</span>
        <span className="text-light-gray">({reviewCount})•</span>
        <span className="text-light-gray">{country}</span>
      </div>
      <p className="mb-2 overflow-hidden text-ellipsis">{title}</p>
      <p>
        <span className="font-bold mt-auto">From {price}</span>/ person
      </p>
    </div>
  );
}
