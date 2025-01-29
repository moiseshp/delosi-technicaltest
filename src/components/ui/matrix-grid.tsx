import { cn } from '@/lib/utils';

interface MatrixGridProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  items?: number[][] | null;
}

export const MatrixGrid: React.FC<MatrixGridProps> = ({
  text,
  items = [],
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center relative p-6',
        className,
      )}
    >
      <div className="md:absolute md:left-6 md:top-6 flex items-center gap-2 mb-6 md:mb-0">
        {text && <p className="text-lg font-bold">{text}:</p>}
        {!!items?.length && (
          <pre>
            <code>{JSON.stringify(items)}</code>
          </pre>
        )}
      </div>
      <figure>
        {items?.map((row, index) => (
          <div key={index} className="flex">
            {row.map((value) => (
              <div
                key={value}
                className="flex items-center justify-center border w-20 h-20 -ml-[1px] -mt-[1px]"
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </figure>
    </div>
  );
};
