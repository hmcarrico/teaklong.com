select * from long_products
where lower(name) like $1 and type='deck';