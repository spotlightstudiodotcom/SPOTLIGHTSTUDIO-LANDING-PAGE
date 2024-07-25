import { FlipLink } from '../lib/Animation';
import { cn } from '../lib/utils';
type Props = {
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'button';
  text: string;
};
export const Button = ({ className, onClick, type, text }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn('font-Integral text-2xl text-white lg:text-4xl', className)}
      type={type}
    >
      <FlipLink className="text-2xlxl lg:text-7xl">{text}</FlipLink>
    </button>
  );
};
