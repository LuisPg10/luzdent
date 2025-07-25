import { InputHTMLAttributes } from 'react';

type InputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  id,
  name,
  label,
  error,
  type,
  placeholder,
  required,
  ...inputProps
}: InputProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 ml-1 inline-block text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        id={id}
        {...inputProps}
        name={name}
        type={type}
        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        placeholder={placeholder}
      />

      {error && (
        <span className="mt-2 ml-2 inline-block text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};
