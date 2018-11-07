insert into orders
(shipping_address, user_id )
values
($1,$2)
returning *;