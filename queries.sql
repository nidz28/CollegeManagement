CREATE TABLE states (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

select * from states;

CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
select * from cities;

CREATE TABLE colleges (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    score INTEGER NOT NULL CHECK (score BETWEEN 1 AND 1000),
    city_id INTEGER REFERENCES cities(id),
    state_id INTEGER REFERENCES states(id)
);
select * from colleges;

CREATE TABLE college_placement (
    id SERIAL PRIMARY KEY,
    college_id INTEGER REFERENCES colleges(id),
    year INTEGER NOT NULL,
    highest_placement NUMERIC NOT NULL,
    average_placement NUMERIC NOT NULL,
    median_placement NUMERIC NOT NULL,
    placement_rate NUMERIC NOT NULL
);
select * from college_placement;

CREATE TABLE college_wise_course (
    id SERIAL PRIMARY KEY,
    college_id INTEGER REFERENCES colleges(id),
    course_name VARCHAR(100) NOT NULL,
    course_duration INTEGER NOT NULL,
    course_fee NUMERIC NOT NULL
);
select * from college_wise_course;

-- Seed Data for Cities
INSERT INTO Cities (name) VALUES ('New York'), ('Los Angeles'), ('Chicago'), ('Houston'), ('Phoenix');

-- Seed Data for States
INSERT INTO States (name) VALUES ('New York'), ('California'), ('Illinois'), ('Texas'), ('Arizona');

-- Seed Data for Colleges
INSERT INTO Colleges (name, score, city_id, state_id) VALUES
('New York University', 950, 1, 1),
('University of California', 900, 2, 2),
('University of Chicago', 850, 3, 3),
('Rice University', 800, 4, 4),
('Arizona State University', 750, 5, 5);

-- Seed Data for College_Placement
INSERT INTO College_Placement (college_id, year, highest_placement, average_placement, median_placement, placement_rate) VALUES
(1, 2023, 150000.00, 100000.00, 90000.00, 85.50),
(2, 2023, 140000.00, 95000.00, 85000.00, 80.00),
(3, 2023, 130000.00, 90000.00, 80000.00, 78.00),
(4, 2023, 120000.00, 85000.00, 75000.00, 75.00),
(5, 2023, 110000.00, 80000.00, 70000.00, 70.00);

-- Seed Data for College_Wise_Course
INSERT INTO College_Wise_Course (college_id, course_name, course_duration, course_fee) VALUES
(1, 'Computer Science', 4, 50000.00),
(1, 'Data Science', 2, 60000.00),
(2, 'Mechanical Engineering', 4, 45000.00),
(3, 'Business Administration', 3, 40000.00),
(4, 'Electrical Engineering', 4, 55000.00),
(5, 'Psychology', 3, 30000.00);
