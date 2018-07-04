const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const privateKey = 'cellwatch';
const router = express.Router();
const multer  = require('multer');
const storage = multer.diskStorage({
  destination: 'public/imguploaded/',
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });


const connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '12345678',
	database: 'cellwatchdb',
	port: 3306
});
const port = process.env.API_PORT || 3001;

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  } 
  console.log('connected as id ' + connection.threadId);
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));


app.use('/api', router);

//login
router.post('/login', (req, res, next) => {
  const reqObj = req.body;
  const username = reqObj.username;
  const password = reqObj.password;
  console.log(req.body);

  connection.query('SELECT * FROM admin WHERE username =? AND password =?',[username,password], (error, results, fields) => {
    if (error) throw error;

      if(results.length > 0){

          const tokenData = {
            username: results[0].username,
            id: results[0].id
          };
          const result = {
            user: results[0],
            token: jwt.sign(tokenData, privateKey)
          };

          res.json(result);
      }else{
          res.send('User or Password is incorrect!');
      }

  });
});

//insert
router.post('/uploadbroadband', upload.single('imageupload'), (req, res, next) => {
  const reqObj = req.body;
  console.log('uploading..')
  if(req.file){
    
    const imagename = req.file.originalname;
    const caption = reqObj.caption;
    const description = reqObj.description;
    const broadband = {
        "imageupload": imagename,
        "caption": caption,
        "description": description
    }
    
    connection.query('INSERT INTO broadband SET ?', broadband, (error, results, fields) => {
      if (error) throw error;
      console.log(req.file) 
      
      res.json({success:true})
    });

  }
})

//Select broadband
router.get('/selectbroadband', (req, res, next) => {
  connection.query("SELECT * FROM broadband", (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

// Update broadband
router.post('/updatebroadband', (req, res, next) => {
    console.log(req.body);
    const reqObj = req.body;
    const caption = reqObj.caption;
    const description = reqObj.description;
    connection.query('UPDATE broadband SET caption = ?, description = ? WHERE id = ?', [caption, description, reqObj.id], function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
});

//insert schedule
router.post('/uploadschedule', (req, res, next) => {
  const reqObj = req.body;
  console.log('uploadingschedule..')
  if(req.file){   
    const projectname = req.file.projectname;
    const dateofproject = reqObj.dateofproject;
    const technician = reqObj.technician;
    const details = reqObj.details;
    const schedule = {
        "projectname": projectname,
        "dateofproject": dateofproject,
        "technician": technician,
        "details": details
    }   
    connection.query('INSERT INTO schedule SET ?', schedule, (error, results, fields) => {
      if (error) throw error;
      console.log(req.file)
      console.log('after query')  
      res.json({success:true})
    });
  }
})

app.listen(port, () => {
 console.log(`api running on port ${port}`);
});