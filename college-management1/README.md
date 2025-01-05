# CollegeManagement
This project is a backend application built using NestJS and PostgreSQL to manage and query college-related data. The system is designed to handle large datasets (millions of rows) while providing optimized endpoints for managing relationships and executing complex queries.
# College Management Backend API

---

## **Overview**
This project is a backend application built using **NestJS** and **PostgreSQL** to manage and query college-related data. Designed to handle large datasets with millions of rows, it demonstrates efficient database relationships, complex queries, authentication, and deployment in a production-like environment.

---

## **Features**

### **1. Database Design**
- **Colleges Table**: Stores college information (name, score, city, and state).
- **College Placements Table**: Maintains yearly placement statistics for each college.
- **College-Wise Courses Table**: Contains course details for colleges.
- **Cities and States Tables**: Provide geographical references for colleges.

### **2. API Endpoints**
- **College Placement Data**: Year-wise placement statistics and trends.
- **College Courses**: Retrieve courses offered by a college, sorted by course fees.
- **Filter by City/State**: Fetch colleges based on city or state filters.

### **3. Authentication**
- Implements **JWT-based authentication** for secure access.
- Supports user login and signup functionality.

### **4. CRUD Operations**
- Create, Read, Update, and Delete operations for colleges, placements, and courses.
- Includes robust input validation and error handling.

### **5. Deployment**
- Deployed on **Render** with PostgreSQL.
- Integrated **Swagger** documentation for API exploration.

### **6. Optional Enhancements**
- Pagination for large dataset queries.
- Role-based access control for admin tasks.

---

## **Technologies Used**

| **Technology** | **Description**                                   |
|----------------|---------------------------------------------------|
| **NestJS**     | Backend framework for building scalable APIs.    |
| **PostgreSQL** | Relational database for efficient data handling. |
| **TypeORM**    | ORM for seamless database integration.           |
| **JWT**        | For secure authentication.                      |
| **Render**     | Cloud platform for deployment.                  |
| **Swagger**    | API documentation and testing tool.             |

---

## **Installation and Setup**

### **Prerequisites**
- Node.js (v14 or above)
- PostgreSQL
- npm or yarn

### **Steps to Run the Project**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd your-project-folder
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   npm i -g @nestjs/cli
   nest new college-management
   npm install --save @nestjs/typeorm typeorm pg @nestjs/config
   npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
   npm install dotenv
   npm install --save @nestjs/swagger swagger-ui-express


   Set up the configuration module for environment variables:
    npm install --save @nestjs/config
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the project root.
   - Add the following variables:
     ```env
     DB_HOST=localhost
     DB_PORT=5432
     DB_USER=your_username
     DB_PASSWORD=your_password
     DB_NAME=your_database
     JWT_SECRET=your_secret_key
     ```

4. **Set Up the Database**:
   - Create the required database in PostgreSQL.
   - Run migrations (if applicable):
     ```bash
     npm run typeorm migration:run
     ```

5. **Start the Application**:
   ```bash
   npm run start:dev
   ```

6. **Access the APIs**:
   - Swagger Documentation: [http://localhost:8090/api](http://localhost:8090/api)

---

## **API Endpoints**

### **1. College Placement Data**
- **GET /college_data/{college_id}**:
  - Returns average placement statistics and trends.

### **2. College Courses**
- **GET /college_courses/{college_id}**:
  - Fetches courses for a college, sorted by fees.

### **3. Colleges by City/State**
- **GET /colleges?city={city_name}**
- **GET /colleges?state={state_name}**
  - Filters colleges based on city or state.

---

## **Deployment**

### **Deployed On Render**
- **Swagger Documentation**: [http://localhost:8090/api](http://localhost:8090/api)

---

---

## **Contact**
For queries or issues, please email at **nb655690@gmail.com**.
