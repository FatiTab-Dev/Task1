export function Table({
  columns,
  data,
  striped = false,
  bordered = false,
  hover = false,
}) {
  return (
    <div className="overflow-x-auto">
      <table
        className={`min-w-full border-collapse ${striped ? "table-striped" : ""} ${bordered ? "table-bordered" : ""} ${hover ? "table-hover" : ""}`}
      >
        <thead>
          <tr className="bg-light">
            {columns.map((column, index) => (
              <th key={index} className="border px-4 py-2">
                {typeof column === "object" ? column.title : column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={striped && rowIndex % 2 === 1 ? "table-striped" : ""}
            >
              {columns.map((column, colIndex) => {
                const key =
                  typeof column === "object"
                    ? column.key
                    : Object.keys(row)[colIndex];
                return (
                  <td key={colIndex} className="border px-4 py-2">
                    {row[key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
