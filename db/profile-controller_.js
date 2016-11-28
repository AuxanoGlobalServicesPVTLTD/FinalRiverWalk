var pg = require('pg');
var config = {
    user: 'postgres',
    database: 'riverwalk',
    password: 'admin123',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};
var pool = new pg.Pool(config);

function retrieveUser() {

}

module.exports = {
    addAddress: function(req, res) {
        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('error fetching client from pool', err);
            } // end of error catch while creating pool connection
			
			//var query = client.query("insert into address (street, city, state, zip) " +
                //"values ('" + req.body.street + "','" + req.body.city + "','" +
                //req.body.state + "','" + req.body.zip + "')"); // create the query
				
			var query = client.query("update public.user set street_address='" + req.body.street + 
				"',city_address='" + req.body.city + 
				"',state_address='" + req.body.state +
				"',zip_address='" + req.body.zip + "' WHERE email=$1");
				
				
            query.on("end", function(result) {
                client.end();
                res.send('Success');
                res.end();
            }); // handle the query
            done(); // release the client back to the pool
        }); // end of pool connection
        pool.on('error', function(err, client) {
            console.error('idle client error', err.message, err.stack)
        }); // handle any error with the pool
    }, // End addAddress function

    checkRegister: function(req, res) {
        pool.connect(function(err, client, done) {
            if (err) {
                console.error(err);
                // should return response error like 
                return res.status(500).send();
            }
            var emailCheck = "SELECT id from public.user WHERE email=$1";
            client.query(emailCheck, [req.body.email], function(err, result) {
                if (err) {
                    console.error(err);
                    res.status(500).send();
                    return done(); // always close connection
                }
                if (result.rowCount > 0) {
                    let user = result.rows[0]
                        // return your user
                    return done(); // always close connection
                } else {
                    var emailInsert = "insert into public.user (user_auth_level, email, account_locked, contract) " +
                        "values ('1', $1,'false','false') RETURNING *"
                    client.query(emailInsert, [req.body.email], function(err, result) {
                        if (err) {
                            console.error(err);
                            res.status(500).send();
                            return done(); // always close connection
                        } else {
                            if (result.rowCount > 0) {
                                let user = result.rows[0]
                                    // return your user
                                return done(); // always close connection
                            }
                        }

                    });
                }
            })
        })
        pool.on('error', function(err, client) {
            console.error('idle client error', err.message, err.stack)
        });
    }
};
