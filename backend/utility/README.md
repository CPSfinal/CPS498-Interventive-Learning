# Utility

### Local properties
- create ```application-local.properties``` in src/main/resources and fill out the values
```
spring.datasource.url=insert_jdbc_url_here
spring.datasource.username=insert_username_here
spring.datasource.password=insert_password_here
security.jwt.secret-key=insert_secret_here
```
- to run locally, modify the IDE run configuration to run the local profile
  - In Intellij set the active profiles to 'local'
  - The JVM system parameter is ```-Dspring.profiles.active=local``` if using the command line
- In an IDE you can run the application by right-clicking src/main/java/com.cmu.cps498.utility/IlUtilityApplication and selecting 'run'
- You can alternatively run the application via cli by running ```./gradlew bootRun``` 