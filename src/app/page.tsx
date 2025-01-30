import * as React from 'react';
import { ArrowCounterClockwiseIcon } from '@/components/icons/arrow-counter-clockwise';
import { AppCredits } from '@/components/ui/app-credits';
import { PageClient } from '@/app/page.client';

export default function Home() {
  return (
    <React.Fragment>
      <main className="lg:flex-grow lg:grid lg:grid-cols-2 lg:grid-rows-2">
        <div className="lg:flex lg:justify-center lg:items-end">
          <section className="lg:max-w-lg flex flex-col gap-6 p-6 lg:p-0">
            <header className="flex flex-col gap-2 lg:gap-4">
              <ArrowCounterClockwiseIcon className="w-16 h-16" />
              <h1 className="font-bold text-3xl">Rotar Matriz</h1>
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
        <AppCredits />
      </footer>
    </React.Fragment>
  );
}
