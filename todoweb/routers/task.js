const express = require('express')
const router = new express.Router()
const conn = require('../db/mysql');

conn.connect((err) => {
    if (err) {
        console.log(err);
    }
});


//할일 만들기
router.post('/item', (req, res) => {
    try {
        //현재 날짜 설정
        const d = new Date();
        const date = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
            //삽입 쿼리 작성
        let qry = `INSERT INTO todo (content, category, dueDate, createDate) VALUES ('${req.body.content}', '${req.body.category}', '${req.body.dueDate}', '${date}');`
            //쿼리 수행
        console.log(qry)
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
router.get('/item', (req, res) => {
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
        console.log(qry)
        conn.query(qry, (err, row) => {
            if (err) res.status(500).send(err);
            res.status(200).send(row);
        });
    } catch (err) {
        res.status(500).send(err);
    }
})

//할일 지우기
router.get('/item/:id', (req, res) => {
    try {
        let qry = `DELETE FROM todo WHERE item_id=${req.params.id}`
        conn.query(qry, (err, row) => {
            if (err) res.status(500).send(err);
            console.log("todo deleted", row)
            res.json({ "status": 201, "msg": "delete success" });
        });
    } catch (err) {
        res.status(500).send(err);
    }
})



module.exports = router