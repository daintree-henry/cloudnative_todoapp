docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=tododb -d -p 3306:3306 dainforest/tododbsingle:1.0