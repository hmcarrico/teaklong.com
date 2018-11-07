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

create table if not exists orders (
  id serial primary key,
  shipping_address text,
  user_id integer references users (id)
);

create table if not exists line_items (
  id serial primary key,
  order_id integer references orders (id),
  product_id integer references long_products (id)
);


update users set admin=true where id=1;

select * from  long_products;
select * from users;
select * from orders;
select * from line_items;