drop table if exists users;

create table users (
  id serial primary key,
  auth0_id varchar not null,
  email varchar not null,
  profile_name text not null,
  picture text not null,
  admin boolean default false
);

create table if not exists long_products(
    id serial primary key,
    type text,
    name text,
    price int,
    img text,
    description text
);

select * from  long_products;
select * from users;