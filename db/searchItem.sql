select * from long_products
where lower(name) like $1;