# Database

- `show databases;`
- `create database fedProject;`
- `use fedProject;`
- ``` expressjs
    create table articles (
        id integer primary key auto_increment,
        subject varchar(255),
        title varchar(255),
        description varchar(255),
        published date,
        text text(65535) ); 
    ```
- ``` SQL
    insert into articles (subject, title, description, published, text)
    values ('mysql', 'Introduction to SQL', 'SQL is a standard language for accessing and manipulating databases.', now(), 'What is SQL?
    SQL stands for Structured Query Language
    SQL lets you access and manipulate databases
    SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987
    What Can SQL do?
    SQL can execute queries against a database
    SQL can retrieve data from a database
    SQL can insert records in a database
    SQL can update records in a database
    SQL can delete records from a database
    SQL can create new databases
    SQL can create new tables in a database
    SQL can create stored procedures in a database
    SQL can create views in a database
    SQL can set permissions on tables, procedures, and views'),

    ('angular', 'Angular 6 Introduction','AngularJS is a JavaScript framework. It can be added to an HTML page with a <script> tag. AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.', now(), 'AngularJS is a JavaScript Framework
    AngularJS is a JavaScript framework. It is a library written in JavaScript.
    AngularJS Extends HTML
    AngularJS extends HTML with ng-directives.
    The ng-app directive defines an AngularJS application.
    The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.
    The ng-bind directive binds application data to the HTML view.'),

    ('expressjs', 'ExpressJS Introduction', 'Express4.16.3
    Fast, unopinionated, minimalist web framework for Node.js', now(), 'Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

    The original author, TJ Holowaychuk, described it as a Sinatra-inspired server, meaning that it is relatively minimal with many features available as plugins. Express is the backend part of the MEAN stack, together with MongoDB database and AngularJS frontend framework.'),

    ('nodejs', 'Node.js Introduction', 'Download Node.js from the official Node.js web site: https://nodejs.org', now(), 'What is Node.js?
    Node.js is an open source server environment
    Node.js is free
    Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
    Node.js uses JavaScript on the server
    
    Why Node.js?
    Node.js uses asynchronous programming!
    A common task for a web server can be to open a file on the server and return the content to the client.
    Here is how PHP or ASP handles a file request:
    Sends the task to the computers file system.
    Waits while the file system opens and reads the file.
    Returns the content to the client.
    Ready to handle the next request.' );
     ```
- `select * from articles;`
- ...
- `delete from articles where id = 4;`