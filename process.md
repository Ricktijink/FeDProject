# Work process

## 1. Database (mySQL/MariaDB)
- `show databases;`
- `create database express;`
- `use express;`
- ```
  create table users (
  id integer primary key auto_increment,
  name varchar(255),
  password varchar(255)
  );
  ```
 - ``` 
 insert into users(id, name, password)
 values (1, 'luisa', 'geheim');
 ```
- `select * from users;`


## 2. Webserver 
- Create a `server.js` file
  ```
  const express = require('express')
  const app = express()
  app.get('/', (req, res) => res.send('Hello World!'))
  app.listen(3000, () => console.log('Example app listening on port 3000!'))
  ```
- Create a `package.json` file
  ```
  {
    "name": "ExpressJS2",
    "version": "0.2.0",
    "description": "A sample Node.js app using Express 4",
    "dependencies": {
        "express": "^4.13.3"
    }
  }
  ```
- `npm install`
- `node server.js`
- Open in browser `localhost:3000`

- Make everythng that is in the map public accessible
  `app.use(express.static('public'));`

- install mySQL package
`npm install mysql` 

## 3. Web (Angular)
- `npm install -g @angular/cli`
- `ng new angular-express-angular --directory ./`
- `ng serve --open`
- `ng generate component ...`




https://hackernoon.com/setting-up-node-js-with-a-database-part-1-3f2461bdd77f

https://www.sitepoint.com/using-node-mysql-javascript-client/

http://programmeren.org/frontend