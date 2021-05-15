const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')
app.use('/articles', articleRouter)
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
    
  res.render("index", {articles: articles})
})

app.listen(5000)