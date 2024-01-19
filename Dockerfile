ARG FLINK_VERSION=1.16.2
ARG FLINK_BIG_VERSION=1.16

FROM flink:${FLINK_VERSION} as reqired-stage

FROM centos7-jdk11

ADD build/dinky-release-1.0.0-rc3.tar.gz  /opt/

USER root
RUN mv /opt/dinky-release-1.0.0-rc3 /opt/dinky/
RUN mkdir -p /opt/dinky/run && mkdir -p /opt/dinky/logs &&  touch /opt/dinky/logs/dinky.log
RUN chmod -R 777 /opt/dinky/

COPY --from=reqired-stage  /opt/flink/lib/*.jar  /opt/dinky/extends/flink1.16/
RUN rm -f  /opt/dinky/extends/flink1.16/flink-table-planner-loader*.jar
COPY --from=reqired-stage  /opt/flink/opt/flink-table-planner*.jar  /opt/dinky/extends/flink1.16/

WORKDIR /opt/dinky/

EXPOSE 8888

CMD  ./auto.sh restart && tail -f /opt/dinky/logs/dinky.log