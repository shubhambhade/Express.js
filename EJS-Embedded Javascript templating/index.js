const express = require('express');

const path = require('path');

const app = express();

//set the view engine as ejs
app.set('view engine','ejs');

//set the directy for the views
app.set('views',path.join(__dirname,'views'));

const products =[
    {
        id : 1,
        title : 'Product 1',
    },
    {
        id : 2,
        title : 'Product 2',
    },
    {
        id : 3,
        title : 'Product 3',
    },
    {
        id : 4,
        title : 'Product 4',
    },
    {
        id : 5,
        title : 'Product 5',
    }
];

app.get('/',(req,res)=>{
    res.render('home',{title:'Home', products:products});
});

app.get('/about',(req,res)=>{
    res.render('about',{title:'About Page'});
});


const port = 3000;

app.listen(port,()=>{
    console.log('Server is Running');
}
)
