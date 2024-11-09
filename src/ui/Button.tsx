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

  if (type === ButtonType.Primary) classes += 'pb-6 w-full text-md ';
  if (type === ButtonType.Secondary) classes += 'px-4 pb-5 text-sm ';
  if (color === ButtonColor.yellow) classes += 'shadow-yellow-dark bg-yellow-light ';
  if (color === ButtonColor.blue) classes += 'shadow-blue-dark bg-blue-light ';
  if (color === ButtonColor.silver) classes += 'shadow-silver-darker bg-silver-dark';

  return (
    <button className={`${classes} uppercase shadow-inner rounded-2xl font-bold text-navy-dark pt-4 `} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
