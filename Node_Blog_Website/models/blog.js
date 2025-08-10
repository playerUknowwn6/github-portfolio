const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const blogSchema =new Schema({

title:{
type:String,
required:true

},
snippet:{
   type:String,
   required:true


},
blog:{
    type:String,
    required:true
}


},{timestamps:true});
const Blog =mongoose.model('blog',blogSchema);
module.exports=Blog;