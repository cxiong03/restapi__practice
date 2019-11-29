const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('scripts'));

app.get('/', (req, res) => {
    res.send("Welcome to the root route (/) of your website");
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});