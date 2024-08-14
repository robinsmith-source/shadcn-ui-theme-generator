import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export const SelectionContext = createContext<{
  selection: {
    hue: number;
    saturation: number;
    lightness: number;
    config: {
      radius: number;
    };
  };
  setSelection: Dispatch<
    SetStateAction<{
      hue: number;
      saturation: number;
      lightness: number;
      config: {
        radius: number;
      };
    }>
  >;
}>({
  selection: {
    hue: 0,
    saturation: 50,
    lightness: 50,
    config: {
      radius: 0,
    },
  },
  setSelection: () => Object,
});

export const useSelectionContext = () => useContext(SelectionContext);
