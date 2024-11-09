import MarkButton from './MarkButton';

export default function MarkSelect() {
  return (
    <div className="bg-navy-semidark p-6 rounded-2xl space-y-4 shadow-inner shadow-navy-darker">
      <h1 className="uppercase">Pick player 1's mark</h1>
      <div className="grid grid-cols-2 bg-navy-dark p-2 rounded-xl">
        <MarkButton mark="X" />
        <MarkButton mark="O" />
      </div>
      <p className="uppercase">Remember: X Goes first</p>
    </div>
  );
}
