import { Schema,model,models } from "mongoose";


const articleSchema = new Schema ({
    title:String,
    description:String,
    slug:String,
    body:String,
 },{timestamps:true})


 const Article = models.article || model('article', articleSchema);

 export default Article;


