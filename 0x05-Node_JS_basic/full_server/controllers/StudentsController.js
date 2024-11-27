const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const path = process.argv[2];
    try {
      const fields = await readDatabase(path);
      const fieldNames = Object.keys(fields).sort();

      let response = 'This is the list of our students\n';
      fieldNames.forEach((field) => {
        response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      });
      res.status(200).send(response.trim());
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const path = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const fields = await readDatabase(path);
      const students = fields[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = StudentsController;
