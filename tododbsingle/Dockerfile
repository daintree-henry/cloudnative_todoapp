FROM mysql:5.7

COPY etc/mysql/conf.d/mysql.cnf /etc/mysql/conf.d/
COPY sql /sql
COPY init-data.sh /docker-entrypoint-initdb.d

ENV  MYSQL_ROOT_PASSWORD root

EXPOSE 3306

CMD ["mysqld"]

