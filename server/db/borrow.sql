INSERT INTO exchange (
    user_id_giver, 
    user_id_taker, 
    date_start, 
    date_end, 
    stuff_id,
    borrow_request)

VALUES 
(${user_id_giver},
${user_id_taker},
${date_start},
${date_end},
${stuff_id},
${borrow_request});
