FROM dyalog/dyalog

USER root


RUN apt-get update && apt-get install -y --no-install-recommends   \   
        ca-certificates \
        unixodbc        \
        wget            \
        patch           \
        mariadb-client    && \
    apt-get clean && rm -Rf /var/lib/apt/lists/*

RUN cd /tmp && \
    wget https://dev.mysql.com/get/Downloads/Connector-ODBC/5.3/mysql-connector-odbc-5.3.7-linux-ubuntu16.04-x86-64bit.tar.gz   && \
    tar xf mysql-connector-odbc-5.3.7-linux-ubuntu16.04-x86-64bit.tar.gz && \
    mkdir /libmyodbc    && \
    cp mysql-connector-odbc-5.3.7-linux-ubuntu16.04-x86-64bit/lib/* /libmyodbc  && \
    rm -Rf /tmp/mysql-connector-odbc-5.3.7-linux-ubuntu16.04-x86-64bit.tar.gz /tmp/mysql-connector-odbc-5.3.7-linux-ubuntu16.04-x86-64bit

ADD . /MiServer
RUN patch /MiServer/Config/Server.xml /MiServer/docker/Server.patch
ADD docker/run /
ADD docker/odbc.ini /
RUN chmod 666 /odbc.ini

RUN chown -R dyalog:dyalog /MiServer

RUN mkdir -p /app

EXPOSE 8080

USER dyalog