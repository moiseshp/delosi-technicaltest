import { ArrowCounterClockwiseIcon } from '@/components/icons/arrow-counter-clockwise';
import { MatrixGrid } from '@/components/ui/matrix-grid';

export default function Home() {
  return (
    <div className="flex-grow md:grid md:grid-cols-2 md:grid-rows-2">
      <div className="row-span-2 flex items-center justify-center border-r">
        <section className="max-w-lg">
          <ArrowCounterClockwiseIcon className="w-16 h-16 mb-4" />
          <h1 className="font-bold text-3xl mb-4">Rotar Matriz</h1>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum autem
            laudantium sint quibusdam quasi aliquam nulla voluptatem obcaecati.
          </p>
        </section>
      </div>
      <MatrixGrid
        className="border-b"
        text="Input"
        items={[
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ]}
      />
      <MatrixGrid
        text="Output"
        items={[
          [3, 6, 9],
          [2, 5, 8],
          [1, 4, 7],
        ]}
      />
    </div>
  );
}
