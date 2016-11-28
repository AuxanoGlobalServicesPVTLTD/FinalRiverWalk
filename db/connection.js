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

// Testing connection here
pool.connect(function(err, client, done) {
    if (err) {
        return console.error('error fetching client from pool', err);
    }
    client.query('SELECT $1::int AS number', ['1'], function(err, result) {
        //call `done()` to release the client back to the pool
        done();

        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0].number);
        //output: 1
    });
});

pool.on('error', function(err, client) {
    console.error('idle client error', err.message, err.stack)
});
