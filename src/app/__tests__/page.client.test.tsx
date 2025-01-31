import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { PageClient } from '@/app/page.client';

jest.mock('@/hooks/use-debounce', () => ({
  useDebounce: (value: string) => value,
}));

describe('PageClient (client component)', () => {
  it('render page', async () => {
    render(<PageClient />);

    const textField = screen.getByLabelText(/campo de entrada/i);
    expect(textField).toBeInTheDocument();
    expect(screen.getByText('Input: []')).toBeInTheDocument();
    expect(screen.getByText('Output: []')).toBeInTheDocument();

    expect(screen.queryByTestId('matrix-grid-input')).not.toBeInTheDocument();
    expect(screen.queryByTestId('matrix-grid-output')).not.toBeInTheDocument();

    expect(screen.getAllByTitle('empty matrix grid')).toHaveLength(2);
  });

  it('should update matrix grid when the user changes the input field', async () => {
    render(<PageClient />);

    const textField = screen.getByLabelText(/campo de entrada/i);
    expect(textField).toBeInTheDocument();
    expect(screen.getByText('Input: []')).toBeInTheDocument();
    expect(screen.getByText('Output: []')).toBeInTheDocument();

    fireEvent.change(textField, { target: { value: '[[1,2],[3,4]]' } });

    expect(textField).toHaveValue('[[1,2],[3,4]]');

    expect(screen.getByText('Input: [[1,2],[3,4]]')).toBeInTheDocument();
    expect(screen.getByText('Output: [[2,4],[1,3]]')).toBeInTheDocument();

    expect(screen.getByTestId('matrix-grid-input')).toHaveTextContent('1234');
    expect(screen.getByTestId('matrix-grid-output')).toHaveTextContent('2413');
  });

  it('should display an error message if the input is not a valid array', async () => {
    render(<PageClient />);

    const textField = screen.getByLabelText(/campo de entrada/i);
    expect(textField).toBeInTheDocument();

    fireEvent.change(textField, { target: { value: '[[1,2],&as[3,4]' } });

    const errorMessage = '(*) El valor ingresado no es un arreglo válido';

    expect(screen.getByText(errorMessage)).toBeInTheDocument();

    fireEvent.change(textField, { target: { value: '[[1,2],[3,4]]' } });

    expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
  });
});
