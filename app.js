const express = require('express');
const hbs = require('hbs');
const app = express();
require('dotenv').config();

const port =process.env.PORT;

//Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname +'/views/partials', function(err){});
//Use static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        title: 'Curso de node',
        author: 'Victor Rojas'
    });
})
app.get('/generic', (req, res) => {
    // res.sendFile(__dirname+'/public/pages/generic.html')
    res.render('generic',{
        title: 'Curso de node',
        author: 'Victor Rojas'
    });
})
app.get('/elements', (req, res) => {
    // res.sendFile(__dirname+'/public/pages/elements.html')
    res.render('elements',{
        title: 'Curso de node',
        author: 'Victor Rojas'
    });
})
app.get('*', (req, res) => {
  res.sendFile(__dirname+'/public/404.html')
})

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`)
});