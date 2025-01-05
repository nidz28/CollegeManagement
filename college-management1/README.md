# Project Documentation

---

## **Project Structure Overview**

The application follows a modular structure to ensure clean code organization and scalability. Below is the folder structure and an explanation of each component:

```
src/
  ├── auth/
  │   ├── auth.controller.ts
  │   ├── auth.module.ts
  │   ├── auth.service.ts
  │   └── jwt.strategy.ts
  ├── colleges/
  │   ├── colleges.controller.ts
  │   ├── colleges.module.ts
  │   ├── colleges.service.ts
  │   ├── entities/
  │   │   ├── college.entity.ts
  │   │   ├── college-placement.entity.ts
  │   │   ├── college-course.entity.ts  
  │   │   ├── city.entity.ts
  │   │   └── state.entity.ts
  │   └── user.entity.ts
  ├── app.module.ts
  ├── main.ts
```

---

## **1. auth/**

Handles authentication and security using **JWT-based authentication**.

### Files:
- **auth.controller.ts**: Manages authentication-related API endpoints like login and signup.
- **auth.module.ts**: Registers all providers and controllers for the authentication module.
- **auth.service.ts**: Implements the business logic for authentication, like token generation and validation.
- **jwt.strategy.ts**: Defines the JWT validation strategy for protecting secured routes.

---

## **2. colleges/**

Handles all college-related operations, including managing placements, courses, and filtering colleges by city or state.

### Files:

- **colleges.controller.ts**: Defines REST API endpoints for:
  - Fetching college placements data.
  - Retrieving courses offered by a college.
  - Filtering colleges by city and state.

- **colleges.module.ts**: Registers services and controllers for the colleges module.

- **colleges.service.ts**: Contains business logic for querying and managing college data.

### **entities/**
- **college.entity.ts**:
  Represents the `Colleges` table with fields like `id`, `name`, `score`, `city_id`, and `state_id`.

- **college-placement.entity.ts**:
  Represents the `College_Placement` table with fields like `college_id`, `year`, `highest_placement`, `average_placement`, and `placement_rate`.

- **college-course.entity.ts**:
  Represents the `College_Wise_Course` table with fields like `college_id`, `course_name`, `course_duration`, and `course_fee`.

- **city.entity.ts**:
  Represents the `Cities` table with fields `id` and `name`.

- **state.entity.ts**:
  Represents the `States` table with fields `id` and `name`.

- **user.entity.ts**:
  Represents a simple user entity for managing user data in the authentication module.

---

## **3. app.module.ts**

The root module that imports and integrates all other modules (e.g., `auth`, `colleges`). This acts as the entry point for the application’s dependency injection system.

---

## **4. main.ts**

The entry file of the application. Responsibilities include:
- Bootstrapping the NestJS application.
- Setting up global middleware (e.g., CORS).
- Initializing Swagger documentation for API exploration.

---

## **Database Integration**
The project uses **PostgreSQL** as its database with the following schema:

### **Tables**

1. **Colleges**:
   - `id` (Primary Key)
   - `name`
   - `score`
   - `city_id` (Foreign Key to `Cities`)
   - `state_id` (Foreign Key to `States`)

2. **College_Placement**:
   - `id` (Primary Key)
   - `college_id` (Foreign Key to `Colleges`)
   - `year`
   - `highest_placement`
   - `average_placement`
   - `median_placement`
   - `placement_rate`

3. **College_Wise_Course**:
   - `id` (Primary Key)
   - `college_id` (Foreign Key to `Colleges`)
   - `course_name`
   - `course_duration`
   - `course_fee`

4. **Cities**:
   - `id` (Primary Key)
   - `name`

5. **States**:
   - `id` (Primary Key)
   - `name`

---

## **Deployment Details**

### **Hosting**
- **Platform**: Render (Free Tier)
- **Database**: Hosted PostgreSQL instance on Render.

### **API Documentation**
- Swagger is available for testing and exploring APIs.
- **Swagger URL**: [Your Swagger URL]

---

## **How to Use**

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd your-project-folder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database in `.env`:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database
   ```

4. Run the application:
   ```bash
   npm run start:dev
   ```

### **Testing the APIs**
- Use Swagger or Postman for testing endpoints.
- Seed data using migrations if needed.

---

## **Contact**
For further information or queries, reach out to: **product@sportsdunia.com**.
