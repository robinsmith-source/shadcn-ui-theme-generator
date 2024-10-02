import { GitHubLogoIcon } from '@radix-ui/react-icons';

export default function Footer() {
  const commit = getLatestCommit();

  return (
    <footer className='flex w-full flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6'>
      <a
        className='ml-auto inline-flex items-center gap-2'
        href='https://github.com/robinsmith-source/shadcn-ui-theme-generator'
        rel='noreferrer'
        target='_blank'
      >
        <GitHubLogoIcon className='h-6 w-6' />
        <span>
          <span>robinsmith-source</span>
          {commit && (
            <span className='text-zinc-350 hidden dark:text-[#898992] sm:inline'>
              #{commit}
            </span>
          )}
        </span>
      </a>
    </footer>
  );
}

function getLatestCommit() {
  const sha = import.meta.env.VERCEL_GIT_COMMIT_SHA;
  return sha ? sha.slice(0, 7) : undefined;
}
