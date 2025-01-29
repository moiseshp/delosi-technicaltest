import { ArrowCounterClockwiseIcon } from '@/components/icons/arrow-counter-clockwise';
import { MatrixGrid } from '@/components/ui/matrix-grid';

export default function Home() {
  return (
    <div className="flex-grow md:grid md:grid-cols-2 md:grid-rows-2">
      <div className="md:row-span-2 md:flex md:items-center md:justify-center md:border-r border-b md:border-b-0 p-6">
        <section className="md:max-w-lg flex flex-col gap-6">
          <header className="flex flex-col gap-2 md:gap-4">
            <ArrowCounterClockwiseIcon className="w-16 h-16" />
            <h1 className="font-bold text-3xl">Rotar Matriz</h1>
          </header>
          <p className="text-lg">
            Ingresa, en el campo de entrada, un arreglo de arreglos de números
            que conformen una matriz de <strong>NxN</strong>.
          </p>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="input-matrix"
              id="matrix-label"
              className="font-semibold text-lg text-red-500"
            >
              Ingresa una matriz:
            </label>
            <input
              type="text"
              id="input-matrix"
              name="matrix"
              aria-labelledby="matrix-label"
              aria-describedby="matrix-help"
              className="w-full border border-black rounded-md px-4 text-2xl focus:border-none font-semibold tracking-widest h-14"
            />
            <p id="matrix-help">
              Por ejemplo:
              <span className="ml-1 tracking-[0.15em]">
                &quot;[[1,2],[3,4]]&quot;
              </span>
            </p>
            <p id="matrix-help" className="text-sm text-red-500 font-semibold">
              (*) El nombre de usuario debe tener entre 3 y 20 caracteres.
            </p>
          </div>
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
