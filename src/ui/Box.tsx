type AppProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Box({ children, className = '' }: AppProps) {
  return <div className={`p-6 bg-navy-semidark rounded-2xl shadow-inner shadow-navy-darker ${className}`}>{children}</div>;
}
