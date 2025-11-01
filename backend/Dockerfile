FROM openjdk:21-jdk
LABEL authors="sakthivel"

WORKDIR /app

COPY target/my-diary-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]