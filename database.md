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
    values ('mysql', 'How to write mysql memo''s', 'In this memo you will learn how to make use of this tool to write your own memo''s.', now(), 'Wat is Lorem Ipsum?
    Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren ''60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.'),
    ('angular', 'How to write Angular memo''s','In this memo you will learn how to make use of this tool to write your own memo''s.', now(), 'Wat is Lorem Ipsum?
    Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren ''60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.'),
    ('expressjs', 'How to write expressjs memo''s', 'In this memo you will learn how to make use of this tool to write your own memo''s.', now(), 'Wat is Lorem Ipsum?
    Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren ''60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.'),
    ('nodejs', 'How to write nodejs memo''s', 'In this memo you will learn how to make use of this tool to write your own memo''s.', now(), 'Wat is Lorem Ipsum?
    Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren ''60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.' );
     ```
- `select * from articles;`
- ...
- `delete from articles where id = 4;`