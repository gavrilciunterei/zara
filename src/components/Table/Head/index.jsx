const TableHead = ({ titles }) => {
  return (
    <thead>
      <tr>
        {titles.map((title, index) => {
          return (
            <th key={index} className="text-start py-4">
              {title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
