import TableHead from "../../../../components/Table/Head";
import TableRow from "../../../../components/Table/Row";
import { formatDate, formatMillis } from "../../../../utils/date";

const TableComponent = ({ episodes }) => {
  return (
    <div className="bg-white shadow-lg p-4 mt-4">
      <table>
        <TableHead titles={["Title", "Date", "Duration"]} />
        <tbody>
          {episodes?.map((episode, index) => {
            const duration = formatMillis(episode.trackTimeMillis);
            const date = formatDate(episode.releaseDate);

            return (
              <TableRow
                date={date}
                duration={duration}
                index={index}
                trackName={episode.trackName}
                key={episode.trackId}
                episodeId={episode.trackId}
                podcastId={episode.collectionId}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
