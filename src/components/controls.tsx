import CopyButton from '@/components/misc/copy-button';
import GeneratorButton from '@/components/misc/generator-button';
import { ThemeProvider } from '@/components/layout/theme-provider';

export default function Controls() {
  return (
    <ThemeProvider>
      <section className='w-full sm:w-96'>
        <div className='flex flex-col items-center justify-center gap-8'>
          <GeneratorButton />
          <CopyButton />
        </div>
      </section>
    </ThemeProvider>
  );
}