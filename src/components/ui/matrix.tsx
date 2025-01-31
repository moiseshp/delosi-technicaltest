import { cn } from '@/lib/utils';
import { Matrix } from '@/types/matrix';
import { EmptyIcon } from '@/components/icons/empty';

interface MatrixLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  data: Matrix | null;
}

export const MatrixLabel: React.FC<MatrixLabelProps> = ({
  label,
  data,
  className,
  ...props
}) => {
  return (
    <h3
      className={cn('md:text-lg font-bold mb-6 tracking-widest', className)}
      {...props}
    >
      {label}: {JSON.stringify(data || [])}
    </h3>
  );
};

interface MatrixGridlProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Matrix | null;
}

export const MatrixGrid: React.FC<MatrixGridlProps> = ({ data, ...props }) => {
  if (!data) {
    return (
      <EmptyIcon
        title="empty matrix grid"
        className="w-44 h-44 fill-zinc-200"
      />
    );
  }

  return (
    <div role="table" {...props}>
      {data.map((row, rowIndex) => (
        <div key={rowIndex} role="row" className="flex">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              role="cell"
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
