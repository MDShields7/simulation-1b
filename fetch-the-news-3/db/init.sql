DROP TABLE IF EXISTS ftn_users;
DROP TABLE IF EXISTS ftn_catsets;
DROP TABLE IF EXISTS ftn_qasets;

-- 'USER SET' ONE TO ONE TABLE
CREATE TABLE ftn_users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(100) NOT NULL,
    user_password VARCHAR(50) NOT NULL
);
INSERT INTO ftn_users 
(user_name, user_email, user_password)
VALUES
('admin', 'matthew.duncan.shields@gmail.com', 'abcd1234'),
('mdshields', 'matthew.duncan.shields@gmail.com', 'cooldude'),
('gillygilstrap', 'mgilstrap@toughguy.edu', 'password2');

-- 'CATEGORY SET' ONE TO ONE TABLE
CREATE TABLE ftn_catsets (
    cat_id SERIAL PRIMARY KEY,
    cat_name VARCHAR(100) NOT NULL
);
INSERT INTO ftn_catsets 
(cat_name)
VALUES
('Celebrity Gossip 2018'),
('Arts & Culture 2018'),
('Science News 2018');

-- 'CATEGORY QUESTION AND ANSWER SETS' ONE TO ONE TABLE
CREATE TABLE ftn_qasets (
    qa_id SERIAL PRIMARY KEY,
    qa_question VARCHAR(300) NOT NULL,
    qa_ans1 VARCHAR(100) NOT NULL,
    qa_ans2 VARCHAR(100) NOT NULL,
    qa_ans3 VARCHAR(100) NOT NULL,
    qa_ans4 VARCHAR(100) NOT NULL
);
INSERT INTO ftn_qasets 
( qa_question, qa_ans1, qa_ans2, qa_ans3, qa_ans4)
VALUES
('What SNL cast members dated Arianna Grande?', 'Pete Davidson', 'Michael Che', 'Alex Moffat', 'Colin Jost'),
('What artists'' work shredded itself upon sale at auction?', 'Banksy', 'Ai Weiwei', 'Marcel Duchamp', 'Salvador Dali'),
('The physics Nobel prize was awarded to a team of three scientists, including what woman for the first time in 55 years?', 'Donna Strickland', 'Marie Curie', 'Jane Goodall', 'Elizabeth Blackburn');

SELECT * FROM ftn_users;
SELECT * FROM ftn_catsets;
SELECT * FROM ftn_qasets;