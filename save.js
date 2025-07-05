const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
const PORT=5000;

const save=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'up'
});


app.use(cors());

app.use(express.json());

save.connect(err=>{
    if(err)throw err;
    console.log('MySQL Connected');
});

app.post('/api/detail',(req,res)=>{

    const{name,mobile,password,email}=req.body;

    save.query(`insert into detail(name,mobile,email,password) values('${name}','${mobile}','${email}','${password}')`);

    res.json({message:'Inserted SuccessFully !'});
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});