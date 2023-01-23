CREATE DATABASE courses_project;

create table users(
  id serial not null PRIMARY KEY,
  name varchar(64) not null,
  email varchar(128) not null,
  password varchar(32) not null
);

INSERT INTO users(name, email, password) VALUES('Shohrux', 'murodovichshohruh@gmail.com', 'shoh2004ruh11');
INSERT INTO users(name, email, password) VALUES('Yusuf', 'yusuf@gmail.com', 'yusuf123');

create table courses(
  id serial not null PRIMARY KEY,
  title varchar(128) not null,
  price serial,
  type varchar(128),
  img varchar,
  user_id serial REFERENCES users(id)
);

INSERT INTO courses(title, price, type, img, user_id) VALUES('Node.js', 1300000, 'Web', 'https://miro.medium.com/max/1400/1*xdo0UBpyszvD7-7EH4TkIA.png', 1);