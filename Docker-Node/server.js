const express = require('express');

const PORT = 6000;

//app
const app = express();
app.get('/', (req, res) => {
    res.send('안뇽하세용!!');
});

app.listen(PORT);
console.log('Server is running');