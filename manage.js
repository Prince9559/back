const exprees=require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=exprees();
const PORT=5000;


const manage=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'up'
});

app.use(cors());
app.use(exprees.json());

manage.connect(err=>{
    if(err)throw err;
    alert("MySQL Connected !");
})

app.post('/api/manage',(req,res)=>{

    const{name,mobile,email,password}=req.body;

    manage.query(`insert into manage(name,mobile,email,password) values('${name}','${mobile}','${email}','${password}')`);

    res.json({message :'Inserted Sucessfuly !'});
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});