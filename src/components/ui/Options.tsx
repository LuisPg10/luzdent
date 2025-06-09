import { SelectHTMLAttributes } from 'react';

type MultiOptionsProps = {
  label?: string;
  error?: string;
  defaultOption?: string;
  children?: React.ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Options = ({
  id,
  label,
  error,
  name,
  defaultOption,
  children,
  ...inputProps
}: MultiOptionsProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <select
        {...inputProps}
        id={id}
        name={name}
        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        {defaultOption && <option value="">{defaultOption}</option>}
        {children}
      </select>

      {error && (
        <span className="mt-2 ml-2 inline-block text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};
