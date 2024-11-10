export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-10"></div>
      <div className="fixed top-1/2 left-0 right-0 text-silver-dark bg-navy-semidark min-h-[266px] -translate-y-1/2 flex justify-center z-20">{children}</div>
    </>
  );
}
