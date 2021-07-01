FROM mysql:5.7

COPY sql /sql
COPY init-data.sh /tmp/init-data.sh
COPY etc/mysql/conf.d/mysql.cnf /etc/mysql/conf.d/

RUN chmod +x /tmp/init-data.sh && /tmp/init-data.sh

EXPOSE 3306

CMD ["mysqld"]

