export default function Modal({ children }: { children: React.ReactNode }) {
  return <div className="fixed top-1/2 left-0 right-0 bg-navy-semidark min-h-[266px] -translate-y-1/2 flex justify-center">{children}</div>;
}
