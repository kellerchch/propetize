select * from stuff s
JOIN exchange e on e.stuff_id=s.id

WHERE e.user_id_taker = ${user_id}



