FROM registry.dyalog.com:5000/dyalog/dyalog:15.0

ENV DEBIAN_FRONTEND     noninteractive
ENV MAXWS=256M

ADD . /MiServer
ADD docker/entry.sh /scripts/

EXPOSE 8080
EXPOSE 4502

CMD /scripts/entry.sh

