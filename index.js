const express = require('express');
const generate = require('./generate');
const klee = require('./klee');
const nari = require('./tighnari');

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

app.get('/klee', async (req, res) => {
    const query = req.query;
    try {
        const buffer = await klee(query);
        res.set('Content-Type', 'image/png');
        res.send(buffer);
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/tighnari', async (req, res) => {
    const query = req.query;
    try {
        const buffer = await nari(query);
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