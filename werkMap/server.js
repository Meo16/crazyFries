const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crazyfries',
});

app.use(express.json());

app.get('/products', (req, res) => {
    pool.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: 'Failed to fetch products from the database' });
        }
        res.json(results);
    });
});

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));





