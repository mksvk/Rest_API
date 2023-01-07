const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://mksvk:mksvk@cluster0.scq5d.mongodb.net/iamneo?retryWrites=true&w=majority",{
    useNewUrlParser: true
}).then(()=>{
    console.log("mongodb connected")

}).catch((err)=>{
    console.log(err+" Not connected")
});