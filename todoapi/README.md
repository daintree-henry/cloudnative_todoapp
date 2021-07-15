node.js 코드로 구현한 컨테이너 API 애플리케이션입니다.

```bash
|-- Dockerfile  
|-- READMD.md   
|-- app.js
|-- package-lock.json
`-- package.json
```

### [API]
| Method    | URL        | REQUEST | RESPONSE |
| -----     | ----       | ---     | ---      |
| GET       | /item      |         | [{"id": 1,"content": "쿠버네티스 교육","category": "업무","dueDate": "2021-07-19T15:00:00.000Z","createDate": "2021-07-13T15:00:00.000Z"}]|
| POST      | /item      | '{"content":"todoapi 개발", "category":"업무", "dueDate":"20210715"}'      |          |
| DELETE    | /item/:id  |         | {"status": 201,"msg": "delete success"}|

### [QUERY Test]

```bash
curl -X GET http://localhost:3000/item
curl -d '{"content":"todoapi 개발", "category":"업무", "dueDate":"20210715"}' -H "Content-Type: application/json" -X POST http://localhost:3000/item
```

### [Dockerfile 변수]
ENV MYSQL_USER root : mysql 유저명
ENV MYSQL_HOST localhost : mysql 호스트
ENV MYSQL_ROOT_PASSWORD root : mysql root 패스워드
ENV MYSQL_PORT 3306 : mysql 포트
ENV MYSQL_DATABASE tododb : mysql 데이터베이스 명

ENV PORT 3000 : 애플리케이션 실행 포트

### [컨테이너 실행]
##### [1. 허브 이미지 다운로드 시]
docker run --name todoapi -e MYSQL_USER=root -e MYSQL_HOST={DB 컨테이너의IP or 도메인} -e MYSQL_ROOT_PASSWORD=root -d -p 3000:3000 dainforest/todoapi:1.0 


##### [2. 도커파일을 사용하여 빌드 시]
docker build -t todoapi:1.0 .
docker run --name todoapi -e MYSQL_USER=root -e MYSQL_HOST={DB 컨테이너의IP or 도메인} -e MYSQL_ROOT_PASSWORD=root -d -p 3000:3000 todoapi:1.0 



