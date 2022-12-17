import React from "react";

const LeftTab = ({ image, title, artist, description }) => {
  return (
    <>
      <div className="flex  justify-center">
        <img
          src={image}
          alt={title}
          className="w-40 h-40 shadow-md rounded-lg"
        />
      </div>
      <hr className="h-px border-0 dark:bg-gray-200 mt-2 mb-4" />
      <p className="font-bold">{title}</p>
      <p className="text-gray-500">{artist}</p>
      <hr className="h-px border-0 dark:bg-gray-200 mt-2 mb-4" />
      <p className="font-bold">Description:</p>
      <p className="text-gray-500">{description}</p>
    </>
  );
};

export default LeftTab;
