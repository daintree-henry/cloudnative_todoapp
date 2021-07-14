const express = require('express')
const taskRouter = require('./routers/task')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/',function(req,res){
    res.render('index.html')
 });

app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})