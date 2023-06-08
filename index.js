const express = require("express");
const app = express();


app.set("view engine","ejs")

app.use(express.static('public'));
const port = 3300

app.listen(port,()=>{
    console.log("잘 실행중");
})

//라우터 세팅
app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get("/sub",(req,res)=>{
    res.render("sub.ejs")
})

app.get("/sub/top",(req,res)=>{
    res.render("subtop.ejs")
})


app.get("/sub/shopping",(req,res)=>{
    res.render("test.ejs")
})
