DROP TABLE IF EXISTS couches;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    auth0_id TEXT NOT NULL,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    picture TEXT NOT NULL
);

CREATE TABLE couches (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id)
    name TEXT NOT NULL,
    price TEXT NOT NULL,
    image TEXT NOT NULL,
);