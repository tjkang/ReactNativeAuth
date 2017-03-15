# Summary
Firebase 를 이용한 회원가입 및 로그인 및 Fireabse Database 를 이용한 간단 ListView 목록 보여주기
App Icon 및 Launch Screen 을 추가하여 처음 앱을 Start 시 리소스들을 로딩하거나 인증 처리를 하는동안 Launch Screen을 띄어주며 다 끝난후 인증 상태에 따라 로그인 화면 혹은 메인 화면을 보여주는 Sample 프로젝트

![](/resources/rnSample.gif)

## 1.시작
```
 $> react-native init ReactNativeAuth
 $> cd ReactNativeAuth
 $> git init
```
git remote 연결(<http://ourcstory.tistory.com/125>)

## 2.폴더 구조화(structuring)
## 3. Firebase Setup
  - [Firebase console] 프로젝트 생성
  - [Firebase Setup] 참조

[Firebase console]: https://console.firebase.google.com
[Firebase Setup]: https://firebase.googleblog.com/2016/01/the-beginners-guide-to-react-native-and_84.html?m=1


```
$> yarn add firebase
```

## 4. config 셋업
```
  $> yarn add react-native-config
```
  [setup] 참조하여 설치

[setup]: https://github.com/luggit/react-native-config#setup

  .env 작성 => firebase의 config를 설정

#### **.env**

```
FIREBASE_APIKEY=AIzaSyBwqy8QW072cEogBRllYdaZEkqxSLB27sU
FIREBASE_AUTHDOMAIN=reactnativeauth-99578.firebaseapp.com
FIREBASE_DB=https://reactnativeauth-99578.firebaseio.com
FIREBASE_STORAGE=reactnativeauth-99578.appspot.com
FIREBASE_SENDER=930725876253
```

<mark>단, .env 의 내용이 바뀔때 다시 빌드하여햐 적용이 된다!</mark>

 참조: [react-native-config 블로그]

 [react-native-config 블로그]: https://medium.com/differential/managing-configuration-in-react-native-cd2dfb5e6f7b#.dimua89xc


## 5. ES-Lint 설치 및 Setup
eslint plugin 설치

```
yarn add --dev eslint eslint-config-airbnb eslint-plugin-import
eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-native

```

#### .eslintrc
```
{
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
      "react",
      "react-native",
  ],
  "globals": {
      "fetch": true,
      "__DEV__": true,
      "window": true,
      "navigator": true,
  },
  "env": {
      "node": true,
      "jasmine": true,
      "jest": true,
  },
  "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        }
    },
  "rules": {
    "indent": [0, 2],
    "no-console": 0,
    "no-unused-vars": [1, {"vars": "local", "args": "none"}],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }], #allowAfterThis => for private members
    "no-use-before-define": 0, # 2 for disallow use of variables before they are defined,
    "react/forbid-prop-types": 0,
    "react/jsx-boolean-value": 1,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-curly-spacing": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-key": 1,
    "react/jsx-max-props-per-line": 1,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-quotes": 0,
    # "react/jsx-sort-prop-types": 1,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-danger": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-multi-comp": 1,
    "react/no-set-state": 1,
    "react/no-unknown-property": 1,
    "react/prefer-es6-class": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/require-extension": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "react/wrap-multilines": 1,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "id-length": 0,
    "import/newline-after-import": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "generator-star-spacing": 0,
    "require-yield": 0,
  }
}
```


 참조: [동영상]

 ![eslinter](/resources/eslinter.jpeg)

 [동영상]: https://www.youtube.com/playlist?list=PL9f8_QifuTL4CS8-OyA-4WADhkddOnRS4

#### 특정 룰에 대하여 disable 하기(한 파일 전체에 적용)
파일 제일 위쪽에 아래와 같이 설정

```
/* eslint-disable react/jsx-max-props-per-line */
```


## 6. Router 추가
[react-native-router-flux] 라이브러리 인스톨
[react-native-router-flux]: https://github.com/aksonov/react-native-router-flux


```
yarn add react-native-router-flux

```

#### Component 에서 Router config 설정하기
ex) Router navBar 에 대한 설정

```
import { Actions } from 'react-native-router-flux';
.....
componentWillMount() {
	Actions.refresh({
   		hideNavBar: true, // hideNavBar
  	});
}

```

## 7. App Icon 및 Splash/Launch Screen 추가
 [React Native(iOS) 앱 Icon 및 Splash/Launch Screen 추가하기]

 [React Native(iOS) 앱 Icon 및 Splash/Launch Screen 추가하기]: https://medium.com/@tjkangs/react-native-ios-앱-icon-및-splash-launch-screen-추가하기-bb93122ef455

```
yarn add react-native-splash-screen

```
설치 참조: [react-native-splash-screen]

[react-native-splash-screen]: https://github.com/crazycodeboy/react-native-splash-screen#installation

## 8. Vector Icon 추가 및 Tabbar 추가
```
yarn add react-native-vector-icons
react-native link react-native-vector-icons

```



### TODOs

- [ ] Error 코드 정리
- [ ] module/section 공통화
- [ ] UT with Jest
