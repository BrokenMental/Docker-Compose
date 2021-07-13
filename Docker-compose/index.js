const express = require('express');
const redis = require('redis');

const client = redis.createClient({
    host: 'redis-server',
    port: 6379 //기본 값, 6379
});

const app = express();
app.listen(6000);
console.log('server is running');

client.set('number', 0);

app.get('/', (req, res) => {
    client.get('number', (err, number) => {
        res.send('숫자가 1씩 올라갑니다. 숫자: ' + number);
        client.set('number', parseInt(number) + 1);
    });
});