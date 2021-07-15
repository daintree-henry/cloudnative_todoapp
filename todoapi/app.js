const express = require('express')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

var conn = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "root",
    port     : 3306,
    database : "tododb",
});
// var conn = mysql.createConnection({
//     host     : process.env.MYSQL_HOST,
//     user     : process.env.MYSQL_USER,
//     password : process.env.MYSQL_ROOT_PASSWORD,
//     port     : process.env.MYSQL_PORT,
//     database : process.env.MYSQL_DATABASE
// });

conn.connect();

//할일 만들기
app.post('/item', (req, res) => {
    try {
        //현재 날짜 설정
        const d = new Date();
        const date = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
        //삽입 쿼리 작성
        let qry = `INSERT INTO todo (content, category, dueDate, createDate) VALUES ('${req.body.content}', '${req.body.category}', '${req.body.dueDate}', '${date}');`
        console.log(qry)
        //쿼리 수행
        conn.query(qry, (err, row) => {
            if (err) return res.status(400).send(err);
            console.log('todo created')
            res.json({ "status": 201, "msg": "post success" });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//할일 목록 보기
// GET /tasks?search="청소"
// GET /tasks?sort="dueDate|content"
app.get('/item', (req, res) => {
    try {
        //초기 쿼리문
        let qry = `SELECT * FROM todo`
            //검색문 추가
        if (req.query.search) {
            qry += ` WHERE content="${req.query.search}"`
        }
        //정렬 추가
        if (req.query.sort) {
            qry += ` ORDER BY ${req.query.sort}`
        }
        //쿼리 수행
        console.log("QUERY :",qry)
        conn.query(qry, (err, row) => {
            if (err) res.status(500).send(err);
            res.status(200).send(row);
        });
    } catch (err) {
        res.status(500).send(err);
    }
})

//할일 지우기
app.delete('/item/:id', (req, res) => {
    try {
        let qry = `DELETE FROM todo WHERE id=${req.params.id}`
        console.log(qry)
        conn.query(qry, (err, row) => {
            if (err) res.status(500).send(err);
            res.json({ "status": 201, "msg": "delete success" });
        });
    } catch (err) {
        res.status(500).send(err);
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



