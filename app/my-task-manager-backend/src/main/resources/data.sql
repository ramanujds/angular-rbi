-- generate some test data
-- private String id; an uuid
--     private String title;
--     private String description;
--     private boolean completed;
-- for the task table


INSERT INTO task (id, title, description, completed) values
('1','Learn Angular','Learn Angular and Spring Boot', false),
('2','Learn Spring Boot','Learn Angular and Spring Boot', false),
('3','Learn Java','Learn Java and Spring Boot', true),
('4','Learn Python','Learn Python and Spring Boot', false),
('5','Learn C#','Learn C# and Spring Boot', false),
('6','Learn JavaScript','Learn JavaScript and Spring Boot', true),
('7','Learn TypeScript','Learn TypeScript and Spring Boot', false),
('8','Learn HTML','Learn HTML and Spring Boot', true),
('9','Learn CSS','Learn CSS and Spring Boot', false);

-- for the user table
INSERT INTO user_record (id, username, password, role) values
(1,'user','$2a$12$maU/rzZB3S2pZE4kIMYb6ewjNRfSkd9kzH4Mz84pC.NkZXD8hpotm','USER');

-- the password is 'pass1234' encoded with bcrypt
