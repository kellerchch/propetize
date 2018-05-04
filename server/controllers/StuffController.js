module.exports = {
    get: (req, res) => {
        const db = req.app.get("db");
        const user_id = req.user.id;
        db.get_stuff({ user_id }).then(stuff => {
        res.send(stuff);
        });
    },

    search: (req, res) => {
        const db = req.app.get("db");
        const keyword = `%${req.query.keyword}%`;
        db.search({keyword}).then(stuff => {
        res.send(stuff);
        });
    },

    favorites: (req, res) => {
        console.log('getting here now')
        const db = req.app.get("db");
        const user_id = req.user.id;
        db.get_favorites({ user_id }).then(stuff => {
        res.send(stuff);
        });
    },

    borrowed: (req, res) => {
        const db = req.app.get("db");
        const user_id = req.user.id;
        db.get_borrowed({ user_id }).then(stuff => {
        res.send(stuff);
        });
    },
  
    create: (req, res) => {
        const db = req.app.get("db");
        const user_id = req.user.id;

        let itemObj = { ...req.body, user_id };
        db.create_item(itemObj).then(results => {
            res.send(results);
        });
    },
  
    delete: (req, res) => {
        const db = req.app.get('db')
        // const user_id = req.user.id;

        // const { id } = req.params
        console.log('controller', req.body)
        db.delete_item({user_id: req.body.user_id, stuff_id: req.body.stuff_id}).then(stuff => {
            console.log('stuff', stuff)
            res.send(stuff)
        })
    },

    edit: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.user.id;

        const { id } = req.params
        const { title, description, stuff_value, photo_url } = req.body
        // This is the troubleshooting that Jake helped me to do to 
        //create the 'edit' function and we discovered that 
        //different data was being passed on different parts of 
        //body, and params. 
        // console.log(id, title, description, stuff_value, user_id)
        db.edit_item({ id, user_id, title, description, stuff_value, photo_url }).then(stuff => {
            // console.log(333333333, stuff)
            res.send(stuff)
        })
        .catch(err =>  {
            // console.log(err)
            res.send(err)
        })
    },

    favorite: (req, res) => {
        console.log('server in controller', req.body)
        const db = req.app.get("db");
        const user_id = req.user.id;
        db.favorite({user_id: req.body.user_id, stuff_id: req.body.item_id}).then(results => {
            res.send(results);
        });
    },

    borrow: (req, res) => {
        const db = req.app.get("db");
        const user_id = req.user.id;
        db.borrow({user_id: req.body.user_id, stuff_id: req.body.item_id}).then(results => {
            res.send(results);
        });
    }

};
  