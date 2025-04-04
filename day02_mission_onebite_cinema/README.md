![alt text](day2_mission.png)
Day2 Mission


## 이번 시간에 살펴볼 내용

Page Router

Page Router 버전의 Next.js App 만들기

1. Index 페이지
    - 인덱스 경로(/)에 해당하는 페이지
    - 등록된 도서의 리스트를 볼 수 있다
2. Search 페이지
    - 서치 경로(/search)에 해당하는 페이지
    - 제목, 저자 별로 검색 효과를 볼 수 있다
3. Book 페이지
    - /book/{book_id} 경로의 페이지
    - 특정 도서의 상세 정보를 확인할 수 있다

## Page Router

현재 많은 기업에서 사용되고 있는 안정적인 라우터

React Router 처럼 페이지 라우팅 기능을 제공함

Pages 폴더의 구조를 기반으로 페이지 라우팅을 제공함

`npx` : Node Package Executor

`npx create-next-app@14 section02` 

section02라는 이름으로 create-next-app 14버전의 nextjs를 실행(npx)

`import alias`: 절대 경로로 모듈을 import 할 수 있도록 도와주는 기능

→ `import A from @/components/~" (@는 /src 경로를 의미함)

`_app.tsx` `_document.tsx` : page폴더에 있지만 page역할은 아님, next에 공통적으로 적용될 로직이나, 레이아웃, 데이터를 다루기 위해서 필요한 파일

`_app.tsx` 안에 두 가지 props { Component, pageProps }

Component: page역할

## 페이지를 만드는 방법 (2가지)

1. {경로 이름}.tsx 로 생성
2. {경로이름}폴더 생성 `index.tsx` 생성

### 페이지 중첩

- `./{페이지 이름}/{중첩 페이지 이름}`

## 쿼리 스트링 설정

Query String: 페이지 경로에는 영향을 주지 않기 때문에 pages에 특별히 설정할 것 ❌

useRouter을 불러와서 호출

`import { useRouter } from "next/router";`

1. `useRouter` import (페이지 라우터에서는 app/router에 useRouter)
2. router 객체
    
    ![alt text](image.png)
    query 불러오는 법
    
    `const q = router.query.q || const { q } = router.query` ;
    

## 동적 파라미터 설정

- `./{ 폴더이름 }/[id].tsx`  ⇒ 동적 경로를 갖음
- 파라미터 값 사용
    - 쿼리 스트링과 동일

![alt text](image-1.png)

`const id = router.query.id || const { id } = router.query`

### 중첩된 경로

- `./{ 폴더이름 }/[...id].tsx` ⇒ Catch All Segment(구간)
- ex) [`http://localhost:3000/movie/231/dsbajd/dsabkdsa`](http://localhost:3000/movie/231/dsbajd/dsabkdsa)

### 일반 경로

- [`http://localhost:3000/movie`](http://localhost:3000/movie/231/dsbajd/dsabkdsa) 와 같은 일반 경로는 나타내지 못함
- 해결책: `./{ 폴더이름 }/[[...id]].tsx` ⇒ Optional Catch All Segment

## Not Found 페이지

page폴더 내부에 `404.tsx` 로 지정