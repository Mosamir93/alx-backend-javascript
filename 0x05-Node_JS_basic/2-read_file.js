const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    process.stdout.write(`Number of students: ${lines.length - 1}\n`);
    const fields = {};

    lines.slice(1).forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    Object.entries(fields).forEach(([field, names]) => {
      process.stdout.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
