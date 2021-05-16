const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()



mongoose.connect('mongodb://localhost/blog1',{
  useNewUrlParser: true, useUnifiedTopology: true, 
  useCreateIndex: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    const articles=[{
        title:"test articles",
        createdAt:Date.now(),
        description:"test description"
    },
    {
        title:"test articles",
        createdAt:Date.now(),
        description:"test description"
    }]
    
  res.render("articles/index", {articles: articles})
})

app.use('/articles', articleRouter)

app.listen(5000)