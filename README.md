# CPS498-Interventive-Learning

## Project Overview
This project is part of the Senior Design course at **Central Michigan University**. The goal is to develop an **inventive learning platform** that enhances student education using **AI-driven interventions** and adaptive learning strategies.

## Team Members
- **Shannon Burkel**
- **Jose Pompa**
- **Ryker Matties**
- **Seth Glover**
- **Daniel Noguera**
- **Thomas Alfano**
- **Andrew Burton**

---

## **Technologies Used**
### **Frontend**
- **React** (with Vite)
- **React Router**
- **TypeScript**
- **SCSS** (for styling)

### **Backend**
- **Java + Spring Boot** (Gradle)
- **PostgreSQL** (Database)
- **Redis** (for caching)
- **Docker** (for containerization)

### **Development Tools**
- **Version Control**: Git, GitHub
- **Project Management**: JIRA
- **Build Tools**: Gradle, Vite
- **Linting**: ESLint
- **Package Managers**: npm, Gradle

---

## **Installation**
### **1. Clone the repository (for authorized users only)**
```bash
 git clone https://github.com/DanielNogueraDevelopment/CPS498-Interventive-Learning.git
 cd CPS498-Interventive-Learning
```
### **2. Setup Backend(Spring Boot)**
#### 1. Ensure you have Java 21+ and Gradle installed.
#### 2. Inside the back-end folder, run: 
```bash
    ./gradlew bootRun # for Linux/maocOS/MSPS
    gradlew bootRun # for Windows
```
#### 3. The back-end will start at http://localhost:xxxx #replace x's with your port
### **3. Setup Database (PostSQL)
#### 1. Install PostgreSQL and create new DB (if starting project from scratch)
#### 2. Update application.properties with new credentials
### **4. Setup Front-end (React)**
#### 1. Install dependencies: 
```bash
    npm install 
```
#### 2. Start the development server: 
```bash
    npm run dev
```
#### 3. The front-end will be available at http://localhost:5173 
## **Connecting Development environment (front-end) to the back-end**

