import styled from 'styled-components';
import React from 'react';
import { useStyle } from '../contexts/style';

function Component({className}) {
  const {color, updateColor} = useStyle();
  
  return (
    <button className={className} onClick={() => updateColor(color === 'light' ? 'dark' : 'light')}>
      {color}
    </button>
  )
}

export const ColorSwitch  = styled(Component)`
  border: none;
`;