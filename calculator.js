const express=require("express");
const bodyParser =require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
   res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
   var num1=Number(req.body.num1);
   var num2=Number(req.body.num2);
   var sel=req.body.select;
   if(sel===1){
    var result=num1 + num2;
    res.send("thanks your value is " + result);

   } else if(sel ===2){
    var result = num1 * num2;
    res.send("thanks your value is " + result);

   } else if(sel === 3){
    var result = num1 - num2;
    res.send("thanks your value is " + result);


   } else{
    var result= num1 / num2;
    res.send("thanks your value is " + result);

   }
   console.log(sel);
   console.log(result);
   console.log(num1,num2);
})
app.listen(3000, function(){
    
    console.log("server is running on port 3000.");
})