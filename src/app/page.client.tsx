'use client';
import { MatrixView } from '@/components/ui/matrix-view';
import { MatrixLabel } from '@/components/ui/matrix-label';
import * as React from 'react';
import { Input } from '@/components/ui/input';

export const PageClient = () => {
  return (
    <React.Fragment>
      <div className="lg:col-start-1 lg:row-start-2 lg:flex lg:justify-center border-b">
        <section className="lg:max-w-lg p-6 pt-0 lg:p-0 lg:pt-6 flex flex-col gap-2 flex-1">
          <label
            htmlFor="input-matrix"
            id="matrix-label"
            className="font-semibold text-lg text-red-500"
          >
            Campo de entrada:
          </label>
          <Input
            placeholder="Ingresa aquí un arreglo..."
            className="h-12 font-semibold tracking-widest"
          />
          <p id="matrix-help">
            Por ejemplo:
            <span className="ml-1 tracking-[0.15em]">[[1,2],[3,4]]</span>
          </p>
          <p id="matrix-help" className="text-sm text-red-500 font-semibold">
            (*) El nombre de usuario debe tener entre 3 y 20 caracteres.
          </p>
        </section>
      </div>
      <div className="lg:border-l border-b p-6 lg:flex lg:items-center lg:justify-center lg:relative">
        <MatrixLabel
          className="lg:absolute lg:left-6 lg:top-6"
          label="Input:"
          data={[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
          ]}
        />
        <MatrixView
          data={[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
          ]}
        />
      </div>
      <div className="lg:border-l border-b p-6 lg:flex lg:items-center lg:justify-center lg:relative">
        <MatrixLabel
          className="lg:absolute lg:left-6 lg:top-6"
          label="Output:"
          data={[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
          ]}
        />
        <MatrixView
          data={[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
          ]}
        />
      </div>
    </React.Fragment>
  );
};
