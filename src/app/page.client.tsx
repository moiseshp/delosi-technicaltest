'use client';
import * as React from 'react';
import { MatrixBox, MatrixGrid, MatrixLabel } from '@/components/ui/matrix';
import { useInputMatrix } from '@/hooks/use-input-matrix';
import { TextField } from '@/components/ui/text-field';

export const PageClient = () => {
  const { value, handleValue, inputMatrix, outputMatrix, hasError } =
    useInputMatrix();

  return (
    <React.Fragment>
      <div className="lg:col-start-1 lg:row-start-2 lg:flex lg:justify-center border-b lg:border-b-0">
        <section className="lg:max-w-lg p-6 pt-0 lg:p-0 lg:pt-6 flex flex-col gap-2 flex-1">
          <TextField
            label="Campo de entrada"
            helperText={
              <>
                Por ejemplo:
                <span className="ml-1 tracking-[0.15em]">[[1,2],[3,4]]</span>
              </>
            }
            errorText="(*) Revisa que el valor ingresado sea un arreglo válido de tipo NxN"
            placeholder="Ingresa aquí un arreglo..."
            className="h-12 font-semibold tracking-widest"
            hasError={hasError}
            value={value}
            onChange={handleValue}
          />
        </section>
      </div>
      <MatrixBox className="lg:border-l border-b">
        <MatrixLabel
          label="Input:"
          data={inputMatrix}
          className="lg:absolute lg:left-6 lg:top-6"
        />
        <MatrixGrid data={inputMatrix} />
      </MatrixBox>
      <MatrixBox className="lg:border-l border-b lg:border-b-0">
        <MatrixLabel
          label="Output:"
          data={outputMatrix}
          className="lg:absolute lg:left-6 lg:top-6"
        />
        <MatrixGrid data={outputMatrix} />
      </MatrixBox>
    </React.Fragment>
  );
};
