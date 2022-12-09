
create table users(
	id serial primary key,
	name varchar(50) not null,
	email varchar(50) not null,
	password varchar(256) not null
);

create table recipes(
	id serial primary key,
	title varchar(50) not null,
	description varchar(150) not null,
	preparationTime integer not null,
	userId integer not null,
	foreign key(userId) references users(id)
);

CREATE TYPE unit AS ENUM ('copos', 'xícaras', 'colheres (sopa)', 'colheres (chá)', 'ml', 'gramas', 'cm');

create table ingredients(
	id serial primary key,
	recipeId integer not null,
	name varchar(25) not null,
	quantity varchar(15) not null,
	unitType varchar(15) not null,
	foreign Key(recipeId) references recipes(id)
);

create table steps(
	id serial primary key,
	recipeId integer not null,
	orderIndex integer not null default -1,
	command varchar(300) not null,
	foreign Key(recipeId) references recipes(id)
)

