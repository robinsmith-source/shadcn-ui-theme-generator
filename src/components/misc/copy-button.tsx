import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useThemeConfig } from '@/stores/theme-store';
import { useCopyToClipboard } from 'usehooks-ts';
import { toPairs } from 'lodash';
import { ThemeConfig } from '@/types/theme-schema';
import { themeToStyles } from '@/lib/theme-to-styles';

export default function CopyButton() {
  const config = useThemeConfig();
  const cssCode = configToCss(config);

  const [copiedText, copyToClipboard] = useCopyToClipboard();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Copy code</Button>
      </DialogTrigger>
      <DialogContent className='max-h-[90vh] max-w-2xl outline-none'>
        <DialogHeader>
          <DialogTitle>Theme</DialogTitle>
          <DialogDescription>
            Copy and paste the following code into your CSS file.
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-2'>
          <Button
            size='sm'
            onClick={async () => {
              await copyToClipboard(cssCode);
            }}
            className='bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground'
          >
            {copiedText ? (
              <CheckIcon className='mr-2 h-4 w-4' />
            ) : (
              <CopyIcon className='mr-2 h-4 w-4' />
            )}
            Copy
          </Button>
          <ScrollArea className='h-[28rem] rounded-md border p-4'>
            <div className='rounded-md bg-muted p-2'>
              <pre className='text-sm'>
                <code>{cssCode}</code>
              </pre>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const configToCss = (config: ThemeConfig) => {
  const lightStyle = themeToStyles(config.light);
  const light = toPairs(lightStyle)
    .map(([key, value]) => `      ${key}: ${value};`)
    .join('\n');

  const space = `      `;

  const darkStyle = themeToStyles(config.dark);
  const dark = toPairs(darkStyle)
    .map(([key, value]) => `${space}${key}: ${value};`)
    .join('\n');

  return `@layer base {
    :root {
${light}
${space}--radius: 0.5rem;
    }
  
    .dark {
${dark}
    }
  }
  `;
};
