let app = require('express')();
let http = require('http').Server(app);

//cors
var cors = require('cors')
app.use(cors())

//bodyParse
var bodyParser = require('body-parser');
app.use(bodyParser.text({ type: 'text/plain' }));
app.use(bodyParser.text({ type: 'application/json' }));



let FileHandler = require('./FileHandler');
let DBHandler = require('./DBHandler');

//routing
app.get('/getAllUsers', function (req, res) {
    //Way #1 - SQL Server
    DBHandler.getAllUsers().then(result => {
        console.dir(result);
        res.send(result.recordset);
    });

    //Way #2 - JSON File
    //res.send(FileHandler.getAllUsers());
});

app.post('/SignUp', function (req, res) {
    if (req.body === undefined) return;
    DBHandler.addNewUser(req.body);
});

http.listen(4000, function () {
    console.log('listening on *:4000');
});

