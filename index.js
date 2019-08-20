const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => res.send('Hello World!'))

app.get('/logs', (req, res)=> {
    console.log('Open page logs');
    res.send('');
});

app.get('/user', (req, res) => {
    let data = [{
        'name' : 'Muhammad Bafaqih',
        'kelas' : 'XII-RPL'
    },
    {
        'name' : 'Muhammad Fahrul',
        'kelas' : 'XII-RPL'
    }]
    res.send(data, 200)
})
app.get('/error-server', (req, res)=>{
    res.send(500);
})
app.get('/bad-request', (req, res)=>{
    res.send(400);
})
app.get('/created', (req, res)=>{
    res.send(201)
})
app.listen(port, (error) =>{
    console.log('Server Jalan di 127.0.0.1:3000 ya njingg')
})