SELECT *
FROM stuff
WHERE description LIKE ${keyword}
OR title LIKE ${keyword};