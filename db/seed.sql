DROP TABLE IF EXISTS auth;

CREATE TABLE auth (
    user_id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
    user_name VARCHAR(20) NOT NULL,
    user_email VARCHAR(20)NOT NULL,
    user_password VARCHAR(20) NOT NULL
);

