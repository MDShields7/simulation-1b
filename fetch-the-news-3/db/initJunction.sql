CREATE TABLE ftn_trivlist (
  tr_id SERIAL PRIMARY KEY,
  tr_user_id INTEGER,
  tr_cat_id INTEGER,
);
INSERT INTO ftn_trivlist
(tr_user_id, tr_cat_id)
VALUES
(1,1),(2,2),(3,3);

CREATE TABLE ftn_catlist (
  cl_id SERIAL PRIMARY KEY,
  cl_cat_id INTEGER,
  cl_qa_id INTEGER
);
INSERT INTO ftn_catlist
(cl_cat_id, cl_qa_id)
VALUES
(1,1),(2,2),(3,3);

CREATE TABLE ftn_qacreators (
  qacr_id SERIAL PRIMARY KEY,
  qacr_user_id INTEGER,
  qacr_qa_id INTEGER
);
INSERT INTO ftn_catlist
(qacr_user_id, qacr_qa_id)
VALUES
(1,1),(1,2),(1,3);

CREATE TABLE ftn_trivcreators (
  tcr_id SERIAL PRIMARY KEY,
  tcr_user_id INTEGER,
  tcr_cat_id INTEGER
);
INSERT INTO ftn_trivcreators
(qacr_user_id, qacr_qa_id)
VALUES
(1,1),(1,2),(1,3);