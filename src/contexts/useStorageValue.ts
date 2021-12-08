import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export function useStorageValue<T extends {}>(key: string, initialValue: () => T): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const storageValue = localStorage.getItem(key);
    return storageValue ? JSON.parse(storageValue) : initialValue();
  });
  
  const updateValue = useCallback<Dispatch<SetStateAction<T>>>((nextValue) => {
    setValue(prevValue => {
      //@ts-ignore
      const next = typeof nextValue === 'function' ? nextValue(prevValue) : nextValue;
      
      localStorage.setItem(key, JSON.stringify(next));
      
      return next;
    });
  }, [])
  
  return [value, updateValue];
}