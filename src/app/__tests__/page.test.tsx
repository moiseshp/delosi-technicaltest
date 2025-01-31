import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('Page (server component)', () => {
  it('render page', async () => {
    render(Page());

    expect(screen.getByTitle(/rotate icon/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Rotar Matriz', level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/ingresa, en el campo de entrada, un arreglo/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/2025 © creado por/i)).toBeInTheDocument();
    expect(screen.getByText(/moiseshp/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/campo de entrada/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/ingresa aquí un arreglo/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/input/i)).toBeInTheDocument();
    expect(screen.getByText(/output/i)).toBeInTheDocument();
    expect(screen.getAllByTitle(/empty matrix grid/i)).toHaveLength(2);
  });
});
