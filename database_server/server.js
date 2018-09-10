const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

function createMyConnection() {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'fedProject'
    });
    return connection;
}

// Get items from database
app.get('/', (req, res) => {
    var connection = createMyConnection();
    connection.connect()

    connection.query('select * from articles', function (err, rows, fields) {
        if(err)
        console.log('Reload get ' + err)

        res.send(JSON.stringify(rows))
    })
    connection.end()
})

// Get items of a specified subject from database
app.get('/:subject', (req, res) => {
    var connection = createMyConnection();
    connection.connect()

    console.log("in get one " + req.params.subject)

    connection.query(`select * from articles where subject = ?`, req.params.subject , function (err, rows, fields) {
        if(err)
        console.log('Reload get ' + err)

        res.send(JSON.stringify(rows))
    })
    connection.end()
})

// Send items to database NOTE deleted published for now
app.post('/creatememo', (req, res) => {
    var articles = {id: 0, subject: req.body.subject, title: req.body.title, description: req.body.description, text: req.body.text};
    var connection = createMyConnection();

    connection.connect()
     connection.query('insert into articles set ?', req.body , function (err, rows, fields) {
        if(err)
        console.log(err)
    })
    connection.end()

    res.status(200).end()
});

// Delete items from database
app.delete('/:id', (req, res) => {

    var connection = createMyConnection();

    connection.connect()
    connection.query('delete from articles where id = ?', req.params.id , function (err, rows, fields) {
        if(err)
        console.log('Delete query error: ' + err)

        res.status(200).end()
    })
    connection.end()
})

// Get information of one item from database
app.get('/:id', (req, res) => {

    console.log("in get one " + req.params.id)

    var connection = createMyConnection();

    connection.connect()
    connection.query('select * from articles where id = ?', req.params.id , function (err, rows, fields) {
        if(err)
        console.log(err)

        res.send(JSON.stringify(rows))
    })
    connection.end()
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))