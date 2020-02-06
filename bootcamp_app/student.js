const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

let args = process.argv.slice(2);

pool.query(`
SELECT id, name, cohort_id 
FROM students 
LIMIT 5;
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.log('query error', err.stack));

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, [`${args[0]}%` , args[1]])
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
})
.catch(err => console.log('query error', err.stack));