INSERT INTO stuff (title, description, photo_url, stuff_value, user_id)
VALUES (${title}, ${description}, ${photo_url}, ${stuff_value}, ${user_id});

SELECT *
FROM stuff
WHERE user_id = ${user_id};