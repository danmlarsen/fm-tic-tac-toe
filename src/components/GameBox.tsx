export enum GameBoxState {
  Empty,
  X,
  O,
}

type AppProps = {
  state?: GameBoxState;
  onClick: (event: React.MouseEvent) => void;
  fill: boolean;
};

export default function GameBox({ state = GameBoxState.Empty, onClick, fill }: AppProps) {
  let fillBg = `bg-navy-semidark shadow-navy-darker`;
  if (fill) fillBg = state === GameBoxState.X ? 'bg-blue-light shadow-blue-dark' : 'bg-yellow-light shadow-yellow-dark';

  return (
    <button className={`size-24 rounded-2xl shadow-inner grid place-items-center ${fillBg}`} onClick={onClick}>
      {state != GameBoxState.Empty && (
        <>
          {state === GameBoxState.X && (
            <svg className={`size-10 ${fill ? 'fill-navy-dark' : 'fill-blue-light'}`} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                fillRule="evenodd"
              />
            </svg>
          )}
          {state === GameBoxState.O && (
            <svg className={`size-10 ${fill ? 'fill-navy-dark' : 'fill-yellow-light'}`} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" />
            </svg>
          )}
        </>
      )}
    </button>
  );
}
