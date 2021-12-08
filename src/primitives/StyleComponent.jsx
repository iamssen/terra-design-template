import styled from 'styled-components';
import React from 'react';

// HTML을 포함하는 Component 의 경우
// 아래와 같이 변수들을 받아서 (title, children)
// 표현하고 싶은 HTML 에 배치합니다
function Component({title, children, ...props}) {
  return (
    <section {...props}>
      <h1>{title}</h1>
      <div>{children}</div>
    </section>
  )
}

// 그리고, 위에서 선언된 Component 를 아래와 같이 styled(Component) 로 만들고
// 내부에 CSS 를 선언합니다.
export const StyleComponent = styled(Component)`
  border: 1px solid var(--text-color);
  padding: var(--layout-padding);
`