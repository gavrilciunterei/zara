const EpisodeHeader = ({ total }) => {
  return (
    <div className="bg-white shadow-lg p-4">
      <p className="font-bold text-xl">Episodes: {total}</p>
    </div>
  );
};

export default EpisodeHeader;
