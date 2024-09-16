import { ModeToggle } from '@/components/misc/mode-toggle';
import { buttonVariants } from '@/lib/buttonVariants';
import { Icons } from '../misc/icons';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <a href={'/'}>
          <span className='text-xl font-black tracking-tight'>
            Shadcn UI Theme Generator
          </span>
        </a>
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <nav className='flex items-center gap-2'>
            <a
              href={
                'https://github.com/robinsmith-source/shadcn-ui-theme-generator'
              }
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'h-8 w-8 px-0'
                )}
              >
                <Icons.gitHub className='size-5' />
                <span className='sr-only'>GitHub</span>
              </div>
            </a>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
