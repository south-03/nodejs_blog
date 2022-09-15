const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const { extname } = require('path')
const app = express()
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined'))

//
app.engine('hbs', handlebars.engine({ defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'))

console.log();

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})