import { useRouter } from 'next/navigation';
import type { SocialButtonProps } from './interfaces';

function SocialButtonComponent({ url, icon, title }: SocialButtonProps) {
  const router = useRouter();

  function handleClick() {
    router.push(url);
  }

  return (
    <button
      onClick={handleClick}
      className='flex w-210px items-center justify-center gap-2 rounded-md border border-gray-100 py-3 text-gray-100 [&>svg]:fill-gray-100'
      role='button'
      aria-label={`Navigate to ${title}`}
    >
      {icon}
      <span className='text-base text-gray-100'>{title}</span>
    </button>
  );
}

export default SocialButtonComponent;
