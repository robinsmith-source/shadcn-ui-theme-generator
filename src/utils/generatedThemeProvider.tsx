import {ReactNode,  useState} from 'react';
import {type CSSVariables} from "@/lib/types.ts";
import { GeneratedThemeContext } from '@/lib/generatedThemeContext.ts';

export const GeneratedThemeProvider = ({children}: { children: ReactNode }) => {
    const [theme, setTheme] = useState<{ dark: CSSVariables, light: CSSVariables } | null>(null);

    return (
        <GeneratedThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </GeneratedThemeContext.Provider>
    );
};

