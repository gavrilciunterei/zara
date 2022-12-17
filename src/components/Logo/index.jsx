import { useNavigate } from "react-router-dom";
import { PulsatingCircle } from "../PulsatingCircle";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="flex flex-row  content-end justify-between items-end">
        <button onClick={() => handleClick()} className="">
          <p className="text-blue-500 font-bold text-2xl">Podcaster</p>
        </button>
        <PulsatingCircle />
      </div>
      <hr className="h-px border-0 dark:bg-gray-200 mt-2 mb-4" />
    </div>
  );
};

export default Logo;
