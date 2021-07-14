[Dockerfile]
ENV MYSQL_USER root
ENV MYSQL_HOST localhost
ENV MYSQL_ROOT_PASSWORD root

부분에서 mysql의 정보를 입력합니다.

[Container]
docker run --name todo-api -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 dainforest/tododbsingle:1.0

[QUERY Test]

curl -X GET http://localhost:3000/item

curl -d '{"content":"todoapi 개발", "category":"업무", "dueDate":"20210715"}' -H "Content-Type: application/json" -X POST http://localhost:3000/item
