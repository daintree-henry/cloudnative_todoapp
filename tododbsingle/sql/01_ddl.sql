CREATE DATABASE tododb DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE tododb;

CREATE TABLE todo (
  id int AUTO_INCREMENT PRIMARY KEY,
  content varchar(255) NOT NULL,
  category varchar(255) NOT NULL,
  dueDate date NOT NULL, 
  createDate date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
