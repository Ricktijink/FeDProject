const express = require('express')
    const app = express()
    
    app.use(express.static('public'));
    
    app.get('/', (req, res) => res.send('This is my database server for FeD project. '))
    
    app.listen(3000, () => console.log('Example app listening on port 3000!'))