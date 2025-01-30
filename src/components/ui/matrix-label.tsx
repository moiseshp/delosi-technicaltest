interface MatrixLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  data: number[][];
}

export const MatrixLabel: React.FC<MatrixLabelProps> = ({
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
