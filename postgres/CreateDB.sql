CREATE TABLE web_origins (
    client_id character varying(36) NOT NULL,
    value character varying(255)
);

CREATE TABLE values (
    number integer
);

CREATE TABLE authenticate (
   username VARCHAR (50),
   password VARCHAR (50) 
);

INSERT INTO authenticate (username,password) VALUES('admin','admin');