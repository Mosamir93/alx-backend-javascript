const express = require('express');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const totalStudents = `Number of students: ${lines.length - 1}`;
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

    return `${totalStudents}\n${fieldDetails}`;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  let output = 'This is the list of our students\n';

  try {
    const studentData = await countStudents(process.argv[2]);
    output += studentData;
  } catch (err) {
    output += err.message;
  }

  res.send(output);
});

app.listen(port);

module.exports = app;
