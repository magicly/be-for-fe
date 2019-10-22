const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test1',
});

connection.connect();

connection.query('select * from users', function(error, results, fields) {
  if (error) throw error;
  console.log(
    results.map(r => {
      return {
        id: r.id,
        name: r.name,
        age: r.age,
        wx: r.wx,
      };
    }),
  );
});

connection.end();
