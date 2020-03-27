const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();

const db = require("./models");

db.sequelize.sync();

const Post = db.post;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function initial() {
    Post.create({
      poster: "This is my second post",
      title: "second post"
    });
   
    Post.create({
        poster: "This is my third post",
        title: "Third post"
      });
   
      Post.create({
        poster: "This is my fourth post",
        title: "Fourth post"
      });
  }

app.listen(PORT, function() {
    console.log(`Server is running on port: ${PORT}`);
});