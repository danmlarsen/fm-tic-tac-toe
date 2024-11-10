export enum ButtonType {
  Primary,
  Secondary,
}

export enum ButtonColor {
  yellow,
  blue,
  silver,
}

type AppProps = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType;
  color?: ButtonColor;
  disabled?: boolean;
};

export default function Button({ children, onClick, type = ButtonType.Primary, color = ButtonColor.yellow, disabled = false }: AppProps) {
  let classes = '';

  if (type === ButtonType.Primary) classes += 'pb-6 w-full text-md shadow-inner ';
  if (type === ButtonType.Secondary) classes += 'px-4 pb-5 text-sm shadow-inner-sm ';
  if (color === ButtonColor.yellow) classes += 'shadow-yellow-dark bg-yellow-light hover:bg-yellow-hover ';
  if (color === ButtonColor.blue) classes += 'shadow-blue-dark bg-blue-light hover:bg-blue-hover ';
  if (color === ButtonColor.silver) classes += 'shadow-silver-darker bg-silver-dark hover:bg-silver-light ';

  return (
    <button className={`${classes} uppercase rounded-2xl font-bold text-navy-dark pt-4 transition duration-300 `} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
