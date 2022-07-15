//server.js
let port = 3107;
let express = require('express');
let sql = require('mssql');
let cors = require('cors');
let app = express();
app.use(express.json());
app.use(cors());

let config = {
 server: 'DESKTOP-LU5GC1T',
 user: 'capstone',
 password: 'capstone',
 database: 'Seth',
 options: { 'enableArithAbort': true
,   trustServerCertificate: true
},
 pool: { max: 100, min: 0, idleTimeoutMillis: 3000 }
};

let pool = new sql.ConnectionPool(config);
let poolConnect = pool.connect();

pool.on('error', err => { console.log('poolerror') });

app.get('/', (req, res) => { res.send('Welcome!'); });

app.get('/parks', function (req, res) {
 getParks(req, res)
});

async function getParks(req, res) {
 try {
  await poolConnect; 
  let request = pool.request();
  let result = await request
   .query('select * from dbo.parks');
  res.json(result.recordset);
 } catch (err) {
  console.error('SQL error', err);
 }
};

app.listen(port, () => { console.log(`MSSQL on ${port}!`); });

