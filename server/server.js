const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());

const fs = require('fs');
const { count } = require('console');

const blogPosts = fs.readFileSync('posts.json')
const blogPostDB = JSON.parse(blogPosts)

app.use(express.json());


app.get('/', (req, res) => res.send('Welcome to the main page'))



app.post('/posts', (req,res) => {
  console.log(req.body) 
  blogPostDB.push(req.body) // receives the newpost and pushes it to the database array
  stringblogPostDB = JSON.stringify(blogPostDB)
  fs.writeFile('posts.json',stringblogPostDB, () => console.log('it worked') )
  res.send(stringblogPostDB)
  
})

app.get('/posts', (req,res) => {
  res.send(blogPostDB)
})

app.post('/posts/comments', (req,res) => {
  console.log(req.body) 
  console.log(req.body.identifier) 
  const iden = req.body.identifier
  console.log(blogPostDB[iden])
  blogPostDB[iden].comments.push(req.body.comment)
  console.log(blogPostDB)
  stringblogPostDB = JSON.stringify(blogPostDB)
  fs.writeFile('posts.json',stringblogPostDB, () => console.log('it worked') )
  //res.send(stringblogPostDB)
  res.send('its working')
})


app.post('/posts/comments/emojis', (req,res) => {
  console.log(req.body)
  let countString = req.body.count
  let count = parseInt(countString.slice(2))
  count++
  blogPostDB
  // console.log(req.body)

  // res.send(req.body)
  

  // switch(req.body.slice){


  // }

  // blogPostDB.push(req.body) // receives the newpost and pushes it to the database array
  // stringblogPostDB = JSON.stringify(blogPostDB)
  // fs.writeFile('posts.json',stringblogPostDB, () => console.log('it worked') )
  // res.send(stringblogPostDB)
  
})



let port = 3000

app.listen(port, ()=> {
  console.log(`Server is up and running at localhost:${port}`)
})   