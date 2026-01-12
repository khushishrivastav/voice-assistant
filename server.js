const {exec} = require('child_process');
const express = require('express');
const path = require("path");


const app= express();


app.get('/',(req,res)=>
{
 res.sendFile(path.join(__dirname, 'Front-End/page1.html'));
});

app.get('/open-notepad',(req,res)=>
{ exec("notepad");
});

app.get('/open-mspaint',(req,res)=>
{
 exec("mspaint");
});
//app.get('/open-${command1}',(req,res)=>
//{ // find command 1 in system 
 // if(mil gya ) {exec(command1)}
  // else { nhi mila}
//});
 
app.get('/open-cal',(req,res)=>
{
 exec("calc");
});
app.get('/open-word',(req,res)=>
{
 res.send("word opened");
 exec('start "" winword /n', { shell: true });

});
app.get('/open-msexcel',(req,res)=>
{
 exec(' excel', { shell: true });
 res.send("excel opened");
});

app.use(express.static(path.join(__dirname,'Front-End')));
app.listen(3000, ()=>
{
 console.log("server runing");


});


