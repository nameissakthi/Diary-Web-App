# My Diary
My diary is web based application which holds your memories. You can access it through your account anywhere around the world!!!.

### Tech Stack:
 - Vite JS
 - Spring-boot
 - PostgreSQL
 - NeonDB for Postgres
 - Onrender & Vercel for Deployment

### Navigate to the project directory
```bash
    cd Diary-Web-App
```

### To run the frontend
Before running the frontend check whether the listed `.env` variables are defined

### .env file
```bash
    VITE_CLERK_PUBLISHABLE_KEY=
    VITE_BACKEND_URL=
```

#### Step 1: Navigate to the frontend
```bash
    cd Diary-Web-App/frontend
```

#### Step 2: Need to install the node_modules
```bash
    npm install
````

#### Step 3: Run the front using the below command
```bash
    npm run dev
```

### To run the backend
Open the backend folder in a IDE. **Recommendation : IntelliJ Idea**. Before running the backend fill the `aplication.properties` file
### application.properties ( src/main/resources/{create the file here} ) file
```bash
spring.application.name=my-diary
spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url=
spring.datasource.username=
spring.datasource.password
spring.jpa.show-sql=
spring.jpa.hibernate.ddl-auto=
```

#### Step 1: Reload the maven or run the below command thru cmd
```bash
    mvn dependency:go-offline
```

#### Step 2: Run the spring-boot application through `run application` button on the editor or try the below cmd
```bash
    mvn spring-boot:run
```
If the application started, visit `http://localhost:8080/` to verify if the API working.

### Don't forget to star the repository and share your feedback!✨

### Author : [Sakthivel](https://github.com/nameissakthi)
