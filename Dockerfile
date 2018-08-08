FROM registry.dyalog.com:5000/dyalog/dyalog:16.0

RUN apt-get update && apt-get install patch && apt-get clean && rm -Rf /var/lib/apt/lists/*

ENV DEBIAN_FRONTEND     noninteractive
ENV MAXWS=256M

ADD . /MiServer
ADD docker/entry.sh /scripts/
ADD docker/*.patch /patches/
RUN patch /opt/mdyalog/16.0/64/unicode/mapl /patches/mapl.patch
# RUN patch /MiServer/Config/Server.xml /patches/Server.patch

EXPOSE 8080
EXPOSE 4502

CMD /scripts/entry.sh

