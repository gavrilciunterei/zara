import parse from "html-react-parser";

const EpisodeInfo = ({ title, description, url }) => {
  return (
    <div className="bg-white shadow-lg p-4 max-w-2xl">
      <p className="font-bold mb-4">{title}</p>
      <p className="font-light italic mb-10">{parse(description)}</p>
      <audio src={url} controls className="w-full" />
    </div>
  );
};
export default EpisodeInfo;
