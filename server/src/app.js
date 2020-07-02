let express = require('express')
let bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/status',function (req, res){
        res.send('hello nodejs servser')
})

app.get('/hello/:person',function (req, res) { 
        console.log('hello - ' + req.params.person) 
        res.send('sey hello with ' + req.params.person)
})

// get user by id
app.get('/user/:userId', function (req, res) { 
        res.send('ดูขอ้มูลผู้ใช้งาน : '+req.params.userId)
})
// get all user
app.get('/users', function (req, res) { res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
})

// create user
app.post('/user/', function (req, res) { res.send('ทาํ การสร้างผใู้ ชง้ าน:' + JSON.stringify(req.body))
})
// edit user
app.put('/user/:userId', function (req, res) { res.send('ทาํ การแกไ้ ขผใุ้ ชง้ าน:' + req.params.userId + ' : ' +
JSON.stringify(req.body)) })
// delete user
app.delete('/user/:userId', function (req, res) { res.send('ทาํ การลบผใุ้ ชง้ าน:' + req.params.userId + ' : ' +
JSON.stringify(req.body))
})

let port = 8081

app.listen(port, function(){
        console.log(('server running on '+ port))
})

