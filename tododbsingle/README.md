mysql 5.7 컨테이너 데이터베이스입니다.

|-- Dockerfile   
|-- README.md    
|-- config  
|   `-- mysql.cnf
|-- init-data.sh 
`-- sql  
    |-- 01_ddl.sql
    `-- 02_dml.sql

config: mysql 구성 파일 폴더
init-data.sh: 초기 sql 폴더 안의 sql파일들을 데이터베이스에서 실행시키는 스크립트
sql: 초기 데이터베이스 생성 및 샘플데이터 입력

[Dockerfile 변수]
ENV  MYSQL_ROOT_PASSWORD root : mysql root 패스워드를 설정합니다.

[1. 허브 이미지 다운로드 시]
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 dainforest/tododbsingle:1.0 -h mysql

[2. 도커파일을 사용하여 빌드 시]
docker build -t tododbsingle:1.0 .
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 tododbsingle:1.0
