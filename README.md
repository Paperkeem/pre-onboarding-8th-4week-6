# 📝 댓글 CRUD with Redux

## 📌 [배포 사이트](https://pre-onboarding-8th-4week-6.netlify.app/)

</br>

## Team

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/TaeTaehoon"><img src="https://user-images.githubusercontent.com/107424974/212338752-939b2522-7b0a-4e7c-9ef4-85d957ec8f7c.jpeg" width="100px;" alt=""/><br /><sub><b>강태훈</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Tenykim1109"><img src="https://user-images.githubusercontent.com/107424974/212338696-72b9433d-2ed5-4954-b9ce-ef444aa662eb.jpeg" width="100px;" alt=""/><br /><sub><b>김민정</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Paperkeem"><img src="https://user-images.githubusercontent.com/107424974/212338824-fc8fd767-7ed3-4600-9596-7665f823be03.jpeg" width="100px;" alt=""/><br /><sub><b>김종이</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sanghyun-lee2"><img src="https://user-images.githubusercontent.com/107424974/212338676-3e3b273b-5860-4eed-b971-1a26a9572e74.png" width="100px;" alt=""/><br /><sub><b>이상현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/LEE-YO-HAN"><img src="https://user-images.githubusercontent.com/107424974/212338768-2d0c7044-dc9e-4379-b9a9-bd7252e13287.png" width="100px;" alt=""/><br /><sub><b>이요한</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/rlorxl"><img src="https://user-images.githubusercontent.com/107424974/212338810-22a9d6cf-8073-45f5-a45a-a1025011d445.jpeg" width="100px;" alt=""/><br /><sub><b>이조은</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

#### 🗓 일정 : 2023.01.16 - 01.19

</br>

## 목차: [기능 구현 위키](https://github.com/wanted-onboarding8-6/pre-onboarding-8th-4week-6/wiki)

1. [프로젝트 실행 방법](#프로젝트-실행-방법)
2. [구현사항](#구현사항)

</br>

## 프로젝트 실행 방법

<br>

```bash
# npm 설치
npm install
```

```bash
# Local Server 실행
npx json-server ./data.json --port 4000
```

```bash
REACT_APP_URL="http://localhost:4000"
```

```bash
# 로컬 실행
npm start
```

<br>

## 기술스택

> React, TypeScript, Redux, axios, json-server, styled-components

<br>

## 구현사항

1. 댓글 CRUD 기능 구현

</br>

2. 페이지네이션

</br>

3. 댓글 작성, 수정, 삭제 후 동작
   - 댓글 작성하고 난 뒤: 다른 페이지에 위치하고 있었더라도 1페이지로 이동, 입력 폼 초기화
   - 댓글 수정하고 난 뒤: 현재 보고있는 페이지 유지, 입력 폼 초기화
   - 삭제하고 난 뒤: 1페이지로 이동

</br>

## 요구사항

- Redux 환경설정은 자유롭게 진행
   - Redux-saga or Redux-thunk 자유롭게 선택 가능
   - 미들웨어 사용안하는 것도 가능
- Redux logger, Redux-Devtools 설정 필수
- Redux를 이용한 비동기 처리 필수
