import { useStyle } from 'contexts/style';
import { useEffect } from 'react';

export function useBindColor() {
  const { color, colors } = useStyle();
  
  useEffect(() => {
    const body = document.querySelector('body');
    
    if (!body) {
      return;
    }
    
    body.classList.remove(...colors);
    body.classList.add(color);
  }, [color]);
}