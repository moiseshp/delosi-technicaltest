export const MatrixView = ({ data }: { data: number[][] }) => {
  return (
    <div role="table" aria-label="Data grid">
      {data.map((row, rowIndex) => (
        <div key={rowIndex} role="row" className="flex">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              role="cell"
              data-testid={`cell-${rowIndex}-${cellIndex}`}
              className="flex items-center justify-center border w-14 h-14 lg:w-16 lg:h-16 -ml-[1px] -mt-[1px]"
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
