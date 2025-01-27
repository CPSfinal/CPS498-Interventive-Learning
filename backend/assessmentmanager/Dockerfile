# Stage 1: Build the application
FROM openjdk:21-jdk AS builder

# Set the working directory inside the container
WORKDIR /app

# Install xargs (findutils package)
RUN microdnf update && microdnf install -y findutils

# Copy the Gradle wrapper and settings files
COPY gradlew .
COPY gradle/ gradle/
COPY build.gradle settings.gradle ./

# Ensure the Gradle wrapper has execute permissions
RUN chmod +x ./gradlew

# Copy the source code
COPY src ./src

# Build the Spring Boot application as a JAR without running tests
RUN ./gradlew clean build -x test --no-daemon

# Stage 2: Run the application
FROM openjdk:21-jdk

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the build stage into the runtime stage
COPY --from=builder /app/build/libs/*.jar app.jar

# Expose port 8080 (Spring Boot default port)
EXPOSE 8080

# Command to run the Spring Boot app using the JAR file
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
