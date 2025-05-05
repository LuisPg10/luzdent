export interface IconProps {
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string | number;
  strokeLinecap?: 'butt' | 'round' | 'square';
  strokeLinejoin?: 'round' | 'bevel' | 'miter' | 'inherit';
  className?: string;
  children: React.ReactNode;
}

export const Icon = ({
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = '2',
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  className = 'h-6 w-6',
  children,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      className={className}
    >
      {children}
    </svg>
  );
};
