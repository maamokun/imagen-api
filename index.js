const express = require('express');
const generate = require('./generate');

const app = express();

app.get('/nahida', async (req, res) => {
    const query = req.query;
    try {
        const buffer = await generate(query);
        res.set('Content-Type', 'image/png');
        res.send(buffer);
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});