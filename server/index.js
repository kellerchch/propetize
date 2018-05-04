const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

const StuffController = require("./controllers/StuffController");

const isAuthenticated = require("../middleware/isAuthenticated");

require("dotenv").config();

//set up an express server.
const app = express();
const port = 3002;
massive(process.env.CONNECTION_STRING).then(db => {
  
    app.set("db", db);
  });

  //body

app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
  })
);

app.use(passport.initialize());
app.use(passport.session());


passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH_DOMAIN,
      clientID: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      callbackURL: process.env.AUTH_CALLBACK,
      scope: 'openid profile email' },
    (accessToken, refreshToken, extraParams, profile, done) => {
      const db = app.get("db");

      db.get_user_by_auth_id({ auth_id: profile.id }).then(results => {
        let user = results[0];
        if (user) {
          return done(null, user);
        } else {
          let userObj = {
            name: profile.displayName,
            auth_id: profile.id,
            picture: profile.picture,
            locale: profile.locale,
            gender: profile.gender,
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
            nickname: profile.nickname,
            email: profile.emails[0].value
          };

          db.create_user(userObj).then(results => {
            let user = results[0];
            return done(null, user);
          });
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const db = app.get("db");

  db.get_user_by_id({ id }).then(results => {
    let user = results[0];
    return done(null, user);
  });
});

app.get("/auth", passport.authenticate("auth0"));
app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/Stuff",
    failureRedirect: "http://localhost:3000/#/Login"
  })
);

app.get("/auth/me", (req, res) => {
  if (req.isAuthenticated()) {
    return res.send(req.user);
  } else {
    return res.status(404).send("user not authenticated");
  }
});

app.get("/api/stuff", isAuthenticated, StuffController.get);
app.get("/api/search", StuffController.search);
app.get("/api/favorites", isAuthenticated, StuffController.favorites);
app.get("/api/borrowed", isAuthenticated, StuffController.borrowed);

app.post("/api/borrow", isAuthenticated, StuffController.borrow);
app.post("/api/stuff", isAuthenticated, StuffController.create);
app.post('/api/favorite', isAuthenticated, StuffController.favorite);
app.delete('/api/stuff/', StuffController.delete);
app.put('/api/stuff/:id', isAuthenticated, StuffController.edit);

// app.get('/api/locations/:location_id/categories', CategoriesController.get);
// app.post('/api/locations/:location_id/categories', CategoriesController.create);
// app.delete('/api/locations/:location_id/categories/:category_id', CategoriesController.delete);




app.listen(port, () => {
    console.log("listening on port", port);
  });