# 3.Make Your First JS App
- 3.1 Making a JS Clock Part One
- 3.2 Making a JS Clock Part Two
- 3.3 Saving the User Name Part One
- 3.4 Saving the User Name Part Two
- 3.5 Making a To Do List Part One
- 3.6 Making a To Do List Part Two
- 3.7 Making a To Do List Part Three
- 3.8 Image Background
- 3.9 Getting The Weather Part One(Geolocation)
- 3.10 Getting The Weather Part Two(API)
- 3.11 Conclusions

## 3.1-2 Making a JS Clock Part
: 시계 앱 제작
- clock.js
- setInterval(func,time) : 해당 함수를 지정 시간마다 초기화
- ` 문자 ${변수} ` : 문자와 변수를 함꼐 string type으로 작성
<br>

## 3.3-4 Saving the User Name Part
: 유저 이름 입력 및 로컬 스토리지에 저장, 이름 출력
- gretting.js
- localStorage: 소규모 데이터 저장, String파일만 읽음
- .setItem/.getItem : 저장/불러오기
- classList: JS에서 클래스 이름 조작
- .add/.remove: 클래스를 필요에 따라 삽입/삭제
<br>

## 3.5-7 Making a To Do List Part
: ul을 이용한 todo리스트 제작 및 요소 추가 삭제
- todo.js
- parseInt/Float : 데이터 타입을 int, float 형태로 변환
- JSON: JS가 데이터를 다룰 수 있도록 타입 변환 (ex: string -> object)
- list.filter(func): 리스트 내의 모든 값에 해당 함수 적용
- .createElement/TextNode: 요소/텍스트 생성 및 추가
- .appendChild: 자식 요소 추가
<br>

## 3.8 Image Background
: 배경이미지 설정
- bg.js, index.css
- Math.floor/.ceiling: 소숫점 버림/올림
- Math.random() * Number: 랜덤 숫자 생성
<br>

## 3.9-10 Getting The Weather Part One(Geolocation,API)
: 위치 정보 저장 및 불러오기, 위도, 경도 찾기, API를 이용하여 데이터 불러오기
- navigator API
- navigator.geolocation.getCurrentPosition(정상,오류): 위치 획득
- fetch(url,[options]): 네트워크 요청
- .then(): 앞의 작업이 완료될때까지 기다린 후 실행
<br>
 
 
## 3.11 Conclusions