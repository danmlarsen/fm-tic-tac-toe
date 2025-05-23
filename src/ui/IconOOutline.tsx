type AppProps = {
  className?: string;
};

export default function IconOOutline({ className = 'fill-yellow-light size-10' }: AppProps) {
  return (
    <svg className={className} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" role="img">
      <title>O Icon</title>
      <path
        d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
