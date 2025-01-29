import { ArrowCounterClockwiseIcon } from '@/components/icons/arrow-counter-clockwise';
import { MatrixGrid } from '@/components/ui/matrix-grid';

export default function Home() {
  return (
    <div className="flex-grow md:grid md:grid-cols-2 md:grid-rows-2">
      <div className="md:row-span-2 md:flex md:items-center md:justify-center md:border-r border-b md:border-b-0 p-6">
        <section className="md:max-w-lg">
          <header className="flex flex-col gap-2 md:gap-4 mb-4">
            <ArrowCounterClockwiseIcon className="w-16 h-16" />
            <h1 className="font-bold text-3xl">Rotar Matriz</h1>
          </header>
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
