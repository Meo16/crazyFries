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

// read
app.get('/products', (req, res) => {
    pool.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: 'Failed to fetch products from the database' });
        }
        res.json(results);
    });
});

// laatste orderId pakken uit de database
app.get('/latestOrderId', (req, res) => {
    pool.query('SELECT MAX(orderId) AS latestOrderId FROM productsorder', (err, results) => {
        if (err) {
            console.error('Error executing query: ', err);
            return res.status(500).json({ error: 'Failed to fetch the latest order ID from the database' });
        }

        const latestOrderId = results[0].latestOrderId;
        res.json({ latestOrderId });
    });

});

// create
app.post('/addToCart', (req, res) => {
    const { orderId, productId, productName, totalPrice, quantity } = req.body;
    pool.query(
        'INSERT INTO productsorder (orderId, productId, naam, totaalPrijs, aantal) VALUES (?, ?, ?, ?, ?)',
        [orderId, productId, productName, totalPrice, quantity],
        (err, results) => {
            if (err) {
                console.error('Error executing query: ', err);
                return res.status(500).json({ error: 'Failed to add order to cart' });
            }
            res.json({ success: true });
        }
    );
});

// producten ophalen op basis van orderId
app.get('/products/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    pool.query(
        'SELECT * FROM productsOrder WHERE orderId = ?',
        [orderId],
        (err, results) => {
            if (err) {
                console.error('Error executing query: ', err);
                return res.status(500).json({ error: 'Failed to fetch products on orderId from the database' });
            }
            res.json(results);
        }

    );
});





app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));