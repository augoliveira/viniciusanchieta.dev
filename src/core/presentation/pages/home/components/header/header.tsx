import { VAIcon } from '~/core/presentation/common/icons';
import type { HeaderProps } from './interfaces';

function HeaderComponent({ items }: HeaderProps) {
  return (
    <header
      className='flex h-112px items-center justify-between bg-gradient-to-b from-main via-main to-transparent text-white'
      role='region'
      aria-label='Header'
    >
      <div className='[&>svg]:fill-white'>
        <VAIcon />
      </div>
      <div>
        <ul className='flex gap-8'>
          {items.map((item: { title: string; onClick: () => void }) => (
            <li key={item.title}>
              <button
                className='text-lg font-light'
                onClick={item.onClick}
                role='button'
                aria-label={`Navigate to ${item.title} section`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default HeaderComponent;
