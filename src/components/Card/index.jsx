import React from "react";

const Card = ({ image, title, artist }) => {
  return (
    <div className="flex p-6 items-stretch mt-14">
      <div className="p-4 w-52 rounded-sm shadow-lg bg-white transform hover:scale-105 transition duration-500 flex flex-col items-center">
        <img
          className="rounded-full w-2/4 absolute -m-16 -ml-20"
          src={image}
          alt="Logo"
        />
        <p className="text-center mt-14"> {title}</p>
        <p className="text-center text-gray-500">{artist}</p>
      </div>
    </div>
  );
};

export default Card;
