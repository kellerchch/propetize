SELECT s.title, s.description, s.photo_url, s.stuff_value, s.id
FROM stuff s
join favorites f
on f.stuff_id = s.id
WHERE f.user_id = ${user_id}