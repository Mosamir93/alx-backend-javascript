const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = '1245';

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const studentCount = `Number of students: ${lines.length - 1}`;
    const fields = {};

    lines.slice(1).forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    const fieldDetails = Object.entries(fields)
      .map(([field, names]) => `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`)
      .join('\n');

    return `${studentCount}\n${fieldDetails}`;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain');
    countStudents(process.argv[2])
      .then((result) => {
        res.statusCode = 200;
        res.write('This is the list of our students\n');
        res.end(result);
      })
      .catch((err) => {
        res.statusCode = 404;
        res.end(`${err.message}`);
      });
  }
});

app.listen(port, hostname);

module.exports = app;
