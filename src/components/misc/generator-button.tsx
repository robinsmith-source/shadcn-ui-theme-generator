import { createThemeConfig } from '@/utils/generator';
import {
  useSetThemeConfig,
  useSetThemeStack,
  useThemeStore,
} from '@/stores/theme-store';
import { Button } from '@/components/ui/button';
import { Dices, Undo2 } from 'lucide-react';

export default function GeneratorButton() {
  const themeStack = useThemeStore((state) => state.themeStack);
  const setTheme = useSetThemeConfig();
  const setThemeStack = useSetThemeStack();

  const handleSaveClick = () => setTheme(createThemeConfig());

  const handleUndoClick = () => {
    const previousTheme = themeStack.pop();
    if (previousTheme) {
      setTheme(previousTheme);
      setThemeStack([...themeStack]);
    }
  };

  return (
    <div className='ml-auto flex items-center gap-4'>
      {themeStack.length > 0 && (
        <Button onClick={handleUndoClick}>
          <Undo2 className='size-4' />
          <span className='ml-2'>Undo</span>
        </Button>
      )}
      <Button onClick={handleSaveClick} size='icon'>
        <Dices />
      </Button>
    </div>
  );
}
