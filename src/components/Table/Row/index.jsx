import React from "react";

const TableRow = ({ index, trackName, date, duration }) => {
  return (
    <tr className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} border-b`}>
      <td className="cursor-pointer text-blue-500 flex mr-16 py-4 ">
        {trackName}
      </td>
      <td>
        <p className="mr-14">{date}</p>
      </td>
      <td>
        <p>{duration}</p>
      </td>
    </tr>
  );
};

export default TableRow;
