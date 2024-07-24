var express = require('express');
var router = express.Router();
const {Pool} = require('pg')
/* GET users listing. */
router.get('/',   function(req, res, next) {
  const error =  new Error()
throw error.status
 /* const pool = new Pool({
              host : 'localhost',
              user: 'user_name',
              pasword : 'user_password',
              database: 'my_db',
              max: 10,                            //optional
              idleTimeoutMillis: 3000,           //optional
              connecTimeoutMillis: 3000,        //optional
          })
              pool.connect.then((client) => {
            return client.query('select * FROM my_db WHERE id = $1', [1])
                   .then((res) => {
                    client.release()
                  console.log(res.rows[0])
                }).catch((err) => {
                  err;
                  client.release()

                })
              })*/
              
});

module.exports = router;
