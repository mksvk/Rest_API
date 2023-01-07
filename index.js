const express = require('express')
const formidable = require('express-formidable');
const multer = require("multer")
require("./db/connect")
const User = require('./models/users')
const app = express()
const port = 3000


const storage = multer.diskStorage({
  destination:function(req,file,cd){
    cd(null,"./uploads/")
  },
  filename:function(req,file,cd){
    cd(null,  file.originalname)

  }
})

const upload = multer({storage:storage})

// app.use(formidable());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
   User.find({}).then((data)=>{
    console.log(data)
    res.send(data)
   })
  
  
})

app.post("/",upload.single("image"),(req,res)=>{
  console.log(req.body)
  var users = new User({
    name : req.body.name,
    email : req.body.email,
    phone : req.body.phone,
    city : req.body.city,
    image:req.file.originalname
    
  })

  users.save().then(()=>{
    console.log("saved data in database")
  })
  console.log(req.fields)
  res.send( JSON.stringify(req.file) );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})