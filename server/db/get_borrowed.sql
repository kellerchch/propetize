SELECT s.title, s.description, s.photo_url, s.id, s.stuff_value
FROM stuff s
WHERE s.borrower_id = ${user_id}