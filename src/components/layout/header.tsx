import { ModeToggle } from '@/components/misc/mode-toggle';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 flex h-16 items-center gap-16 border-b-2 bg-background px-4 shadow-sm lg:px-6'>
      <a href={'/'}>
        <span className='text-xl font-black tracking-tight'>
          Shadcn UI Theme Generator
        </span>
      </a>
      <div className='ml-auto flex items-center justify-center gap-2'>
        <ModeToggle />
      </div>
    </header>
  );
}
