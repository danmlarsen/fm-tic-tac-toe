import IconX from '../assets/icon-x.svg';
import IconO from '../assets/icon-o.svg';

export enum GameBoxState {
  Empty,
  X,
  O,
}

type AppProps = {
  state?: GameBoxState;
  onClick: (event: React.MouseEvent) => void;
};

export default function GameBox({ state = GameBoxState.Empty, onClick }: AppProps) {
  return (
    <button className="size-24 bg-navy-semidark rounded-2xl shadow-inner shadow-navy-darker grid place-items-center" onClick={onClick}>
      {state != GameBoxState.Empty && (
        <img className="size-10" src={state === GameBoxState.X ? IconX : IconO} alt={`${state === GameBoxState.X ? 'X' : 'O'} icon`} />
      )}
    </button>
  );
}
