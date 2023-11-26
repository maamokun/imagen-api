const express = require('express');
const generate = require('./generate');

const app = express();

app.get('/nahida', async (req, res) => {
    const query = req.query;
    await generate(query).then((buffer) => {
        res.set('Content-Type', 'image/png');
        res.send(buffer);
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});