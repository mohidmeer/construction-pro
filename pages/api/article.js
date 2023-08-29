import connectMongo from "@/database/conn";
import Article from "@/models/article";


export default async function handler(req, res) {
     connectMongo();

    if (req.method==='POST'){
        const {title,description,body} = req.body
         await Article.create({
            title:title,
            description:description,
            body:body,
            slug:title.toLowerCase().replace(/ +/g, "-"),
         }).then(()=>{
            return res.status(201).json({message:'Created Successfully.....'})
         }).catch((e)=>{
            console.log(e)
            return  res.status(400).json({error: 'Not Created'})

         })


    }

  }
  