import React from 'react';
import { render } from 'react-dom';
import { StyleProvider } from './contexts/style';
import { useBindColor } from './contexts/useBindColor';
import { ColorSwitch } from './primitives/ColorSwitch';
import { StyleComponent } from './primitives/StyleComponent';
import { StyleOnlyComponent } from './primitives/StyleOnlyComponent';
import './style.css';

function App() {
  useBindColor();
  
  return (
    <div>
      <header style={{marginBottom: 20}}>
        <ColorSwitch/>
      </header>
      <main>
        <StyleComponent title="Title" style={{marginBottom: 10}}>
          <p>Content</p>
        </StyleComponent>
        <StyleOnlyComponent>
          Content
        </StyleOnlyComponent>
      </main>
    </div>
  );
}

render(
  <StyleProvider>
    <App />
  </StyleProvider>,
  document.querySelector('#app')
);
