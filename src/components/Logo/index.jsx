import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={() => handleClick()}>
        <p className="text-blue-500 font-bold">Podcaster</p>
      </button>
      <hr className="h-px border-0 dark:bg-gray-200 mt-2 mb-4" />
    </div>
  );
};

export default Logo;
