import * as React from 'react';
import { ArrowCounterClockwiseIcon } from '@/components/icons/arrow-counter-clockwise';
import { PageClient } from '@/app/page.client';

export default function Home() {
  return (
    <React.Fragment>
      <main className="lg:flex-grow lg:grid lg:grid-cols-2 lg:grid-rows-2">
        <div className="lg:flex lg:justify-center lg:items-end">
          <section className="lg:max-w-lg flex flex-col gap-6 p-6 lg:p-0">
            <header className="flex flex-col gap-2 lg:gap-4">
              <ArrowCounterClockwiseIcon
                className="w-16 h-16"
                title="rotate icon"
              />
              <h1 className="font-bold text-3xl lg:text-5xl">Rotar Matriz</h1>
            </header>
            <p className="text-lg">
              Ingresa, en el campo de entrada, un arreglo de arreglos de números
              que conformen una matriz de <strong>NxN</strong>.
            </p>
          </section>
        </div>
        <PageClient />
      </main>
      <footer className="py-4 px-6 text-xs lg:absolute lg:bottom-0 lg:left-0">
        2025 &copy; Creado por
        <a
          href="https://moiseshp.dev"
          target="_blank"
          title="Ir a página de moiseshp"
          className="ml-1"
        >
          <strong>moiseshp</strong>
        </a>
      </footer>
    </React.Fragment>
  );
}
