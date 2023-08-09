const path = require('path');
const fs = require('fs');

// unique id creator
var uniqid = require('uniqid');

module.exports = (app) => {
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Db/db.json'));
  })

  app.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('Db/db.json');
    db = JSON.parse(db);
    res.json(db);
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),
    };
    db.push(userNote);
    fs.writeFileSync('Db/db.json', JSON.stringify(db));
    res.json(db);

  });
};