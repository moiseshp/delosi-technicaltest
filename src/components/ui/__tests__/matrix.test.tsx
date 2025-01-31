import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MatrixGrid, MatrixLabel } from '@/components/ui/matrix';

describe('MatrixGrid', () => {
  it('render component', () => {
    const data = [
      [1, 2],
      [3, 4],
    ];
    render(<MatrixGrid data={data} />);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(2);
    expect(screen.getAllByRole('cell')).toHaveLength(4);
    expect(screen.getByText(1)).toBeInTheDocument();
    expect(screen.getByText(2)).toBeInTheDocument();
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getByText(4)).toBeInTheDocument();
  });

  it('render empty icon when data grid is null', () => {
    render(<MatrixGrid data={null} />);

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    expect(screen.getByTitle(/empty icon by matrix grid/i)).toBeInTheDocument();
  });
});

describe('MatrixLabel', () => {
  it('render component', () => {
    const data = [
      [1, 2],
      [3, 4],
    ];
    render(<MatrixLabel label="label text" data={data} />);

    expect(screen.getByText(/label text/i)).toBeInTheDocument();
    expect(screen.getByText('[[1,2],[3,4]]')).toBeInTheDocument();
  });
});
