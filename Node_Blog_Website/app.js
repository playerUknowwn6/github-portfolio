const express =require('express');
const morgan = require('morgan');
const mongoose=require('mongoose');
const { result } = require('lodash');
import { Key } from '../../Web_Dev_Project_Portfolio/Node MONGO DB Blogsite/key';
const blogRoutes =require('./Routes/BlogRoutes');


const app=express();
const DbURI=Key;
mongoose.connect(DbURI)
.then((result)=>{
    app.listen(3000); 
    console.log('db reached');

})
.catch((err)=>console.log(err));



app.set('view engine','ejs');



app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));


app.get('/',(req,res)=>{
 res.redirect('/blogs');
})
app.get('/about',(req,res)=>{
    // res.send("<p>about  page<p>");
    res.render('about');



})


app.use('/blogs',blogRoutes);

app.use((req,res)=>{
res.status(404).render('404');
});