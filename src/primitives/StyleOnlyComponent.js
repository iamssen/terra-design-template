import styled from 'styled-components';

// 확장자가 .js 라도 됩니다
// 위에서 import styled from 'styled-components' 로 styled 를 가져오고
// 아래와 같이 export const ComponentName = styled.tag`` 를 만들고, 그 안에 CSS를 선언합니다.
// public/styles/colors.css 또는 public/styles/layout.css 에 선언한 CSS Variables 를 var(--name) 으로 사용할 수 있습니다
export const StyleOnlyComponent = styled.div`
  border: 1px solid var(--text-color);
  padding: var(--layout-padding);
`

