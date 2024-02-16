import {SelectionContext} from '@/lib/selectionContext';
import {ReactNode, useState} from 'react';


export const SelectionProvider = ({children}: { children: ReactNode }) => {
    const [selection, setSelection] = useState({
        hue: 0,
        saturation: 50,
        lightness: 50,
        config: {
            radius: 0,
        },
    });

    return (
        <SelectionContext.Provider value={{selection, setSelection}}>
            {children}
        </SelectionContext.Provider>
    );
};

