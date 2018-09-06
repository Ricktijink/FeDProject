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

app.get('/', (req, res) => {
    var connection = createMyConnection();
    connection.connect()

    connection.query('select * from articles', function (err, rows, fields) {
        console.log(err)
        // console.log(JSON.stringify(rows))
        res.send(JSON.stringify(rows))
    })
    connection.end()
})

app.post('/', (req, res) => {
    var connection = createMyConnection();

    connection.connect()
     connection.query('insert into articles set ?', req.body , function (err, rows, fields) {
        console.log(err)
    })
    connection.end()

    res.status(200).end()
})

app.delete('/:id', (req, res) => {

    console.log("in delete " + req.params.id)


    var connection = createMyConnection();

    connection.connect()
    connection.query('delete from articles where id = ?', req.params.id , function (err, rows, fields) {
        console.log(err)
    })
    connection.end()

    res.status(200).end()
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))