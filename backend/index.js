const express=require('express');
const ejs = require('ejs');
const path = require('path');
const requests=require("requests");
// const request=require("request");
const app=express();
app.use(express.urlencoded({extended: true}));





app.set('view engine','ejs');
app.use('/public', express.static('public'));
app.get("/",(req,resp)=>
{
    resp.render('home');
    // resp.send(`<p id="city">hello</p>`);
})

app.post('/temp',(req,resp)=>
{
    let  city=req.body.city;
    
    // console.log(typeof(city))
    let url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=d2239184eefb923448a5a7204d7f8397";
    requests(url).on("data",(chunk)=>{
        const obj=JSON.parse(chunk);
        // console.log(obj.main.temp);
         resp.render('home1',{temp:obj,city_name:city});
    })
    // .on("end",(err)=>{
    //     if(err)return console.log("connection closed due to error",err);
    //     // console.log("end");
    //     // resp.render('home1',{temp:obj,city_name:city});
    //     // resp.end();
    // }
    // );
// console.log(obj.main.temp);
    // resp.render('home',{temp:chunk,city_name:city});
// console.log(req.body.city);
// resp.render('home');
})






app.listen(8000);