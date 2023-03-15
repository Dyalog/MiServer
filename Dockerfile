FROM dyalog/dyalog

USER root


RUN apt-get update && apt-get install -y --no-install-recommends   \   
        patch           && \
    apt-get clean && rm -Rf /var/lib/apt/lists/*

ADD . /MiServer
RUN patch /MiServer/Config/Server.xml /MiServer/docker/Server.patch
ADD docker/entrypoint /

RUN mkdir /.dyalog && chmod 777 /.dyalog


RUN chown -R dyalog:dyalog /MiServer

RUN mkdir -p /app

EXPOSE 8080

USER dyalog
