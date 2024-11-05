import Logo from '../ui/Logo';
import RestartButton from './RestartButton';
import TurnDisplay from './TurnDisplay';

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <TurnDisplay isX={true} />
      <RestartButton />
    </header>
  );
}
