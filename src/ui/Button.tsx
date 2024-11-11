type AppProps = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'Primary' | 'Secondary' | 'Tertiary';
  color?: 'Yellow' | 'Blue' | 'Silver';
  className?: string;
  disabled?: boolean;
  label?: string;
};

export default function Button({ children, onClick, type = 'Primary', color = 'Yellow', className = '', disabled = false, label }: AppProps) {
  let classes = '';

  if (type === 'Primary') classes += 'h-14 sm:h-[4.1875rem] px-4 pb-2 w-full text-sm shadow-inner rounded-lg sm:text-md ';
  if (type === 'Secondary') classes += 'h-[3.25rem] px-4 text-sm shadow-inner-sm rounded-md ';
  if (type === 'Tertiary') classes += 'text-sm shadow-inner-sm rounded-md ';
  if (color === 'Yellow') classes += 'shadow-yellow-dark bg-yellow-light hover:bg-yellow-hover ';
  if (color === 'Blue') classes += 'shadow-blue-dark bg-blue-light hover:bg-blue-hover ';
  if (color === 'Silver') classes += 'shadow-silver-darker bg-silver-dark hover:bg-silver-light ';

  return (
    <button
      className={`${className} ${classes} uppercase font-bold text-navy-dark transition duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-light  `}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {children}
    </button>
  );
}
