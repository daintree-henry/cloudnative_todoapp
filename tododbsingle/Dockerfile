FROM mysql:5.7

COPY ./init-data.sh /docker-entrypoint-initdb.d
COPY ./etc/mysql/conf.d/mysql.cnf /etc/mysql/conf.d/

EXPOSE 3306

CMD ["mysqld"]

