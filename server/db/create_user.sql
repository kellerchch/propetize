INSERT INTO users ( 
    auth_id,
    picture,
    locale,
    gender,
    first_name,
    last_name,
    nickname,
    email
    )
VALUES (
    ${auth_id},
    ${picture},
    ${locale},
    ${gender},
    ${first_name},
    ${last_name},
    ${nickname},
    ${email}
    )

RETURNING *;