interface GridDisplayLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  data: number[][];
}

export const GridDisplayLabel: React.FC<GridDisplayLabelProps> = ({
  label,
  data,
  className,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      <p className="md:text-lg font-bold mb-6" aria-label="Input data">
        {label}
        <code className="ml-3" aria-describedby="input-description">
          {JSON.stringify(data)}
        </code>
      </p>
      <p id="input-description" className="sr-only">
        A matrix of numbers from 1 to 9.
      </p>
    </div>
  );
};

export const GridDisplay = ({ data }: { data: number[][] }) => {
  return (
    <div role="table" aria-label="Data grid">
      {data.map((row, rowIndex) => (
        <div key={rowIndex} role="row" className="flex">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              role="cell"
              data-testid={`cell-${rowIndex}-${cellIndex}`}
              className="flex items-center justify-center border w-20 h-20 -ml-[1px] -mt-[1px]"
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
