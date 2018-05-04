create table users (
    id SERIAL PRIMARY KEY,
    first_name varchar,
    last_name varchar,
    user_type varchar,
    phone varchar,
    email varchar,
    address varchar,
    city varchar,
    state varchar,
    zip varchar,
    reputation_score varchar,
    exchange_total varchar,
    auth_id varchar,
    name varchar,
    picture varchar,
    nickname varchar,
    gender varchar,
    locale varchar,
    money integer
    -- this is the amount of money the person has and this increases and reduces with exchanges. 
);

create table categories (
    id SERIAL PRIMARY KEY,
    name varchar
);

create table stuff (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users,
    borrower_id INTEGER REFERENCES users,
    category_id INTEGER REFERENCES categories,
    title varchar,
    description varchar,
    photo_url varchar,
    terms varchar,
    status_borrowed varchar,
    is_loaned_out  boolean,
    -- true or false
    stuff_type varchar,
    -- service or stuff
    stuff_value varchar
);

create table exchange (
    id SERIAL PRIMARY KEY,
    user_id_giver INTEGER REFERENCES users,
    user_id_taker INTEGER REFERENCES users,
    date_start date,
    date_end date,
    stuff_id INTEGER REFERENCES stuff,
    borrow_request varchar, 
    duration INTEGER
);

create table subcategories (
    id SERIAL PRIMARY KEY,
    name varchar,
    category_id INTEGER REFERENCES categories
);

create table favorites (
    id SERIAL PRIMARY KEY,
    stuff_id INTEGER REFERENCES stuff,
    user_id INTEGER REFERENCES users
);

