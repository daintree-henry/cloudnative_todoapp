node.js 코드로 구현한 싱글페이지웹앱 애플리케이션입니다.

|-- Dockerfile  
|-- README.md   
|-- app.js 
|-- package-lock.json
|-- package.json
`-- views
    |-- img
    |   `-- loading.gif
    |-- index.ejs
    `-- js
        `-- app.js

app.js : 서버 실행 코드입니다. / 경로에서 index.ejs 템플릿을 응답합니다.
views/js/app.js : JQuery와 AJAX를 사용해 index 페이지에서 버튼 클릭 시 API 요청을 수행합니다.


[API]
| Method    | URL        | REQUEST | RESPONSE |
| -----     | ----       | ---     | ---      |
| GET       | /item      |         | [{"id": 1,"content": "쿠버네티스 교육","category": "업무","dueDate": "2021-07-19T15:00:00.000Z","createDate": "2021-07-13T15:00:00.000Z"}]|
| POST      | /item      | '{"content":"todoapi 개발", "category":"업무", "dueDate":"20210715"}'      |          |
| DELETE    | /item/:id  |         | {"status": 201,"msg": "delete success"}|

[QUERY Test]
curl -X GET http://localhost:3000/item
curl -d '{"content":"todoapi 개발", "category":"업무", "dueDate":"20210715"}' -H "Content-Type: application/json" -X POST http://localhost:3000/item

[Dockerfile 변수]
ENV API_URL localhost : API 접근 정보 
ENV API_PORT 3000 : API 포트
ENV APP_NAME TESTAPP : 애플리케이션 명

ENV PORT : 애플리케이션 포트, Default 8080

[1. 허브 이미지 다운로드 시]
docker run --name todoweb -e APIURL={API 컨테이너의IP or 도메인} -e APIPORT=3000 -e APPNAME=TestAPP -d -p 8080:8080 dainforest/todoweb:1.0 

[2. 도커파일을 사용하여 빌드 시]
docker build -t todoweb:1.0 .
docker run --name todoweb -e APIURL={API 컨테이너의IP or 도메인} -e APIPORT=3000 -e APPNAME=TestAPP -d -p 8080:8080 todoweb:1.0

