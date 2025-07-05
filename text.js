const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
const PORT=5000;

const text=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sign'
});

app.use(cors());
app.use(express.json());

app.post('/api/up',(req,res)=>{

    const[name,mobile,email,password]=req.body;

    text.query(`insert into up(name,mobile,email,password)  values('${name}','${mobile}','${email}','${password}')`);

    req.json({messsage:'Insert Sucessfully !'});
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});