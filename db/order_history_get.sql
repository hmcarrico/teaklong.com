select u.id, profile_name, shipping_address, order_id, product_id
from users u
join orders o
on u.id = o.user_id
join line_items li
on li.order_id = o.id
where u.id=$1;