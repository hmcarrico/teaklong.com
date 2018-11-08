select u.id, profile_name, shipping_address, order_id, product_id, p.img
from users u
join orders o
on u.id = o.user_id
join line_items li
on li.order_id = o.id
join long_products p
on li.product_id = p.id
where u.id=$1;