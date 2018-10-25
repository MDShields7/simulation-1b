Full stack auth review
-Building the shell

#Front end

COMPONENTS
Nav bar
Home Page
Login Page
Profile Page
Couch browser
Add Couch
Footer
Cart

REDUX
store
reducer
    reducer function
    initial state
        user: null
        couches?
    action creator
    action types
Provider in index.js
connect() in components

ROUTING
routes
/ (home)
/couches
/profile
/cart
index.js BrowserRouter
Links
Routes routes.js


#Back end
***Endpoints
GET POST /api/couches
/auth/callback
/api/me

***controllers
couches
auth
user?

#Database

TABLES
couches
    id serial
    name text
    price integer
    image text
users
    id serial
    auth0_id text
    email text
    name text
    picture text

QUERIES
select all couches
find user
create user
create couch?

#npm packages
express
body-parser
axios
massive
react-router-dom
react-redux
redux
dotenv
http-proxy-middleware
