node.js 코드로 구현한 싱글페이지웹앱 애플리케이션입니다.

```bash
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
```

app.js : 서버 실행 코드입니다. / 경로에서 index.ejs 템플릿을 응답합니다.
views/js/app.js : JQuery와 AJAX를 사용해 index 페이지에서 버튼 클릭 시 API 요청을 수행합니다.

### [Dockerfile 변수]
ENV API_URL localhost : API 접근 정보 
ENV API_PORT 3000 : API 포트
ENV APP_NAME TESTAPP : 애플리케이션 명

ENV PORT : 애플리케이션 포트, Default 8080

### [컨테이너 실행]
##### [1. 허브 이미지 다운로드 시]
docker run --name todoweb -e APIURL={API 컨테이너의IP or 도메인} -e APIPORT=3000 -e APPNAME=TestAPP -d -p 8080:8080 dainforest/todoweb:1.0 

##### [2. 도커파일을 사용하여 빌드 시]
docker build -t todoweb:1.0 .
docker run --name todoweb -e APIURL={API 컨테이너의IP or 도메인} -e APIPORT=3000 -e APPNAME=TestAPP -d -p 8080:8080 todoweb:1.0

