# 시작하기

### Node.js 설치

<https://nodejs.org/ko/download/>

### 프로젝트 복사하기

Terminal 을 열고, 아래 명령어들을 입력

```sh
# anchor-template 이라는 디렉토리를 만들게 됨
npx copy-github-directory https://github.com/iamssen/terra-design-template anchor-template

# anchor-template 으로 이동 
cd anchor-template

# react 와 같은 라이브러리 들을 설치
npm install

# 명령어를 실행하면 서버가 실행되면서, 웹브라우저가 열림 (서버를 종료하려면 Terminal 에서 Ctrl + C)
npm run start
```

# 디렉토리

### `~/public`

이 안에 있는 파일들은 Web root 주소로 사용할 수 있게 됩니다. (예: `~/logo.png` 는 `http://localhost:3000/logo.png`)

### `~/public/styles`

- `~/public/styles/reset.css` CSS Reset 
- `~/public/styles/layout.css` Layout 관련 CSS Variables
- `~/public/styles/color.css` Color 관련 CSS Variables

### `~/src/primitives`

이 안에 Component 들을 만듭니다. 

### `~/src/index.jsx`

위에서 만들어진 Component 들을 이 아래 배치합니다.

### `~/src/contexts`

이건 React App 관련된 것들이니 보지 않아도 됩니다.