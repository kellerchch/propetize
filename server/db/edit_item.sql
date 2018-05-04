UPDATE stuff 

SET 
title = ${title}, 
description = ${description}, 
photo_url = ${photo_url}, 
stuff_value = ${stuff_value}

WHERE id = ${id}
AND user_id = ${user_id};

-- UPDATE stuff 
-- SET title = 'EDC', description = 'WHAT', photo_url = 'YOU', stuff_value = 'YEP'

SELECT *
FROM stuff
WHERE user_id = ${user_id}
ORDER BY id;


