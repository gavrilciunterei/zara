import TotalTab from "../../../../components/TotalTab";

const SearchBar = ({ total, handleOnSearch }) => {
  return (
    <div className="flex justify-end mr-5 items-center">
      <TotalTab text={total} />
      <input
        type="text"
        name="name"
        placeholder="Filter podcasts"
        className="p-3 border rounded-lg w-80"
        onChange={handleOnSearch}
      />
    </div>
  );
};

export default SearchBar;
