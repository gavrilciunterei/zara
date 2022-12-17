import React from "react";
import { useNavigate } from "react-router-dom";

const TableRow = ({
  index,
  trackName,
  date,
  duration,
  podcastId,
  episodeId,
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/podcast/${podcastId}/episode/${episodeId}`);
  };

  return (
    <tr
      className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} border-b`}
      onClick={handleOnClick}
    >
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
