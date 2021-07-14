const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static('views'));


app.get('/',function(req,res){
    res.render('index', {
        "url": process.env.APIURL,
        "port": process.env.APIPORT,
        "appname": process.env.APPNAME
    })
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})