import { useStorageValue } from 'contexts/useStorageValue';
import React, { createContext, useContext, Context, Consumer, ReactNode, useMemo, useCallback } from 'react';

export type Color = 'light' | 'dark';

export interface StyleProviderProps {
  children: ReactNode;
  defaultColor?: Color;
}

export interface Style {
  colors: Color[];
  color: Color;
  updateColor: (nextColor: Color) => void;
}

const COLORS: Color[] = ['light', 'dark'];

interface StorageValue {
  color: Color;
}

// @ts-ignore
const StyleContext: Context<Style> = createContext<Style>();

export function StyleProvider({ children, defaultColor = document.querySelector('body')!.classList.contains('light') ? 'light' : 'dark' }: StyleProviderProps) {
  const [storageValue, updateStorageValue] = useStorageValue<StorageValue>(
    '__terra_style__',
    () => ({color: defaultColor}),
  );
  
  const updateColor = useCallback((nextColor: Color) => {
    return updateStorageValue((prev) => ({
      ...prev,
      color: nextColor,
    }))
  }, [])
  
  const state = useMemo<Style>(() => ({
    colors: COLORS,
    color: storageValue.color,
    updateColor,
  }), [storageValue.color, updateColor]);
  
  return (
    <StyleContext.Provider value={state}>
      {children}
    </StyleContext.Provider>
  );
}

export function useStyle(): Style {
  return useContext(StyleContext);
}

export const StyleConsumer: Consumer<Style> = StyleContext.Consumer;