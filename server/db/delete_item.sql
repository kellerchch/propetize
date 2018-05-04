DELETE FROM favorites 
WHERE stuff_id = ${stuff_id} 
AND user_id = ${user_id};

DELETE FROM stuff 
WHERE id = ${stuff_id}
AND user_id = ${user_id};

SELECT *
FROM stuff
where user_id = ${user_id};