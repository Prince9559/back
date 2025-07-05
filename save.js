 const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

// Allow frontend origin on Vercel
app.use(cors({
  origin: 'https://front-git-master-prince-kumars-projects-a808d539.vercel.app'
}));

app.use(express.json());

// MySQL Connection
const save = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'up'
});

save.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected');
});

// API Route
app.post('/api/num', (req, res) => {
  const { name, mobile, password, email } = req.body;

  if (!name || !mobile || !password || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = `INSERT INTO num (name, mobile, email, password) VALUES (?, ?, ?, ?)`;

  save.query(query, [name, mobile, email, password], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database Error' });
    }
    res.json({ message: 'Inserted Successfully!' });
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
