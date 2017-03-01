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

 ![eslinter](/images/eslinter.jpeg)

 [동영상]: https://www.youtube.com/playlist?list=PL9f8_QifuTL4CS8-OyA-4WADhkddOnRS4


### TODOs

- [ ] Error 코드 정리
- [ ] module/section 공통화
- [ ] UT with Jest
