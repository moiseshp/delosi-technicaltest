import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField } from '@/components/ui/text-field';

describe('TextField', () => {
  it('render component', () => {
    render(
      <TextField
        id="input-text"
        label="Label text"
        helperText="Helper text"
        placeholder="type something"
        errorText="A error text"
        hasError
      />,
    );

    expect(screen.getByPlaceholderText(/type something/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/label text/i)).toBeInTheDocument();
    expect(screen.getByText(/helper text/i)).toBeInTheDocument();
    expect(screen.getByText(/a error text/i)).toBeInTheDocument();
  });

  it('should update input value when user types', async () => {
    render(<TextField placeholder="type something" />);

    const input = screen.getByPlaceholderText(/type something/i);
    await userEvent.type(input, 'my example text');

    expect(input).toHaveValue('my example text');
  });
});
