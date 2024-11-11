import MarkButton from './MarkButton';

export default function MarkSelect() {
  return (
    <div className="bg-navy-semidark text-silver-dark p-6 pb-[1.875rem] rounded-lg shadow-inner shadow-navy-darker h-[12.8125rem] grid items-center">
      <div>
        <h1 className="uppercase text-sm font-bold mb-6">Pick Player 1's mark</h1>
        <div className="grid grid-cols-2 bg-navy-dark px-2 py-[0.5265rem] rounded-md mb-4">
          <MarkButton mark="X" />
          <MarkButton mark="O" />
        </div>
        <p className="uppercase">Remember: X Goes first</p>
      </div>
    </div>
  );
}
