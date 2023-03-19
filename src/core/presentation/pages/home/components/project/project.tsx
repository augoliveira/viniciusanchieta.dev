import { useRouter } from 'next/navigation';
import { ClipIcon, GitHubIcon } from '~/core/presentation/common/icons';
import type { ProjectProps } from './interfaces';

function ProjectComponent({
  description,
  name,
  links: { github, website }
}: ProjectProps) {
  const router = useRouter();

  function handleSeeNow(): void {
    router.push(website);
  }
  function handleGithub(): void {
    router.push(github);
  }

  return (
    <div
      className='flex w-510px flex-col justify-between gap-7 text-white'
      role='region'
      aria-label='Project'
    >
      <p className='text-2xl'>{name}</p>
      <p className='h-60px text-sm text-gray-100'>{description}</p>
      <div className='flex w-214px items-center gap-7'>
        <button
          onClick={handleSeeNow}
          className='mx-auto rounded-md bg-gradient-to-tr from-purple-100 via-blue-100 to-pink-100 p-[0.18rem]'
          role='button'
          aria-label={`Navigate to ${name} website`}
        >
          <div className='flex items-center gap-2 rounded-md bg-main py-4 px-6 text-white [&>svg]:fill-white'>
            <ClipIcon />
            <span className='text-base'>See now</span>
          </div>
        </button>
        <button
          onClick={handleGithub}
          className='mx-auto h-30px w-30px [&>svg]:fill-white'
          role='button'
          aria-label={`Navigate to ${name} GitHub repository`}
        >
          <GitHubIcon />
        </button>
      </div>
    </div>
  );
}

export default ProjectComponent;
