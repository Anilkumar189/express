var express=require("express");
var cookieparser = require("cookie-parser")
var app=express();
var users = [
  {
username:"nani",
password:"123"
},
{
  username:"sony",
  password:"123"
}
]
var cors=require("cors")

var bodyparser =require("body-parser");
app.use(cors());
app.use(cookieparser())

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(express.static(__dirname+"/public"))


function checkLogin(req,res,next){
   if(req.cookies.username){
    next();
   }
   else{
    res.redirect("/login")
   }
}
  

app.get("/login",(req,res)=>{
    res.cookie('name',"anil")
    var x = users.some(function(user){
      if(user.username===req.query.username && user.password===req.query.password){
        console.log(req.query.username)
        // console.log(user.password)
        return true
      }
    })
  if(x===true){
    res.cookie('username',req.query.username)
    res.cookie('password',req.query.password)
    res.redirect("/home.html")
  }
   else{
    res.redirect("/errorlogin.html")
   }
})
// app.post("/add",function(req,res){
//   console.log(req.cookies)
//   res.send("receved post request for xyz route")
// })


 3// app.get("/add/:x/:y",(req,res)=>{
//     res.send("add"+(+req.params.x+ +req.params.y))
//   })

  app.get("/",checkLogin,(req,res)=>{
    // res.sendFile(__dirname+"/home.html")
     
      res.redirect("/home.html")
    
  })

  app.use(checkLogin)
  app.get("/pqr",(req,res)=>{
  // console.log(req.cookies)
   
    
    res.send("helloooo....")
  
})


app.get("/nani",(req,res)=>{
  res.send("hello nani ....")
})

  // app.get("/aboutus",(req,res)=>{
  //   res.sendFile(__dirname+"/aboutus.html")
  // })
//   app.get("/careers",(req,res)=>{
//     res.sendFile(__dirname+"/careers.html")
//   })
// app.get("/style.css",(req,res)=>{
// res.sendFile(__dirname+"/style.css")
// })
  // app.get("/add",(req,res)=>{
  //   res.send("addition::"+(+req.query.num1 + +req.query.num2))
  // })

  // app.get("/neg/:w/:y",(req,res)=>{
  //   res.send("substraction::"+(+req.params.w / +req.params.y))
  // })
  
app.listen(4310,function(req,res){
    // console.log("root route for get method called")
    console.log("server running....")
});