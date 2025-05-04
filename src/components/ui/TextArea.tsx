interface TextAreaProps {
  id?: string;
  label?: string;
  placeholder?: string;
}

export const TextArea = ({ id, label, placeholder }: TextAreaProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <textarea
        id={id}
        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex min-h-[100px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        placeholder={placeholder}
      />
    </div>
  );
};
