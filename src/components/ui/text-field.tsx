import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextFieldProps extends React.ComponentProps<'input'> {
  label?: string;
  hasError?: boolean;
  errorText?: string;
  helperText?: React.ReactNode;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      id,
      type = 'text',
      hasError = false,
      label,
      errorText,
      helperText,
      ...props
    },
    ref,
  ) => {
    return (
      <React.Fragment>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              'text-lg font-semibold block mb-2',
              hasError && 'text-red-500',
            )}
          >
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          data-testid={id}
          className={cn(
            'flex h-10 w-full rounded-md border-2 border-black px-3 py-2 text-base focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            hasError && 'border-red-500',
            className,
          )}
          ref={ref}
          {...props}
        />
        {helperText && (
          <div className="text-sm mt-4" data-testid="input-helper">
            {helperText}
          </div>
        )}
        {hasError && (
          <p className="text-sm text-red-500 mt-4" data-testid="input-error">
            {errorText}
          </p>
        )}
      </React.Fragment>
    );
  },
);

TextField.displayName = 'TextField';

export { TextField };
