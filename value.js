const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
const PORT=5000;

const value=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'signs'
});

app.use(cors());
app.use(express.json());

value.connect(err => {
    if (err) throw err;
    console.log('MySQL connected');
});


app.post('/api/page', (req, res) => {

const {name,mobile,email,password}=req.body;

value.query(`insert into page(name,mobile,email,password)  values('${name}','${mobile}','${email}','${password}')`);


res.json({ message: 'inserted successfully!' });

  
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

